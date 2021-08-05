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
        [人気作品]
        <div v-for="(d , i) in data" :key="d.id">
                @{{ d.title }}
                <a :href="'review/' + d.id + '/show'"><img :src="'https://image.tmdb.org/t/p/w185' + d.poster_path"></a>  
        </div>

        [検索]
            <input type="text" v-model="keyword">
            <button type="submit" @click="search">Search</button>

            <div v-for="(result , i ) in results" :key="result.id">
                @{{ result.title }}
                <a :href="'review/' + result.id + '/show'"><img :src="'https://image.tmdb.org/t/p/w185' + result.poster_path"></a>
            </div>
        </div>
        <script>
            let app = new Vue({
                el: '#app',
                data() {
                    return {
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
                    }
                },
                mounted() {
                    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${this.app_key}&language=ja-JA&page=1`
                    axios.get(url)
                        .then(response => {
                        this.data = response.data.results
                        }).catch(err => {
                        console.log('err:', err);
                        return
                        });
                }
            })
        </script>
    </body>