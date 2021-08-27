<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;

class UserController extends Controller
{
    public function index() {
        return auth()->user();
    }
    public function show(User $user) {
        return view('user.show')->with('user', $user);
    }
    public function edit(User $user) {
        return view('user.edit')->with('user', $user);
    }
}
