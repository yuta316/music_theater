<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Review;
use App\Like;

class ReviewController extends Controller
{
    public function index(Review $review) {
        return $review->with('user')->get()->sortByDesc('created_at');
    }

    public function ranking(Review $review) {
        // いいねテーブルを集計して並び替え
        $rank_reviews = Review::withCount('likes')->orderBy('likes_count', 'desc')->with('user')->get();
        return $rank_reviews;
    }

    public function show(Review $reviews) {
        return view('review.show')->with([
            // 'movie_id' => $movie_id,
            'review' => $reviews,
        ]);
    }
    public function post($movie_id, Request $request, Review $review) {
        $input = $request->input();
        $input['user_id'] = auth()->user()->id;
        $input['movie_id'] = (int)$movie_id;
        $review->fill($input)->save();
        $path = "/review/${movie_id}/show";
        return back();
    }
    public function like(Review $review){
        if(!$review->getCheckLikeAttribute()) {
            Like::create([
                'review_id' => $review->id,
                'user_id' => auth()->user()->id,
            ]);
        };
    }
    public function unlike(Review $review){
        if($review->getCheckLikeAttribute()) {
            $like = Like::where('review_id',$review->id)->where('user_id',auth()->user()->id)->first();
            $like->delete();
        };
    }
}
