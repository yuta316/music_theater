<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Circle extends Model
{
    protected $fillable = [
        'name', 'description', 'img_path'
    ];

    public function users()
    {
        return $this->belongsToMany('App\User');
    }
}
