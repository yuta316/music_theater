<template>
	<div>
		<el-row>
			<el-col :span="18">
				<user-page-list
					:defaultUser="user"
				></user-page-list>
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
						<div style="max-height: 500px; overflow: scroll;">
							<like-movie-review-component
									:likes="likeReviews"
									:userId="authUserId"
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
import userPageList from './detail.vue'
import OwnMovieReviewComponent from '../owns/components/OwnMovieReviewComponent.vue';
import LikeMovieReviewComponent from '../owns/components/LikeMovieReviewComponent.vue';

export default {
	name: 'myPage',
	components: {
		userPageList,
		OwnMovieReviewComponent,
		LikeMovieReviewComponent,
	},
	data() {
		return {
			authUserId: '',
			userId: this.$route.params.userId,
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
				this.authUserId = res.data.id;
      }).catch(err => {
        console.log('err:', err);
        return
      });

			axios.get(`/user/${ this.userId }`).then((res) => {
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
		like(id) {
			console.log(id)
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