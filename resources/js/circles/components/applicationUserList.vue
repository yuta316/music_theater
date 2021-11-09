<template>
  <div>
		<el-card v-for="user in users" :key="user.id" style="margin-top: 30px;">
			<el-row>
				<el-col :span="8" style="text-align: center;">
					<img :src="user.img_path" width="80%" style="aspect-ratio: 1 / 1;">
				</el-col>
				<el-col :span="15" :offset="1">
						{{ user.name }}
					<el-divider></el-divider>
					<el-row>
						<el-col :span="9" :offset="2">
							<el-button @click="approve(user.id)">承認</el-button>
						</el-col>
						<el-col :span="9" :offset="2">
							<el-button @click="reject(user.id)">拒否</el-button>
						</el-col>
					</el-row>
				</el-col>
			</el-row>
		</el-card>
	</div>
</template>

<script>



export default {
	name: 'applicationUserList',
	props: {
		users: {
			default: null,
		}
	},
	components: {},
	data() {
		return {}
	},
	methods: {
		approve(userId) {
			this.$emit('approve-application', userId)
		},
		reject(userId) {
			this.$emit('reject-application', userId)
		}
	},
}

</script>