<template>
    <div>
			<el-row>
				<el-col :span="18">
					<my-page-list
						:defaultUser="user"
						@update-mypage="updateMypage"
					></my-page-list>
				</el-col>
			</el-row>
		</div>
</template>

<script>
import myPageList from './detail.vue'

export default {
	name: 'myPage',
	components: {
		myPageList,
	},
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
		updateMypage(newUserData) {
			axios.put(`/user/${newUserData.id}`, newUserData).then((res) => {
				if (res.status !== 200) {
					return;
				}
				this.getUser();
			})
		}
	},
	mounted() {
		this.getUser();
	}
}
</script>