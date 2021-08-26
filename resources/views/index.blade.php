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
        <h1>MovieListener</h1>
        <h3><a href="user/{{ auth()->user()->id }}">{{ auth()->user()->name }}</a>さんお疲れ様です</h3>

        [タイムライン]
        <div v-for="review in reviews" :key="review.id">
          <div>
            <a :href="'/movie/' +review.movie_id + '/' + review.movie + '/show'"><img :src="'https://image.tmdb.org/t/p/w185' + review.movie_path" width="50" height="50"></a>
            <a :href="'/review/' + review.id + '/show'">@{{ review.movie }}の口コミ</a>
          </div>
        @{{ review.title }} / @{{ review.user.name }} / @{{ review.created_at }}
        <p> @{{ review.body }} </p> 
        </div>
  
        [人気作品]
        <div v-for="(d , i) in data" :key="d.id">
          <a :href="'/movie/' + d.id + '/' + d.title + '/show'"><img :src="'https://image.tmdb.org/t/p/w185' + d.poster_path"></a> 
          @{{ d.title }} 
        </div>

        [検索]
            <input type="text" v-model="keyword">
            <button type="submit" @click="search">Search</button>
            <div v-for="(result , i ) in results" :key="result.id">
            <a :href="'/movie/' +result.id + '/' + result.title + '/show'"><img :src="'https://image.tmdb.org/t/p/w185' + result.poster_path"></a> 
              @{{ result.title }}
            </div>
        </div>
        <script>
            let app = new Vue({
                el: '#app',
                data() {
                    return {
                        reviews: {} ,
                        keyword: '',
                        results: [],
                        data: '',
                        app_key: '{{ env('TMDB_APP_KEY') }}'
                    };
                },
                methods: {
                    search() {
                        axios.get('https://api.themoviedb.org/3/search/movie', {
                            params: {
                                query: this.keyword,
                                page: 1,
                                language: 'ja-JA',
                                api_key: this.app_key
                            }
                        })
                            .then(response => {
                            this.results = response.data.results
                            }).catch(err => {
                            console.log('err:', err);
                            });
                    },
                    getPopularMovie() {
                        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${this.app_key}&language=ja-JA&page=1`
                        axios.get(url)
                        .then(response => {
                          this.data = response.data.results
                        }).catch(err => {
                          console.log('err:', err);
                          return
                        });
                    },
                    getReviewMovie() {
                        var reviews = @json($reviews);
                        for (const [key, value] of Object.entries(reviews)) {
                        const url = `https://api.themoviedb.org/3/movie/${value.movie_id}?api_key=${this.app_key}&language=ja-JA`
                        axios.get(url)
                          .then(response => {
                            value.movie  = response.data.title
                            value.movie_path  = response.data.poster_path
                          }).catch(err => {
                            console.log('err:', err);
                            return
                        });
                        this.reviews = reviews;
                    }
                    }
                },
                created() {
                    this.getReviewMovie();
                },
                mounted() {
                    this.getPopularMovie();
                }
            })
        </script>
    </body>