<?php

use Illuminate\Support\Facades\Route;
//use App\Http\Controllers;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
//    return view('welcome');
    return view('app');
});

Route::get('/test', [App\Http\Controllers\TestController::class, 'index'])->name('test');
Route::post('/test', [App\Http\Controllers\TestController::class, 'start'])->name('starttest');
/*
Route::get('/home', function () {
//    return view('welcome');
    return view('app');
});
*/
//Auth::routes();

//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
