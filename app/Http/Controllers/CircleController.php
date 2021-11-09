<?php

namespace App\Http\Controllers;

use Storage;

use App\Circle;
use App\CircleHistory;
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
			// dd(Circle::where('id', $circle->id)->with('users', 'applicationUsers', 'histories')->first());
			return Circle::where('id', $circle->id)->with('users', 'applicationUsers', 'histories')->first();
    }

		public function application(Circle $circle, CircleHistory $history)
		{
			if ($circle->users()->get()->contains(auth()->user())) {
				return Response::make('既に参加済みです', 500);
			}
			if (!$circle->applicationUsers()->get()->contains(auth()->user()))
			{
				DB::transaction(function () use ($circle, $history) {
					$circle->applicationUsers()->attach(auth()->user()->id);
					$history->create([
						'circle_id' => $circle->id,
						'user_id' => auth()->user()->id,
						'status' => 'application',
						'detail' => auth()->user()->name. 'さんが参加申請をしました。'
					]);
				});
			} else {
				return Response::make('既に申請済みです', 500);
			}
		}

    public function store(Request $request, Circle $circle, CircleHistory $history)
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

        DB::transaction(function () use ($input, $circle, $history) {
            $circle->fill($input)->save();
            $circle->users()->attach(auth()->user()->id);
            auth()->user()->status = "admin";
            auth()->user()->save();
						$history->create([
							'circle_id' => $circle->id,
							'user_id' => auth()->user()->id,
							'status' => 'create',
							'detail' => 'サークル: '.$circle->name.' を作成しました。'
						]);
        });
        return $circle;
    }

		public function approve(Circle $circle, User $user, CircleHistory $history)
		{
			if ($circle->applicationUsers()->find($user->id)->pivot->status == "wait") {
				DB::transaction(function () use ($circle, $user, $history) {
					$circle->users()->attach($user->id);
					$circle->applicationUsers()->find($user->id)->pivot->delete();
					$history->create([
						'circle_id' => $circle->id,
						'user_id' => auth()->user()->id,
						'status' => 'approve',
						'detail' => $user->name.'さんの参加を承認しました。'
					]);
					$history->create([
						'circle_id' => $circle->id,
						'user_id' => $user->id,
						'status' => 'join',
						'detail' => $user->name.'さんが参加しました。'
					]);
				});
			}
		}

		public function reject(Circle $circle, User $user, CircleHistory $history)
		{
			if ($circle->applicationUsers()->find($user->id)->pivot->status == "wait") {
				DB::transaction(function () use ($circle, $user, $history) {
					$circle->users()->detach($user->id);
					$circle->applicationUsers()->find($user->id)->pivot->delete();
					$history->create([
						'circle_id' => $circle->id,
						'user_id' => auth()->user()->id,
						'status' => 'reject',
						'detail' => $user->name.'さんの参加を拒否しました。'
					]);
				});
			}
		}
}
