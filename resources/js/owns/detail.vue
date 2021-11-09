<template>
  <div>
		<edit-mypage-dialogue
			:editDialogVisible="editDialogVisible"
			:editUser="user"
			@update-mypage="updateMypage"
			@close-form="editDialogVisible = false"
		></edit-mypage-dialogue>

		<el-row>
			<el-col :span="24" :offset="0">
				<el-card style="margin: 10px; border-radius: 30px;">
				<el-descriptions title="マイページ" :column="3" border v-if="user">
					<template slot="extra">
						<div v-if="!user.img_path">
							<el-avatar :size="50" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
						</div>
						<div v-else>
							<el-avatar :size="50" :src="user.img_path"></el-avatar>
						</div>
					</template>
						<template slot="extra">
							<el-button type="primary" size="small" @click="editDialogVisible = true">編集</el-button>
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

						<el-descriptions-item>
							<template slot="label">
								<i class="el-icon-user"></i> メールアドレス
							</template>
							{{ user.email }}
						</el-descriptions-item>
					</el-descriptions>
				</el-card>
			</el-col>
		</el-row>
		
	</div>
</template>

<script>
import editMypageDialogue from './dialogue/editMypageDialogue.vue'

export default {
    name: 'myPageList',
		components: {
			editMypageDialogue,
		},
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
