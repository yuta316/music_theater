<?php

namespace App\Http\Vender;

use Illuminate\Http\Request;
use Abraham\TwitterOAuth\TwitterOAuth;

class callTwitterApi
{
    private $t;

    public function __construct()
    {
        $this->t = new TwitterOAuth(
            env('TWITTER_CLIENT_KEY'),
            env('TWITTER_CLIENT_SECRET'),
            env('TWITTER_CLIENT_ID_ACCESS_TOKEN'),
            env('TWITTER_CLIENT_ID_ACCESS_TOKEN_SECRET'));
    }

    //検索
    public function search(String $searchWord)
    {
        $d = $this->t->get('search/tweets', [
            'q' => $searchWord,
            'count' => 5,
        ]);
        return $d->statuses;
    }
    //埋め込み式検索
    public function statusesOembed(String $id)
    {
        $d = $this->t->get("statuses/oembed", [
            'id' => $id,
         ]);
         
        return $d->html;
    }
}