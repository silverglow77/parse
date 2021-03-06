<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\GameController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::prefix('/user')->group(function (){
    Route::post('/login',[LoginController::class, 'login']);
    Route::post('/register',[LoginController::class, 'register']);
    Route::group(['middleware' => ['auth:api']], function () {
        Route::get('/user',[LoginController::class, 'userdata']);
        Route::get('/logout',[LoginController::class, 'logout']);
    });
});

Route::group(['middleware' => ['auth:api']], function () {
    Route::resource('posts', PostController::class);
    Route::resource('games', GameController::class);
});
