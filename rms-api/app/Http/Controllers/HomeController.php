<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\MainJob;
use App\Traits\ApiResponseWithHttpSTatus;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class HomeController extends Controller
{
    use ApiResponseWithHttpSTatus;
    public function index()
    {
        $data['categories'] = Category::where([['status','active']])->take(8)->get();
        $data['featured_job'] = MainJob::where([['status','active'],['is_featured',true]])->get()->random(6);
        $data['latest'] = MainJob::where('status','active')->latest('created_at')->get()->random(6);
        return $this->apiResponse('success',$data,Response::HTTP_OK,true);
    }
}
