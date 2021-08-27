<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Storage;

class ImageController extends Controller
{
    public function store(Request $request) {

        // s3アップロード開始
        $image = $request->file('image');
        info(base64_decode($image));
        // imgフォルダに格納
        $path = Storage::disk('s3')->putFile('', $image, 'public');

        // フルパスの取得
        $fullPath = Storage::disk('s3')->url($path);
        return $fullPath;
    }
}
