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
	methods: {
		handleClose() {
			this.$emit('close-form');
		},
		async LocalToS3() {
			// imgs[] : imgタグの要素を格納する 
			const imgs = this.postForm.body.match(/<img.*?>/g);
			if(!imgs) {
				this.postForm.body = this.postForm.body;
				return;
			}

			for(var i = 0; i<imgs.length; i++) {
				var startIndex = this.postForm.body.indexOf(imgs[i]);
				var endIndex = startIndex + imgs[i].length -1;
				const imgInfo = this.postForm.body.slice(startIndex, endIndex);
				const base64 = imgInfo.slice(10, -3);

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
				await axios.post('/image/review', imgData).then((res) => {
					this.postForm.body = res.data;
				})
			}
		},
		submit() {
			this.loading = true;
			this.LocalToS3().then(() => {
				this.$emit('submit-review', this.postForm);
				this.loading = false;
			})
		},
	},
}
</script>
