<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $fillable = ['title', 'body', 'stars', 'user_id', 'movie_id'];

    protected $appends = ['check_like', 'count_like'];

    public function user() {
        return $this->belongsTo('App\User');
    }

    public function likes() {
        return $this->hasMany('App\Like');
    }
    //
    // reviewにログインユーザがいいねしているかをチェックする
    //
    public function getCheckLikeAttribute() {
        return $this->likes()->get()->contains('user_id', auth()->user()->id);
    }
    //
    // reviewのいいねの数をカウント
    //
    public function getCountLikeAttribute() {
        return $this->likes()->count();
    }
}
