<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;

class UserController extends Controller
{
    public function authIndex() {
        return User::where('id', auth()->user()->id)->with('reviews.user', 'likes.review.user')->first();
    }

    public function userIndex(User $user) {
        return User::where('id', $user->id)->with('reviews.user', 'likes.review.user')->first();
    }

    public function show(User $user) {
        return view('user.show')->with('user', $user);
    }
    public function edit(User $user) {
        return view('user.edit')->with('user', $user);
    }
    public function update(User $user, Request $request) {
        $user->update($request->all());
    }
}
