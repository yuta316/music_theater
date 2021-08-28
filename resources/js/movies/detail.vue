<template>
  <div v-if="movie">
		<movie-component :movie="movie" />
		<el-row>
			<el-col :span="6" :offset="15">
				<el-button type="primary">口コミを投稿する</el-button>
			</el-col>
		</el-row>
		<movie-review-component :reviews="movieReviews" />
  </div>
</template>

<script>
import MovieComponent from './components/MovieComponent.vue';
import MovieReviewComponent from './components/MovieReviewComponent.vue';

export default {
	name: 'movieDetail',
	components: {
		MovieComponent,
		MovieReviewComponent,
	},
	data() {
		return {
			movie: null,
			movieReviews: null,
			movieId: this.$route.params.movieId,
			tmdb_app_key: process.env.MIX_TMDB_APP_KEY,
		}
	},
	methods: {
		getMovie() {
			var url = `https://api.themoviedb.org/3/movie/${this.movieId}?api_key=${this.tmdb_app_key}&language=ja-JA`;
			axios.get(url)
				.then(response => {
					this.movie = response.data;
					// this.getTweet();
				}).catch(err => {
					console.log('err:', err);
					return
				});
		},
		getMovieReview() {
			var url = `/movie/${this.movieId}/review`;
			console.log(url)
			axios.get(url)
				.then(response => {
					this.movieReviews = response.data;
					// this.getTweet();
				}).catch(err => {
					console.log('err:', err);
					return
				});
		}
	},
	mounted() {
		this.getMovie();
		this.getMovieReview();
	},
}
</script>