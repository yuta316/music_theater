<template>
  <div>
		<div v-if="likes">
			<div v-for="like in likes" :key="like.id" style="border: 1px solid gray; margin: 20px 20px 0 20px; background-color: #fff">
				<el-row>
					<el-col :span="4" style="text-align: center; margin-top: 10px;">
						<img :src="like.review.user.img_path" width="60%">
						<div>{{ like.review.user.name }}</div>
					</el-col>
					<el-col :span="20">
						<el-row>
							<el-divider content-position="left">
								<h4>{{ like.review.title }}</h4>
							</el-divider>
						</el-row>
						<el-row>
							<el-col :span="10"><el-rate v-model="like.review.stars" allow-half disabled show-score></el-rate></el-col>
							<el-col :span="10">{{ like.review.created_at }}</el-col>
							<el-col :span="4">
								<el-button v-if="!like.review.check_like" style="width: 80%;">
									<v-icon name="heartbeat" @click="like(like.review.id)"></v-icon>{{ like.review.count_like }}
								</el-button>
								<el-button v-else style="width: 80%;">
									<v-icon name="heart" @click="unlike(like.review.id)"></v-icon>{{ like.review.count_like }}
								</el-button>
							</el-col>
						</el-row>
						<el-row>
							<div class="ql-snow" style="border: 1px solid gray; max-height: 400px; margin: 20px; overflow: scroll;">
								<div class="ql-editor">
										<p v-html="like.review.body"></p>
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
		likes: {
			default: {},
		},
	},
	methods: {
		like(id) {
			this.$emit('like', id);
		},
		unlike(id) {
			this.$emit('unlike', id);
		}
	},
}
</script>
