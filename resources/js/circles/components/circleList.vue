<template>
  <div>
		<el-card>
			<h5 style="color: #7db4e6; padding: 20px;　background: #fff; border-left: solid 3px #7db4e6;">
				<i class="el-icon-video-camera-solid"></i>サークル一覧
			</h5>
			<el-card v-for="circle in circles" :key="circle.id" style="margin-top: 30px;">
				<el-row>
					<el-col :span="8" style="text-align: center;">
						<img :src="circle.img_path" width="80%" style="aspect-ratio: 1 / 1;">
						<el-button
						　@click="wantJoin(circle.id)"
						　style="margin-top: 4px;"
						 v-if="!circle.check_join_status && !circle.check_join"
						>参加申請
						</el-button>
						<el-button
						　@click="showDetail(circle.id)"
						　style="margin-top: 4px;"
							v-if="circle.check_join"
						>詳細</el-button>
					</el-col>
					<el-col :span="15" :offset="1">
						<h2>サークル名</h2>
							{{ circle.name }}
						<el-divider></el-divider>
						<h3>サークル詳細</h3>
							{{ circle.description }}
					</el-col>
				</el-row>
			</el-card>
		</el-card>
	</div>
</template>

<script>



export default {
	name: 'circleList',
	props: {
		circles: {
			default: {},
		}
	},
	components: {},
	data() {
		return {}
	},
	methods: {
		showDetail(circleId){
			this.$router.push({
				path: '/circles/' + circleId,
			})
		},
		wantJoin(circleId){
			axios.post(`/circle/${circleId}/join`)
				.then((res) => {
					this.$message({
						message: '参加申請を送信しました',
						type: 'success',
					})
				})
				.catch((err) => {
					console.log()
					this.$message({
						message: '既に参加済み/申請済みです',
						type: 'error',
					})
				})
		}
	},
}

</script>