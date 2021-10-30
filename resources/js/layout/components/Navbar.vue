<template>
  <div>
    <div style="background-color: white; width: 100%">
      <img 
        src="https://movietheater.s3.ap-northeast-1.amazonaws.com/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88+2021-10-05+20.51.27.png"
        style="width: 100%;"
      >
        <el-menu
          default-active="1"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
                <router-link :to="{ name: 'moviePage' }">
                  最新映画
                </router-link>
            </template>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
                <router-link :to="{ name: 'rankingPage' }">
                  ランキング
                </router-link>   
            </template>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
                <router-link :to="{ name: 'myPage' }">
                  マイページ
                </router-link> 
            </template>
          </el-submenu>
        </el-menu>
        <el-menu @click="handleLogout">
          <template>
            ログアウト
          </template>
        </el-menu>
    </div>
  </div>
</template>


<script>
export default {
    name: 'Navbar',
    data() {
      return {
      };
    },
    methods: {
      handleSelect(key) {
        console.log(key)
      },
      handleLogout() {
        axios.post('/loggedout')
          .then(() => {
            this.$router.push({
              path: '/login',
            })
          })
      },
      handleOpen() {

      },
      handleClose() {

      }
    }
}
</script>