<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

class LineLoginController extends Controller
{
    public function index() {
        // state生成
        $state = Str::random(40);
        \Cookie::queue('state', $state, 100);

        // nonce生成
        $nonce = Str::random(40);
        \Cookie::queue('nonce', $nonce,100);

        // LINE認証 
        $uri ="https://access.line.me/oauth2/v2.1/authorize?response_type=code";
        // $uri ="https://access.line.me/dialog/oauth/weblogin?response_type=code";
        $client_id_uri = "&client_id=".config('services.line.client_id');
        $redirect_uri ="&redirect_uri=http://127.0.0.1:8000/";
        $state_uri = "&state=".$state;
        $scope_uri="&scope=openid%20profile";
        $prompt_uri = "&prompt=consent";
        $nonce_uri = "&nonce=";

        return redirect($uri.$client_id_uri.$redirect_uri.$state_uri.$scope_uri.$prompt_uri.$nonce_uri);

    }
}
