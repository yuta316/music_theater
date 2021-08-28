<template>
  <div>
		<el-row>
			<h4 style="color: #7db4e6; padding: 20px;　background: #fff; border-left: solid 5px #7db4e6;">
				<i class="el-icon-video-camera-solid"></i> {{movie.title}}
			</h4>
		</el-row>
		<el-row>
			<el-col :span="8" style="text-align: center;">
				<a :href="movie.homepage"><img :src="'https://image.tmdb.org/t/p/w185' + movie.poster_path"></a>
			</el-col>
			<el-col :span="14" style="background: #fff; border-radius; 10px;">
				<el-divider content-position="left"><h4>あらすじ</h4></el-divider>
					<span>{{ movie.overview }}</span>
				<el-divider content-position="left"><h4>公開日</h4></el-divider>
					<span>{{ movie.release_date }}</span>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default{
	name: 'MovieComponent',
	props: {
		movie: {
			type: Object,
		}
	}
}
</script>
