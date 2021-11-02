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

				</el-tab-pane>
				<el-tab-pane label="Config">
					{{ circle.users }}
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

export default {
	name: 'circleDetail',
	components: {
		// createCircleDialogue,
		circleContent,
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
		}
	},
	mounted() {
		this.getCircle();
	}
}

</script>