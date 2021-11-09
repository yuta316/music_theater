<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CircleHistory extends Model
{
    protected $fillable = [
        'circle_id', 'user_id', 'status', 'detail'
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
