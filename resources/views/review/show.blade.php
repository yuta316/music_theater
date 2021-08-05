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
            <div>
                <a :href="data.homepage"><img :src="'https://image.tmdb.org/t/p/w185' + data.poster_path"></a> 
            </div>
            <div>タイトル:@{{ data.title }}</div>
            <div v-if="data.overview">あらすじ:@{{ data.overview }}</div>
            <div>公開日:@{{ data.release_date }}</div>
            <br>
            <div>
            <p>口コミ</p>
            <form method="post" action="/review/{{$movie_id}}/post">
            @csrf
                <div>タイトル:<input type="text" name="title"></div>
                <div>本文:<input type="text" name="body"></div>
                <div>評価:<input type="number" step="0.1" min="0" max="5" name="stars"></div>
                <button type="submit">投稿</button>
            </form>
            </div>
        </div>
        </div>
        <script>
            let app = new Vue({
                el: '#app',
                data() {
                    return {
                        data: '',
                        app_key: '{{ env('TMDB_APP_KEY') }}'
                    };
                },
                methods: {},
                mounted() {
                    var movieId =  window.location.href.split('/')[4]
                    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.app_key}&language=ja-JA`
                    console.log(url)
                    axios.get(url)
                        .then(response => {
                        this.data = response.data;
                        }).catch(err => {
                        console.log('err:', err);
                        return
                        });
                }
            })
        </script>
    </body>