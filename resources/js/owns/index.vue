<template>
	<div v-loading="loading">
		<el-card>
		<el-row>
			<el-col :span="24">
				<my-page-list
					:defaultUser="user"
					@update-mypage="updateMypage"
				></my-page-list>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="18" :offset="3">
				<el-tabs v-model="activeName">
					<el-tab-pane label="レビュー" name="reviews">
					<div style="max-height: 500px; overflow: scroll;">
						<el-card style="margin: 10px; border-radius: 3px;">
							<own-movie-review-component
								:reviews="ownReviews"
								@like="like"
								@unlike="unlike"
							>
							</own-movie-review-component>
						</el-card>
						</div>
					</el-tab-pane>
					<el-tab-pane label="いいね" name="second">
						<div style="max-height: 500px; overflow: scroll;" v-if="user">
							<el-card style="margin: 10px; border-radius: 3px;">
								<like-movie-review-component
										:likes="likeReviews"
										:userId="user.id"
										@like="like"
										@unlike="unlike"
									>
								</like-movie-review-component>
							</el-card>
						</div>
					</el-tab-pane>
					<el-tab-pane label="Role" name="third">Role</el-tab-pane>
					<el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
				</el-tabs>
			</el-col>
		</el-row>
		</el-card>
	</div>
</template>

<script>
import myPageList from './detail.vue'
import OwnMovieReviewComponent from './components/OwnMovieReviewComponent.vue';
import LikeMovieReviewComponent from './components/LikeMovieReviewComponent.vue';

export default {
	name: 'myPage',
	components: {
		myPageList,
		OwnMovieReviewComponent,
		LikeMovieReviewComponent,
	},
	data() {
		return {
			loading: false,
			user: null,
			activeName: 'reviews',
			ownReviews: {},
			likeReviews: {},
		}
	},
	methods: {
		getUser() {
			this.loading = true;
			axios.get('/user').then((res) => {
				if (res.status !== 200) {
					return;
				}
				this.user = res.data;
				this.ownReviews = res.data.reviews;
				this.likeReviews = res.data.likes;
				this.loading=false;
      }).catch(err => {
        console.log('err:', err);
        return
      });
		},
		updateMypage(newUserData) {
			axios.put(`/user/${newUserData.id}`, newUserData).then((res) => {
				if (res.status !== 200) {
					return;
				}
				this.getUser();
			})
		},
		like(id) {
			axios.get(`/review/like/${id}`)
				.then(() => {
					this.getUser();
				})
		},
		unlike(id) {
			axios.get(`/review/unlike/${id}`)
				.then(() => {
					this.getUser();
				})
		}
	},
	mounted() {
		this.getUser();
	}
}
</script>