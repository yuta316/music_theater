<?php

namespace App\Http\Controllers;

use Storage;

use App\Circle;
use App\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\DB;

class CircleController extends Controller
{
    public function index(Circle $circle)
    {
        return $circle->get();
    }

		public function show(Circle $circle)
    {
			// dd($circle->users);
			return Circle::where('id', $circle->id)->with('users', 'applicationUsers')->first();
    }

		public function application(Circle $circle)
		{
			if ($circle->users()->get()->contains(auth()->user())) {
				return Response::make('既に参加済みです', 500);
			}
			if (!$circle->applicationUsers()->get()->contains(auth()->user()))
			{
				$circle->applicationUsers()->attach(auth()->user()->id);
			} else {
				return Response::make('既に申請済みです', 500);
			}
		}

    public function store(Request $request, Circle $circle)
    {
			$input = $request->input();
			$image = $request->file('imgFile');
			if($image){
					// imgフォルダに格納
					$path = Storage::disk('s3')->putFile('', $image, 'public');
					// フルパスの取得
					$fullPath = Storage::disk('s3')->url($path);
					$input['img_path'] = $fullPath;
			}

        DB::transaction(function () use ($input, $circle) {
            $circle->fill($input)->save();
            $circle->users()->attach(auth()->user()->id);
            auth()->user()->status = "admin";
            auth()->user()->save();
        });
        return $circle;
    }

		public function approve(Circle $circle, User $user)
		{
			if ($circle->applicationUsers()->find($user->id)->pivot->status == "wait") {
				DB::transaction(function () use ($circle, $user) {
					$circle->users()->attach($user->id);
					$circle->applicationUsers()->find($user->id)->pivot->delete();
				});
			}
		}

		public function reject(Circle $circle, User $user)
		{
			if ($circle->applicationUsers()->find($user->id)->pivot->status == "wait") {
				DB::transaction(function () use ($circle, $user) {
					$circle->users()->detach($user->id);
					$circle->applicationUsers()->find($user->id)->pivot->delete();
				});
			}
		}
}
