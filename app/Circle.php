<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Circle extends Model
{
    protected $fillable = [
        'name', 'description', 'img_path'
    ];

    protected $appends = ['check_join', 'check_join_status'];

    public function users()
    {
        return $this->belongsToMany('App\User');
    }

    public function histories()
    {
        return $this->hasMany('App\CircleHistory')->with('user');
    }

    public function applicationUsers()
    {
        return $this->belongsToMany('App\User', 'circle_user_status')->withPivot('status');
    }

    // グループに参加しているかをチェックする
    public function getCheckJoinAttribute() {
        return $this->users()->get()->contains(auth()->user());
    }

    // 参加申請のステータスを返す
    public function getCheckJoinStatusAttribute() {
        if ($this->applicationUsers()->get()->contains(auth()->user())) {
            return $this->applicationUsers()->find(auth()->user()->id)->pivot->status;
        } else {
            return false;
        }
    }
}
