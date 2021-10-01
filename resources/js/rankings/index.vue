<template>
  <div>
		<h4 style="margin: 10px;">ランキング</h4>
		<el-row>
			<el-col :span="4">
			</el-col>
			<el-col :span="10" :offset="4" style="border: 1px solid black; padding: 10px">
				<h4 style="margin: 10px;">口コミいいね</h4>
				<div v-for="(review, idx) in rankedReviews" :key="review.id">
					{{Number(idx) + 1}}位: 
					<router-link :to="{ path: `movies/${review.movie_id}` }">
						{{ review.title }}
					</router-link>
					{{ review.likes_count }}いいね /
					{{ review.user.name }}
				</div>
			</el-col>
			<el-col :span="10" style="border: 1px solid black; padding: 10px;">
				aaa
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	name: 'rankingPage',
	data() {
		return {
			rankedReviews: [],
		}
	},
	methods: {
		getRankedReviews() {
			axios.get('/review/ranking')
				.then((res) => {
					this.rankedReviews = res.data;
				})

		}
	},
	mounted() {
		this.getRankedReviews();
	}
}
</script>
