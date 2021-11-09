<template>
  <div v-loading="loading">
		<create-circle-dialogue
		  :formVisible="formVisible"
			@close-form="formVisible = false"
			@create-circle="createCircle"
		></create-circle-dialogue>

		<el-row>
			<el-col :span="3" :offset="18">
				<el-button
					type="primary"
					style="margin: 30px;"
					@click="formVisible = true"	
				>
					サークル作成
				</el-button>
			</el-col>
		</el-row>
		<circle-list
			style="margin: 20px"
			:circles="circles"
		></circle-list>
	</div>
</template>

<script>
import createCircleDialogue from './dialogues/createCircleDialogue.vue';
import circleList from './components/circleList.vue';

export default {
	name: 'circlePage',
	components: {
		createCircleDialogue,
		circleList,
	},
	data() {
		return {
			loading: false,
			formVisible: false,
			circles: {},
		}
	},
	methods: {
		createCircle(postForm) {
			this.loading = true;
			axios.post('/circle', postForm)
				.then((res) => {
					this.loading = false;
					this.formVisible = false;
					this.getCircles;
				})
		},
		getCircles(){
			axios.get('/circle')
			  .then((res) => {
					this.circles = res.data;
				})
		}
	},
	mounted() {
		this.getCircles();
	}
}

</script>