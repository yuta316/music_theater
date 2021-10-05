<template>
  <div>
		<el-row>
			<el-col :span="16" :offset="8">
				<el-descriptions
					:title="user.name+'さんの情報'"
					:column="3" 
					border 
					v-if="user"
				>
					<template slot="extra">
						<div v-if="!user.img_path">
							<el-avatar :size="50" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
						</div>
						<div v-else>
							<el-avatar :size="50" :src="user.img_path"></el-avatar>
						</div>
					</template>

						<el-descriptions-item>
							<template slot="label">
								<i class="el-icon-user"></i> ユーザ名
							</template>
							{{ user.name }}
						</el-descriptions-item>

						<el-descriptions-item>
							<template slot="label">
								<i class="el-icon-user"></i> 年齢
							</template>
							<div v-if="user.age">{{ user.age }}</div>
							<div v-else>未設定</div>
						</el-descriptions-item>

						<el-descriptions-item>
							<template slot="label">
								<i class="el-icon-user"></i> 性別
							</template>
							<div v-if="user.sex">{{ user.sex }}</div>
							<div v-else>未設定</div>
						</el-descriptions-item>
					</el-descriptions>
			</el-col>
		</el-row>
		
	</div>
</template>

<script>
export default {
    name: 'userPageList',
		components: {},
    props: {
        defaultUser: {
            type: Object,
        },
    },
		data() {
			return {
				editDialogVisible: false,
				user: this.defaultUser,
			}
		},
		watch: {
			defaultUser(value) {
				this.user = value;
			}
		},
		methods: {
			updateMypage(newUserData) {
				this.editDialogVisible = false;
				this.$emit('update-mypage', newUserData);
			}
		}
}
</script>