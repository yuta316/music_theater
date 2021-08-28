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

Route::middleware('auth')->group(function (){

    Route::prefix('user')->group(function () {
        Route::get('', 'UserController@index');
        Route::get('{user}/edit', 'UserController@edit');
        Route::get('{user}', 'UserController@show');
        Route::put('{user}', 'UserController@update');
    });

    Route::prefix('image')->group(function () {
        Route::post('', 'ImageController@store');
    });
     
    Route::prefix('movie')->group(function () {
        Route::get('', 'ReviewController@index'); 
        Route::get('{movie_id}/review', 'MovieController@index');
        Route::get('{movie_id}/{movie}/show', 'MovieController@show');
    });
    
    Route::prefix('review')->group(function () {
        Route::get('{reviews}/show', 'ReviewController@show');
        Route::post('{id}/post', 'ReviewController@post');
    });
    Route::get('/{any}', function(){
        return view('app');
    })->where('any', '.*');
});


