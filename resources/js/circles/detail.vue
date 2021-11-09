<template>
  <div
	v-loading="loading">
		<circle-content
		 :circle="circle"
		>
		</circle-content>
		<el-card>
			<el-tabs type="border-card">
				<el-tab-pane label="メンバー">
						<user-list
							:users="circle.users"
						/>
				</el-tab-pane>
				<el-tab-pane label="参加申請">
					<application-user-list
						:users="circle.application_users"
						@approve-application="approveApplication"
						@reject-application="rejectApplication"
					/>
				</el-tab-pane>
				<el-tab-pane label="Role">Role</el-tab-pane>
				<el-tab-pane label="Task">Task</el-tab-pane>
			</el-tabs>
		</el-card>
	</div>
</template>

<script>
// import createCircleDialogue from './dialogues/createCircleDialogue.vue';
import circleContent from './components/circleContent.vue';
import userList from './components/userList.vue'
import applicationUserList from './components/applicationUserList.vue';

export default {
	name: 'circleDetail',
	components: {
		// createCircleDialogue,
		circleContent,
		userList,
		applicationUserList,
	},
	data() {
		return {
			circleId: this.$route.params.circleId,
			circle: {},
			loading: false,
		}
	},
	methods: {
		// createCircle(postForm) {
		// 	axios.post('/circle', postForm)
		// 		.then((res) => {
		// 			this.formVisible = false;
		// 			this.getCircles;
		// 		})
		// },
		getCircle(){
			this.loading = true;
			axios.get('/circle/' + this.circleId)
			  .then((res) => {
					this.circle = res.data;
					this.loading = false;
				})
				.catch(() => {
					this.$message({
						message: 'サークルメンバーではありません\n参加申請しましょう',
						type: 'warning'
					})
					this.loading = false;
					this.$router.push({
						name: 'circlePage'
					})
				})
		},
		approveApplication(userId){
			axios.get(`/circle/${this.circleId}/${userId}/approve`)
				.then(() => {
					this.$message({
						message: 'メンバー追加を承認しました',
						type: 'success'
					});
					this.getCircle();
				})
		},
		rejectApplication(userId){
			axios.get(`/circle/${this.circleId}/${userId}/reject`)
				.then(() => {
					this.$message({
						message: 'メンバー追加を拒否しました',
						type: 'success'
					});
					this.getCircle();
				})
		},
	},
	mounted() {
		this.getCircle();
	}
}

</script>