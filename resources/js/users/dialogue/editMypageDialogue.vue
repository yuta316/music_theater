<template>
  <el-dialog
		title="ユーザ情報の変更"
		:visible.sync="dialogVisible"
		width="70%"
	>
		<el-form :model="user" v-if="user">
			<el-row>
				<el-col :span="24">
					<el-form-item label="ユーザ名">
						<el-input v-model="user.name"></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<el-form-item label="年齢">
						<el-input v-model="user.age"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="性別">
						<br>
						<el-select v-model="user.sex" placeholder="選択">
							<el-option
								v-for="gender in genders"
								:key="gender.value"
								:label="gender.value"
								:value="gender.value">
							</el-option>
						</el-select>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-form-item label="メールアドレス">
					<el-input v-model="user.email"></el-input>
				</el-form-item>
			</el-row>
			<el-row>
				<el-form-item label="プロフィール画像">
					<el-avatar :src="filePath" :size="50" v-if="filePath"></el-avatar>
					{{ filePath }}
					<el-upload
						:headers="{ 'X-CSRF-TOKEN': csrf_token }"
						name="image"
						drag
						action="/image"
						:multiple="false"					
      			:on-success="addAttachments">
						<i class="el-icon-upload"></i>
						<div class="el-upload__text">Drop file here or <em>click to upload</em></div>
						<div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
					</el-upload>
				</el-form-item>
			</el-row>
			<el-button type="primary" @click="updateMypage">変更</el-button>
		</el-form>
	</el-dialog>
</template>

<script>
export default {
	name: 'editMypageDialogue',
	props: {
		editDialogVisible: {
			type: Boolean,
			default: false,
		},
		editUser: {
			type: Object,
		},
	},
	data() {
		return {
			user: this.editUser,
			genders: [{
					value: '男性',
				}, {
					value: '女性',
				}, {
					value: 'その他',
				}
			],
			fileList: [],
			csrf_token: '',
			filePath: null,
		}
	},
	methods: {
		addAttachments(response, _){
			this.filePath = response;
		},
		updateMypage() {
			this.user.img_path = this.filePath;
			this.$emit('update-mypage', this.user);
		}
	},
	computed: {
		dialogVisible: {
			get: function() {
				return this.editDialogVisible
			},
			set: function(value) {
				this.$emit('update:visible', value)
			}
		}
	},
	watch: {
		editUser(value) {
			this.user = value;
		},
	},
	mounted() {
		this.csrf_token = document.getElementById('csrf').content;
	}
}
</script>