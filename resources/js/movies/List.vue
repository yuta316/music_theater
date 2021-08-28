<template>
	<div>
		<el-row style="display: flex; overflow:scroll">
			<div v-for="movie in propedMovies" :key="movie.id">
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
								<el-button type="warning" class="button" round @click="showMovieDetail(movie.id)">詳細口コミを見る</el-button>
							</div>
						</div>
					</el-card>
				</el-col>
			</div>
		</el-row>
	</div>
</template>

<script>
export default {
	name: 'movieList',
	props: {
		propedMovies: {
			defalut: null,
		}
	},
	methods: {
		showMovieDetail(movie_id) {
			this.$router.push({
				name: 'movieDetail',
				params: { movieId: movie_id },
			})
		}
	}
}
</script>