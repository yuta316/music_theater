<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Review;

class ReviewController extends Controller
{
    public function show($movie_id) {
        return view('review.show')->with([
            'movie_id' => $movie_id,
        ]);
    }
    public function post($movie_id, Request $request, Review $review) {
        $input = $request->input();
        $input['user_id'] = auth()->user()->id;
        $input['movie_id'] = (int)$movie_id;
        $review->fill($input)->save();
        $path = "/review/${movie_id}/show";
        return redirect($path);
    }
}
