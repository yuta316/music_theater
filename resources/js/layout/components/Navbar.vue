<template>
  <div>
    <div style="background-color: white;">
      <img 
        src="https://movietheater.s3.ap-northeast-1.amazonaws.com/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88+2021-10-05+20.51.27.png"
        style="width: 100%;"
      >
        <el-menu
          default-active="1"
          @open="handleOpen"
          @close="handleClose"
          class="el-menu-vertical-demo"
        >
          <el-menu-item index="1">
            <template slot="title" style="font-size: 90%;">
              <i class="el-icon-location"></i>
              <span>
                <router-link :to="{ name: 'moviePage' }">
                  最新映画
                </router-link>
              </span>
            </template>
          </el-menu-item>
          <el-menu-item index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
                <router-link :to="{ name: 'rankingPage' }">
                  ランキング
                </router-link>   
            </template>
          </el-menu-item>
          <el-menu-item index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
                <router-link :to="{ name: 'circlePage' }">
                  サークル
                </router-link>   
            </template>
          </el-menu-item>
          <el-menu-item index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
                <router-link :to="{ name: 'myPage' }">
                  マイページ
                </router-link> 
            </template>
          </el-menu-item>
          <el-menu-item index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
                <span @click="handleLogout">
                  ログアウト
                </span> 
            </template>
          </el-menu-item>
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

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 100%;
  min-height: 50px;
}
</style>
