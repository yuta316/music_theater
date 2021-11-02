<?php

namespace App\Http\Controllers;

use Storage;

use App\Circle;


use Illuminate\Http\Request;
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
			return Circle::where('id', $circle->id)->with('users')->first();
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
}
