<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use App\Jobs\PasswordResetJob;
use App\Jobs\VerifyUserJobs;
use App\Models\User;
use App\Traits\ApiResponseWithHttpSTatus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use JWTAuth;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    use ApiResponseWithHttpSTatus;
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['login', 'register','accountVerify','forgotPassword','updatePassword']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request){
    	$validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        if (! $token = JWTAuth::attempt($validator->validated())) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->createNewToken($token);
    }

    /**
     * Register a User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|between:2,100',
            'email' => 'required|string|email|max:100|unique:users',
            'password' => 'required|string|confirmed|min:6',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }

        $user = User::create(array_merge(
                    $validator->validated(),
                    ['password' => bcrypt($request->password),'slug'=>Str::random(15),'token'=>Str::random(20),'status'=>'active']
                ));
        if($user){
            $details = ['name'=>$user->name, 'email'=>$user->email,'hashEmail'=>Crypt::encryptString($user->email),'token'=>$user->token];
            dispatch(new VerifyUserJobs($details));
        }
        return $this->apiResponse('User successfully registered',$data=$user,Response::HTTP_OK,true);
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function accountVerify($token,$email) {
        $user = User::where([['email',Crypt::decryptString($email)],['token',$token]])->first();
        if($user->token == $token){
            $user->update([
                'verify'=>true,
                'token'=>null
            ]);
            return redirect()->to('http://127.0.0.1:8000/verify/success');
        }
        return redirect()->to('http://127.0.0.1:8000/verify/invalid_token');
    }



    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout() {
        auth()->logout();
        return $this->apiResponse('Sign out success',null,Response::HTTP_OK,true);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh() {
        return $this->createNewToken(auth()->refresh());
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function userProfile() {
        return $this->apiResponse('Sign out success',$data=auth()->user(),Response::HTTP_OK,true);
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function createNewToken($token){
        $data['token'] = $token;
        $data['token_type'] = 'bearer';
        $data['expires_in'] = JWTAuth::factory()->getTTL() * 60;
        $data['user'] = auth()->user();
        return $this->apiResponse('success',$data,Response::HTTP_OK,true);
    }

    public function forgotPassword(Request $request)
    {
        $user = User::where('email',$request->email)->first();
            if ($user) {
                $token = Str::random(15);
                $details = ['name'=>$user->name,'token'=>$token,'email'=>$user->email,'hashEmail'=>Crypt::encryptString($user->email)];
                if(dispatch(new PasswordResetJob($details))){
                   DB::table('password_resets')->insert([
                       'email'=>$user->email,
                       'token'=>$token,
                       'created_at'=>now()
                   ]);
                   return $this->apiResponse('Password reset link has been sent to your email address',null,Response::HTTP_OK,true);
                }
            } else {
                return $this->apiResponse('invalid email',null,Response::HTTP_OK,true);
            }

    }


    public function updatePassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required|string|min:6',
            'token'=>'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        $email = Crypt::decryptString($request->email);
        $user = DB::table('password_resets')->where([['email',$email],['token',$request->token]])->first();
        if(!$user){
            return $this->apiResponse('Invalid email address or token',null,Response::HTTP_OK,true);
        }else{
            $data = User::where('email',$email)->first();
            $data->update([
                'password'=> Hash::make($request->password)
            ]);
            DB::table('password_resets')->where('email',$email)->delete();
            return $this->apiResponse('Password updated !',null,Response::HTTP_OK,true);
        }
    }
}
