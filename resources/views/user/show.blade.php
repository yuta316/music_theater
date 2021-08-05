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
                @if($user->img_path)
                <div>{{ $user->age }}</div>
                @else
                <div>プロフィール画像未設定</div>
                @endif
                @if($user->age)
                <div>年齢: {{ $user->age }}</div>
                @else
                <div>年齢: 未設定</div>
                @endif
                @if($user->sex)
                <div>性別: {{ $user->sex }}</div>
                @else
                <div>性別: 未設定</div>
                @endif
                <div>Email: {{ $user->email }}</div>
                <div>登録日: {{ $user->created_at }}</div>
            </div>
            <div>
              <h3>{{ auth()->user()->name }}さんの最近の口コミ</h3>
              <div v-for="review in reviews" :key="review.id">
                <div>
                    <a :href="'/review/' + review.movie_id + '/show'"><img :src="'https://image.tmdb.org/t/p/w185' + review.movie_path" width="50" height="50"></a>
                    @{{ review.movie }}の口コミ
                </div>
                @{{ review.title }} / @{{ review.created_at }}
                <p> @{{ review.body }} </p> 
                </div>
            </div>
        </div>
        </div>
        <script>
            let app = new Vue({
                el: '#app',
                data() {
                    return {
                        reviews: {} ,
                        app_key: '{{ env('TMDB_APP_KEY') }}'
                    };
                },
                methods: {
                    async getReviewMovie() {
                        var reviews = @json($user->reviews);
                        for (const [key, value] of Object.entries(reviews)) {
                          const url = `https://api.themoviedb.org/3/movie/${value.movie_id}?api_key=${this.app_key}&language=ja-JA`
                          await axios.get(url)
                            .then(response => {
                              value.movie  = response.data.title
                              value.movie_path  = response.data.poster_path
                          }).catch(err => {
                            console.log('err:', err);
                            return
                          });
                        }
                        this.reviews = reviews;
                    }
                },
                created() {
                    this.getReviewMovie();
                },
                mounted() {},
            })
        </script>
    </body>