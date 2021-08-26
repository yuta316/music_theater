<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
        <title>映画クチコミサイト MusicTheater</title>
    </head>
    <body>
        <div id="app">
            <h1>マイページ</h1>
            <h3><a href="user/{{ auth()->user()->id }}">{{ auth()->user()->name }}</a>さんお疲れ様です</h3>
            <div>
                <div> 名前: <input type="text" value="{{ $user->name }}"></div>
                <div> 年齢: <input type="text" value="{{ $user->age }}"></div>
                <div> 性別: 
                    <input type="radio" name="sex" value="男性">男性
                    <input type="radio" name="sex" value="女性">女性
                    <input type="radio" name="sex" value="その他">その他
                </div>
                <div> email: <input type="text" value="{{ $user->email }}"></div>
                <div> プロフィール画像: <input type="file"></div>
                <button><a href="/user/{{ $user->id }}/update">編集</a></button>
            </div>
        </div>
        </div>
        <script>
            let app = new Vue({
                el: '#app',
                data() {
                    return {}
                },
                methods: {},
                created() {},
                mounted() {},
            })
        </script>
    </body>