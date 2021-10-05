<template>
	<div>
		<el-row>
			<el-col :span="18">
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
							<own-movie-review-component
								:reviews="ownReviews"
								@like="like"
								@unlike="unlike"
							>
							</own-movie-review-component>
						</div>
					</el-tab-pane>
					<el-tab-pane label="いいね" name="second">
						<div style="max-height: 500px; overflow: scroll;" v-if="user">
							<like-movie-review-component
									:likes="likeReviews"
									:userId="user.id"
									@like="like"
									@unlike="unlike"
								>
							</like-movie-review-component>
						</div>
					</el-tab-pane>
					<el-tab-pane label="Role" name="third">Role</el-tab-pane>
					<el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
				</el-tabs>
			</el-col>
		</el-row>
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
			user: null,
			activeName: 'reviews',
			ownReviews: {},
			likeReviews: {},
		}
	},
	methods: {
		getUser() {
			axios.get('/user').then((res) => {
				if (res.status !== 200) {
					return;
				}
				this.user = res.data;
				this.ownReviews = res.data.reviews;
				this.likeReviews = res.data.likes;
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