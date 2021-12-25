<?php

namespace App\Traits;

use Symfony\Component\HttpFoundation\Response;

trait ApiResponseWithHttpSTatus
{
    protected function apiResponse(string $message,$data=null,int $code = Response::HTTP_OK,bool $status = true, $errors = null){
        return response([
            'status'=>$status,
            'data'=>$data,
            'message'=>$message,
            'error'=>$errors
        ],$code);
    }
}
