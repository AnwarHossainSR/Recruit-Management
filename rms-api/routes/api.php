<?php

use App\Http\Controllers\auth\AuthController;
use App\Http\Controllers\CategoryController;
use Illuminate\Support\Facades\Route;

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);
    Route::get('/verify/{token}/{email}', [AuthController::class, 'accountVerify']);
    Route::post('/forgot-password', [AuthController::class, 'forgotPassword']);
    Route::post('/update-password', [AuthController::class, 'updatePassword']);
});

Route::group(['middleware' => 'api'], function ($router) {
    Route::resource('/categories', CategoryController::class);
});
