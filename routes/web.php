<?php

Route::prefix('login')->group(function () {
    Route::get('', 'Auth\LoginController@showLoginForm')->name('login');
    Route::post('', 'Auth\LoginController@login');

    Route::get('line', 'LineLoginController@index');
    Route::get('{social}', 'Auth\LoginController@redirectToProvider');
    Route::get('line/callback', 'LineLoginController@handleProviderCallback');
    Route::get('{social}/callback', 'Auth\LoginController@handleProviderCallback');
});

Route::middleware('auth')->group(function (){
    Route::post('/loggedout', function(){
        auth()->logout();
    });
    
    Route::prefix('user')->group(function () {
        Route::get('', 'UserController@index');
        Route::get('{user}/edit', 'UserController@edit');
        Route::get('{user}', 'UserController@show');
        Route::put('{user}', 'UserController@update');
    });

    Route::prefix('image')->group(function () {
        Route::post('review', 'ImageController@reviewStore');
        Route::post('', 'ImageController@store');
    });
     
    Route::prefix('movie')->group(function () {
        Route::get('', 'ReviewController@index');
        Route::get('{user}', 'ReviewController@userIndex'); 
        Route::get('{movie_id}/review', 'MovieController@index');
        Route::get('{movie_id}/{movie}/show', 'MovieController@show');
    });
    
    Route::prefix('review')->group(function () {
        Route::get('ranking', 'ReviewController@ranking');
        Route::get('{reviews}/show', 'ReviewController@show');
        Route::post('{id}', 'ReviewController@post');
        Route::get('like/{review}', 'ReviewController@like');
        Route::get('unlike/{review}', 'ReviewController@unlike');
    });
    Route::get('/{any}', function(){
        return view('app');
    })->where('any', '.*');
});


