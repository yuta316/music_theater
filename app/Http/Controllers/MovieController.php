<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Vender\CallTwitterApi;

use App\Review;

class MovieController extends Controller
{
    public function index($movie_id) {
        return Review::where('movie_id', $movie_id)->with('user')->get()->sortByDesc('created_at');
    }

    public function show($movie_id, $movie_name) {
        //レビュー検索
        $reviews = Review::where('movie_id',$movie_id)->get();
        //Tweet検索
        $twitter = new CallTwitterApi();
        $tweet_results = $twitter->search('#'.$movie_name);
        //埋め込み式に
        $formed_tweet_results = array();
        foreach($tweet_results as $tweet_result) {
          $formed_tweet_results[] = array($twitter->statusesOembed($tweet_result->id));
        }

        return view('movie.show')->with([
            'movie_id' => $movie_id,
            'reviews' => $reviews,
            'tweets' => $formed_tweet_results
        ]);
    }
}
