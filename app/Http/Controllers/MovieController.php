<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Review;

class MovieController extends Controller
{
    public function show($movie_id) {
        $reviews = Review::where('movie_id',$movie_id)->get();
        return view('movie.show')->with([
            'movie_id' => $movie_id,
            'reviews' => $reviews,
        ]);
    }
}
