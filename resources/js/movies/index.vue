<template>
    <div>
			<el-row>
				<el-col :span="18">
					<div class="movies__list">
						<h3>最新映画一覧</h3>
						<el-row style="display: flex; overflow:scroll">
							<div v-for="movie in movies" :key="movie.id">
								<el-col :span="4">
									<el-card style="width: 280px; height: 300px; position: relative;">
										<div style="text-align: center;">
											<img 
												:src="'https://image.tmdb.org/t/p/w185' + movie.poster_path"
												width="90"
												height="160"	
											>
										</div>
										<div style="height: 10%;">
											<div style="text-align: center; margin-top: 10px">
												<b>{{ movie.title }}</b>
											</div>
											<div style="position: absolute; top: 240px; left: 60px">
												<el-button type="warning" class="button" round>詳細口コミを見る</el-button>
											</div>
										</div>
									</el-card>
								</el-col>
							</div>
						</el-row>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="movies__list">
						<el-row>
							<el-col :span="16">
								<el-input placeholder="映画検索" v-model="keyword"></el-input>
							</el-col>
							<el-col :span="8">
								<el-button type="primary" @click="search">検索</el-button>
							</el-col>
						</el-row>

						<el-row style="display: flex; overflow:scroll">
							<div v-for="movie in results" :key="movie.id">
								<el-col :span="4">
									<el-card style="width: 280px; height: 300px; position: relative;">
										<div style="text-align: center;">
											<img 
												:src="'https://image.tmdb.org/t/p/w185' + movie.poster_path"
												width="90"
												height="160"	
											>
										</div>
										<div style="height: 10%;">
											<div style="text-align: center; margin-top: 10px">
												<b>{{ movie.title }}</b>
											</div>
											<div style="position: absolute; top: 240px; left: 60px">
												<el-button type="warning" class="button" round>詳細口コミを見る</el-button>
											</div>
										</div>
									</el-card>
								</el-col>
							</div>
						</el-row>
					</div>
				</el-col>
			</el-row>
		</div>
</template>

<script>
export default {
	name: 'movieIndex',
	data() {
		return {
			reviews: {} ,
			keyword: '',
			results: [],
			movies: '',
			app_key: process.env.MIX_TMDB_APP_KEY,
    };
  },
  methods: {
    getPopularMovie() {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${this.app_key}&language=ja-JA&page=1`
      axios.get(url).then((res) => {
				if (res.status !== 200) {
					return;
				}
        this.movies = res.data.results;
				console.log(this.movies);
      }).catch(err => {
        console.log('err:', err);
        return
        });
    },
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
    // getReviewMovie() {
    //     var reviews = $reviews;
    //     for (const [key, value] of Object.entries(reviews)) {
    //     const url = `https://api.themoviedb.org/3/movie/${value.movie_id}?api_key=${this.app_key}&language=ja-JA`
    //     axios.get(url)
    //         .then(response => {
    //         value.movie  = response.data.title
    //         value.movie_path  = response.data.poster_path
    //         }).catch(err => {
    //         console.log('err:', err);
    //         return
    //     });
    //     this.reviews = reviews;
    //     }
    // }
  },
  created() {
    // this.getReviewMovie();
  },
  mounted() {
    this.getPopularMovie();
  },
}
</script>

<style scoped>
.movies__list {
 margin: 10px;
 background-color: #fff;
}
</style>