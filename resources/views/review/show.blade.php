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
            <a href="/movie/{{$review->movie_id}}/show"><img :src="'https://image.tmdb.org/t/p/w185' + data.poster_path" width="200" height="200"></a>
            <div><b>映画タイトル : </b>@{{ data.title }}</div>
            <div><b>[{{ $review->title }}]</b> {{ $review->stars }} / 5</div>
            <div>{{ $review->body }}</div>
            <div> {{ $review->created_at }}</div>
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
                    var movieId =  '{{ $review->movie_id }}'
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