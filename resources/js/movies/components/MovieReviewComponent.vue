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
							<el-col :span="10"><el-rate v-model="review.stars" allow-half disabled show-score></el-rate></el-col>
							<el-col :span="10">{{ review.created_at }}</el-col>
							<el-col :span="4">
								<el-button v-if="!review.check_like" style="width: 80%;">
									<v-icon name="heartbeat" @click="like(review.id)"></v-icon>{{ review.count_like }}
								</el-button>
								<el-button v-else style="width: 80%;">
									<v-icon name="heart" @click="unlike(review.id)"></v-icon>{{ review.count_like }}
								</el-button>
							</el-col>
						</el-row>
						<el-row>
							<div class="ql-snow" style="border: 1px solid gray; max-height: 400px; margin: 20px; overflow: scroll;">
								<div class="ql-editor">
										<p v-html="review.body"></p>
								</div>
							</div>
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
	},
	methods: {
		like(id) {
			this.$emit('like', id);
		},
		unlike(id) {
			this.$emit('unlike', id);
		}
	}
}
</script>
