<template>
  <div>
		<div>
			<h4 style="color: #7db4e6; padding: 20px;　background: #fff; border-left: solid 5px #7db4e6;">
				<i class="el-icon-video-camera-solid"></i>最新映画一覧
			</h4>
			<movie-list :propedMovies="movies"></movie-list>
		</div>
		<div style="background: #fff;">
			<el-row>
				<el-col :span="8">
					<h4 style="color: #7db4e6;　padding: 20px; border-left: solid 5px #7db4e6;">
						<i class="el-icon-search"></i>検索
					</h4>
				</el-col>
				<el-col :span="12">
            <el-input placeholder="映画検索" v-model="keyword" style="padding-top: 20px"></el-input>
        </el-col>
        <el-col :span="4">
            <el-button type="primary" @click="search" style="margin-top: 20px">検索</el-button>
        </el-col>
    	</el-row>
			<movie-list :propedMovies="results"></movie-list>
		</div>
	</div>
</template>

<script>
import movieList from './List';

export default {
  name: 'movieIndex',
	components: {
		movieList,
	},
	data() {
		return {
			movies: null,
			keyword: '',
			results: null,
			app_key: process.env.MIX_TMDB_APP_KEY,
		}
	},
	methods: {
		getPopularMovie() {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${this.app_key}&language=ja-JA&page=1`;
      axios.get(url).then((res) => {
				if (res.status !== 200) {
					return;
				}
        this.movies = res.data.results;
      }).catch(err => {
        console.log('err:', err);
        return
        });
    },
		search() {
			const url = 'https://api.themoviedb.org/3/search/movie';
        axios.get(url, {
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
	},
	mounted() {
		this.getPopularMovie();
	},
}
</script>