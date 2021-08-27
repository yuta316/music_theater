<template>
    <div>
			<el-row>
				<el-col :span="18">
					<el-descriptions class="margin-top" title="マイページ" :column="3" :size="size" fit="fill" border v-if="user">
					<template slot="extra">
						<div v-if="!user.img_path">
							<el-avatar :size="50" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
						</div>
						<div v-else>
							<el-avatar :size="50" :src="user.img_path"></el-avatar>
						</div>
					</template>
						<template slot="extra">
							<el-button type="primary" size="small">編集</el-button>
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
				</el-col>
			</el-row>
		</div>
</template>

<script>
export default {
	name: 'myPage',
	data() {
		return {
			user: null,
		}
	},
	methods: {
		getUser() {
			axios.get('/user').then((res) => {
				if (res.status !== 200) {
					return;
				}
				this.user = res.data;
      }).catch(err => {
        console.log('err:', err);
        return
      });
		},
	},
	mounted() {
		this.getUser();
	}
}
</script>