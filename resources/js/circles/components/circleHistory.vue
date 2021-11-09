<template>
  <div>
		<el-card>
      <el-timeline>
        <el-timeline-item
          v-for="(history, index) in histories"
          :key="index"
          :timestamp="history.created_at"
          :color="colors[history.status]"
        >
          <img :src="history.user.img_path" width="20px"> {{ history.detail }}
        </el-timeline-item>
      </el-timeline>
		</el-card>
	</div>
</template>

<script>
export default {
	name: 'circleHistory',
	props: {
		histories: {},
	},
	components: {},
	data() {
		return {
      colors: {
        'create': '#800000',
        'application': 'orange',
        'approve': 'pink',
        'join': '#6495ED',
        'reject': '#BA55D3',
      }
    }
	},
	methods: {
		// showDetail(circleId){
		// 	this.$router.push({
		// 		path: '/circles/' + circleId,
		// 	})
		// },
		// wantJoin(circleId){
		// 	axios.post(`/circle/${circleId}/join`)
		// 		.then((res) => {
		// 			this.$message({
		// 				message: '参加申請を送信しました',
		// 				type: 'success',
		// 			})
		// 		})
		// 		.catch((err) => {
		// 			console.log()
		// 			this.$message({
		// 				message: '既に参加済み/申請済みです',
		// 				type: 'error',
		// 			})
		// 		})
		// }
	},
}

</script>