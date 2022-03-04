<?php

namespace App\Http\Controllers;

use App\Http\Requests\ApplicationRequest;
use App\Models\Application;
use App\Models\MainJob;
use App\Traits\ApiResponseWithHttpSTatus;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class ApplicationController extends Controller
{
    use ApiResponseWithHttpSTatus;
    public function __construct()
    {
       // $this->middleware('auth:api')->except('store');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return 'success';
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ApplicationRequest $request)
    {
        if($request->hasFile('cv')){
            $file = $request->file('cv');
            $fileName = time().'_'.$file->getClientOriginalName();
            $file->move(public_path('files/applications'), $fileName);
        }else{
            $fileName = null;
        }
        $data['apply'] = Application::create([
            'email' => $request->email,
            'cv' => $fileName,
            'job_id' => $request->job_id,
            'slug' =>Str::slug(Str::random(10).'_'.$fileName.'_'.$request->job_id),
        ]);

        if($data){
            $job = MainJob::find($request->job_id);
            $job->update([
                'count' => $job->count + 1,
            ]);
            return $this->apiResponse('success',$data,Response::HTTP_OK,true);
        }else{
            return $this->apiResponse('error',null,Response::HTTP_BAD_REQUEST,false);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Application  $application
     * @return \Illuminate\Http\Response
     */
    public function show(Application $application)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Application  $application
     * @return \Illuminate\Http\Response
     */
    public function edit(Application $application)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Application  $application
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Application $application)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Application  $application
     * @return \Illuminate\Http\Response
     */
    public function destroy(Application $application)
    {
        //
    }
}
