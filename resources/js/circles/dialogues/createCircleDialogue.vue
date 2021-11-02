<template>
  <div>
		<el-dialog
			title="口コミ投稿"
			:visible.sync="formVisible"
			width="85%"
			:before-close="handleClose"
		>
			<el-form ref="form" :model="postForm" label-width="120px">
				<el-form-item label="サークル名">
					<el-input v-model="postForm.name"></el-input>
				</el-form-item>
				<el-form-item label="サークル詳細">
					<el-input v-model="postForm.description" type="textarea"></el-input>
				</el-form-item>
				<el-form-item label="サークル画像">
					<input type="file" v-on:change="fileSelected">
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="createCircle">作成</el-button>
					<el-button>Cancel</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>
	</div>
</template>

<script>



export default {
	name: 'createCircleDialogue',
	props: {
		formVisible: {
			type: Boolean,
		}
	},
	components: {},
	data() {
		return {
			postForm: {
				name: '',
				description: '',
			},
			fileInfo: '',
		}
	},
	methods: {
		handleClose() {
			this.$emit('close-form');
		},
		fileSelected(event){
			this.fileInfo = event.target.files[0]
		},
		createCircle() {
			const formData = new FormData()
			if(this.fileInfo){
				formData.append('imgFile', this.fileInfo);
			}
			formData.append('name', this.postForm.name);
			formData.append('description', this.postForm.description);
			this.$emit('create-circle', formData);
		}
	},
}

</script>