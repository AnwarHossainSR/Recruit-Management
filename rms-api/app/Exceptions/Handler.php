<?php

namespace App\Exceptions;

use App\Traits\ApiResponseWithHttpSTatus;
use Exception;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\UnauthorizedException;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Exception\MethodNotAllowedException;

class Handler extends ExceptionHandler
{
    use ApiResponseWithHttpSTatus;
    /**
     * A list of the exception types that are not reported.
     *
     * @var string[]
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var string[]
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->renderable(function (Exception $e, $request) {
            return $this->handleException($request, $e);
        });
    }

    public function handleException($request, Exception $exception)
    {
        if ($exception instanceof ModelNotFoundException) {
            return $this->apiResponse(
                'Model not-found',
                null,
                Response::HTTP_NOT_FOUND,
                false
            );
        } else if ($exception instanceof NotFoundHttpException) {
            return $this->apiResponse(
                'Not found',
                null,
                Response::HTTP_NOT_FOUND,
                false
            );
        } else if ($exception instanceof MethodNotAllowedException) {
            return $this->apiResponse(
                'Bad method',
                null,
                Response::HTTP_METHOD_NOT_ALLOWED,
                false
            );
        } else if ($exception instanceof HttpException) {
            return $this->apiResponse(
                'not found',
                null,
                Response::HTTP_NOT_FOUND,
                false
            );
        } else if ($exception instanceof UnauthorizedException) {
            return $this->apiResponse(
                'Unauthorized',
                null,
                Response::HTTP_UNAUTHORIZED,
                false
            );
        } else if ($exception instanceof AuthenticationException) {
            return $this->apiResponse(
                'Authentication error',
                null,
                Response::HTTP_UNAUTHORIZED,
                false
            );
        } else {
            return $this->apiResponse(
                $exception->getMessage(),
                null,
                Response::HTTP_INTERNAL_SERVER_ERROR,
                false
            );
        }
    }
}
