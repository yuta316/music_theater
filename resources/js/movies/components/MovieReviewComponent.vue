<template>
  <div>
		<div v-if="reviews">
			<div v-for="review in reviews" :key="review.id" style="border: 2px solid gray; margin: 20px 80px 0 80px; background-color: #fff">
				<el-row>
					<el-col :span="4" style="text-align: center; margin-top: 10px;">
						<img :src="review.user.img_path" width="60%">
						<div>{{ review.user.name }}</div>
					</el-col>
					<el-col :span="20">
						<el-row>
							<el-divider content-position="left">
								<h4>{{ review.title }}</h4>
							</el-divider>
						</el-row>
						<el-row>
							<el-col :span="12">{{ review.stars }}/5.0</el-col>
							<el-col :span="12">{{ review.created_at }}</el-col>
						</el-row>
						<el-row>
							<p>{{ review.body }}</p>
						</el-row>
					</el-col>
				</el-row>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'MovieReviewComponent',
	props: {
		reviews: {
			default: {},
		}
	}
}
</script>
