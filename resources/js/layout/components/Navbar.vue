<template>
  <div>
    <div class="main-container">
        <el-menu
        default-active=1
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#308aff">
        <el-menu-item index="movie">
          <router-link :to="{ name: 'moviePage' }">
            最新映画
          </router-link>
        </el-menu-item>
        <el-menu-item index="review">口コミランキング</el-menu-item>
        <el-menu-item index="user">マイページ</el-menu-item>
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
        }
    }
}
</script>