<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class IdentityProvider extends Model
{
    protected $fillable = ['user_id', 'provider_name', 'provider_id'];

    function user()
    {
        return $this->belongsTo('App\User');
    }
}
