<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Traits\ApiResponseWithHttpSTatus;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class HomeController extends Controller
{
    use ApiResponseWithHttpSTatus;
    public function index()
    {
        $data['categories'] = Category::where([['status','active']])->take(8)->get();
        return $this->apiResponse('success',$data,Response::HTTP_OK,true);
    }
}
