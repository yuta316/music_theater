<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $fillable = ['title', 'body', 'stars', 'user_id', 'movie_id'];
}
