<template>
	<div>
		<review-form-dialog
			:formVisible="formVisible"
			@close-form="formVisible = false"
			@submit-review="submitReview"
		/>
		<div v-if="movie">
			<movie-component :movie="movie" />
			<el-row>
				<el-col :span="6" :offset="15">
					<el-button type="primary" @click="formVisible = true">口コミを投稿する</el-button>
				</el-col>
			</el-row>
			<movie-review-component :reviews="movieReviews" />
		</div>
	</div>
</template>

<script>
import MovieComponent from './components/MovieComponent';
import MovieReviewComponent from './components/MovieReviewComponent';
import ReviewFormDialog from './dialog/ReviewFormDialog';

export default {
	name: 'movieDetail',
	components: {
		MovieComponent,
		MovieReviewComponent,
		ReviewFormDialog
	},
	data() {
		return {
			movie: null,
			movieReviews: null,
			movieId: this.$route.params.movieId,
			tmdb_app_key: process.env.MIX_TMDB_APP_KEY,
			formVisible: false,
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
		},
		submitReview(review) {
			axios.post('/review/' + this.$route.params.movieId, review).then((res) => {
				if ((res.status) === 200) {
					this.$message({
          showClose: true,
          message: '口コミを投稿しました',
          type: 'success'
        });
				this.getMovie();
				this.getMovieReview();
				this.formVisible = false;
				}
			})
		}
	},
	mounted() {
		this.getMovie();
		this.getMovieReview();
	},
}
</script>