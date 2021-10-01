<template>
  <div>
    <div class="main-container">
        <el-menu
        default-active=1
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#308aff"
        style="text-align: right;"
        >
        <el-menu-item index="movie">
          <router-link :to="{ name: 'moviePage' }">
            最新映画
          </router-link>
        </el-menu-item>
        <el-menu-item index="review">
          <router-link :to="{ name: 'rankingPage' }">
            ランキング
          </router-link>    
        </el-menu-item>
        <el-menu-item index="user">
          <router-link :to="{ name: 'myPage' }">
            マイページ
          </router-link>
        </el-menu-item>
          <el-button 
            type="info"
            round
            style="margin-top: 10px;"
            @click="handleLogout"
          >
            ログアウト
          </el-button>
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
      }
    }
}
</script>