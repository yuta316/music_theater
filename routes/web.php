<?php

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

Auth::routes();

Route::get('/home', 'ReviewController@index');
Route::prefix('movie')->group(function () {
    Route::get('{id}/show', 'MovieController@show');
});
Route::prefix('review')->group(function () {
    Route::get('{reviews}/show', 'ReviewController@show');
    Route::post('{id}/post', 'ReviewController@post');
});


