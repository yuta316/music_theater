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
    public function reviewStore(Request $request) {
        // s3アップロード開始
        $image = $request->file('image');
        // imgフォルダに格納
        $path = Storage::disk('s3')->putFile('', $image, 'public');

        // フルパスの取得
        $fullPath = Storage::disk('s3')->url($path);

        $input = $request->all();
        $contents = (String)$input['editorContens'];
        $startIndex = (Integer)$input['startIndex'];
        $endIndex = (Integer)$input['endIndex'];

        $newPath = '<img src="'.$fullPath.'">';
        if ($startIndex == 0) {
            return $newPath.substr($contents, $endIndex + 1);
        } else {
            return mb_substr($contents, 0, $startIndex, "utf-8").$newPath.mb_substr($contents, $endIndex + 1, mb_strlen($contents) ,"utf-8");
        }
    }
}
