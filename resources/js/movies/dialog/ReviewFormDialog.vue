<template>
<div>
    <el-dialog
			title="口コミ投稿"
			:visible.sync="formVisible"
			width="85%"
			:before-close="handleClose"
		>
			<loading
				:active.sync="loading"
				:s-full-page="fullPage"
				></loading>
			<el-form ref="form" label-width="120px">
				<el-form-item label="タイトル">
					<el-input v-model="postForm.title"></el-input>
				</el-form-item>

				<el-form-item label="評価">
					<el-rate v-model="postForm.stars" allow-half></el-rate>
				</el-form-item>

				<el-row>
					<el-col :span="12">
						<el-form-item label="コメント">
							<quill-editor
								v-model="postForm.body"
								ref="quillEditor"
								:options="editorOption"
							>
							</quill-editor>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<div class="ql-snow" style="border: 1px solid gray; height: 400px; margin: 20px;">
							<div class="ql-editor">
									<p v-html="postForm.body"></p>
							</div>
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :offset="18" :span="5">
						<el-button type="primary" round @click="submit">投稿</el-button>
					</el-col>
				</el-row>
			</el-form>
		</el-dialog>
</div>
</template>

<script>
// vue-loading
// import DiffMatchPatch from 'diff-match-patch'

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
	name: 'ReviewFormDialog',
	props: {
		formVisible: {
			type: Boolean,
		}
	},
	components: {
		Loading,
	},
	data() {
		return {
			loading: false,
			fullPage: true,
			postForm: {
				title: '',
				body: '',
				stars: 2.5,
			},
			imgsCount: 0,
			editorOption: {
				theme: 'snow',
				placeholder: "コメントを入力",
				modules: {
					toolbar: [
						'bold', 
						'italic',
						'underline',
						'strike',
						'blockquote',
						{ 'header': 1 },
						{ 'header': 2},
						{ 'list': 'ordered' },
						{ 'list': 'bullet' },
						'link',
						'image',
						],
					// ['bold', 'italic', 'underline', 'strike'],
					// ['blockquote', 'code-block'],
					// [{ 'header': 1 }, { 'header': 2 }],
					// [{ 'list': 'ordered' }, { 'list': 'bullet' }],
					// [{ 'script': 'sub' }, { 'script': 'super' }],
					// [{ 'indent': '-1' }, { 'indent': '+1' }],
					// [{ 'direction': 'rtl' }],
					// [{ 'size': ['small', false, 'large', 'huge'] }],
					// [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
					// [{ 'color': [] }, { 'background': [] }],
					// [{ 'font': [] }],
					// [{ 'align': [] }],
					// ['clean'],
					// ['link', 'image', 'video']
				}
			}
		}
	},
	watch: {
		'postForm.body': function(val, oldVal){
			var img = val.match(/src="data[^"]*"/);
	
			// なければそのまま終了.
			if(!img) {
				this.postForm.body = this.postForm.body;
				return;
			}

			this.$confirm('画像をアップロードしますか?', {
				confirmButtonText: 'はい',
				cancelButtonText: '取り消し',
				type: 'confirm'
			}).then(() => {
					this.LocalToS3(img[0])
        }).catch(() => {
					this.postForm.body = oldVal;
          this.$message({
            type: 'info',
            message: 'アップロードをキャンセルしました'
          });          
        });
		}
	},
	methods: {
		handleClose() {
			this.$emit('close-form');
		},
		async LocalToS3(img) {
			this.loading = true;
			var startIndex = this.postForm.body.indexOf(img); //src=...
			var endIndex = startIndex + img.length-1;
			const base64 = this.postForm.body.slice(startIndex+5, endIndex); // data: ...

			// base64文字列をBlob形式のFileに変換する
			var bin = atob(String(base64.replace(/^.*,/, '')));
			var buffer = new Uint8Array(bin.length);
			for (var j = 0; j < bin.length; j++) {
					buffer[j] = bin.charCodeAt(j);
			}
			// Blobを作成
			var blob = new Blob([buffer.buffer], {
					type: 'image/png'
			});

			// Blobをfile形式に変換
			const imgData = new FormData();
			imgData.append('image', blob);
			imgData.append('startIndex', startIndex);
			imgData.append('endIndex', endIndex);
			imgData.append('editorContens', this.postForm.body);

			// awsのパスに変換
			await axios.post('/image/', imgData).then((res) => {
				this.postForm.body = 
					this.postForm.body.slice(0,startIndex+5) + 
					res.data + 
					this.postForm.body.slice(endIndex, this.postForm.body.length);
					this.loading = false;
					this.$message({
            type: 'success',
            message: '画像をアップロードしました'
          });
			})
		},
		submit() {
			this.loading = true;
			this.$emit('submit-review', this.postForm);
			this.loading = false;
		},
	},
}
</script>
