<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Response;

// サークル参加者のみが詳細見れるミドルウェア
class CircleShow
{
    /**
     * Handle an incoming request
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($request->route()->parameter('circle')->users()->get()->contains(auth()->user()))
        {
					return $next($request);
        } else {
					return Response::make('Proccesing your request.', 500);
				}
    }
}
