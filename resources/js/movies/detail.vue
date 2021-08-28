<template>
  <div v-if="movie">
		<movie-component :movie="movie" />
  </div>
</template>

<script>
import MovieComponent from './components/MovieComponent.vue';

export default {
	name: 'movieDetail',
	components: {
		MovieComponent,
	},
	data() {
		return {
			movie: null,
			movieId: this.$route.params.movieId,
			tmdb_app_key: process.env.MIX_TMDB_APP_KEY,
		}
	},
	methods: {
		getMovie() {
			const url = `https://api.themoviedb.org/3/movie/${this.movieId}?api_key=${this.tmdb_app_key}&language=ja-JA`;
			axios.get(url)
				.then(response => {
					this.movie = response.data;
					// this.getTweet();
				}).catch(err => {
					console.log('err:', err);
					return
				});
		}
	},
	mounted() {
		this.getMovie();
	},
}
</script>