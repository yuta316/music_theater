<template>
  <div style="text-align: center; width: 80%; margin: 20% auto 0 auto">
    <h3>ログイン</h3>
    <el-form>
      <el-form-item label="メールアドレス">
        <el-input v-model="LoginForm.email" auto-complete></el-input>
      </el-form-item>
      <el-form-item label="パスワード">
        <el-input type="password" v-model="LoginForm.password" auto-complete></el-input>
      </el-form-item>
    </el-form>
    <el-row>
      <el-col :span="8">
       <el-button type="warning" @click="login">ログイン</el-button>
      </el-col>
      <el-col :span="8">
        <el-button type="warning" @click="googleLogin">Googleログイン</el-button>
      </el-col>
      <el-col :span="8">

      </el-col>
    </el-row>
  </div>
</template>


<script>
export default {
    name: 'LoginForm',
    data() {
      return {
        LoginForm: {
          email: '',
          password: '',
        }
      }
    },
    methods: {
      login() {
        axios.post('/login', this.LoginForm)
          .then(() => {
            this.$router.push({
              path: '/',
            })
          })
          .catch((err) => {
            this.$message({
              type: 'info',
              message: 'ログイン失敗'
            })
          })
      },
      googleLogin() {
        axios.get('/login/google')
          .then((res) => {
            location.href = res.data;

            // window.onload(res.data)
            // this.$router.push({
            //   path: '/',
            // })
          })
          .catch((err) => {
            this.$message({
              type: 'info',
              message: 'ログイン失敗'
            })
          })
      }
    }
}
</script>