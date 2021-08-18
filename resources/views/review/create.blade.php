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
                <div>
                <img :src="'https://image.tmdb.org/t/p/w185' + data.poster_path">
                </div>
                タイトル:<a :href="data.homepage">@{{ data.title }}</a>
                <div v-if="data.overview">
                あらすじ:@{{ data.overview }}
                </div>
                <div>ジャンル:
                    <span v-for="genere in data.genres">
                        @{{ genere.name }}
                    </span>
                </div>
                <div>
                 公開日: @{{ data.release_date }}
                </div>
            </div>
            <div>

            口コミを書く
                <form action="/review/{{$movie_id}}/post" method="post">
                @csrf
                タイトル:<input type="text"><br>
                内容:<input type="text"><br>
                <button type="submit">投稿</button>
                </form>
            </div>
        </div>
    </body>
</html>
    <script>
        let app = new Vue({
            el: '#app',
            data() {
                return {
                    data: '',
                    app_key: '{{ env('TMDB_APP_KEY') }}'
                };
            },
            methods: {
            },
            mounted() {
                var id = window.location.href.split('/')[4]
                const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.app_key}&language=ja-JA&page=1`
                axios.get(url)
                    .then(response => {
                        console.log(response.data)
                    this.data = response.data
                    }).catch(err => {
                    console.log('err:', err);
                    return
                    });
            }
        })
        </script>
    </body>