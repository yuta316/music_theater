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
				</el-col>
			</el-row>
		</el-card>
	</div>
</template>

<script>



export default {
	name: 'userList',
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
	},
}

</script>