<template>
  <div>
    <div class="main-container">
      <el-row>
        <el-col :span="4">
          <nav-bar></nav-bar>
        </el-col> 
        <el-col :span="20">
          <app-main></app-main>
        </el-col>
      </el-row>
    </div>
  </div>
</template>


<script>
import NavBar from './components/Navbar';
import AppMain from './components/AppMain.vue';
export default {
    name: 'Layout',
    components: {
      NavBar,
      AppMain,
    }
}
</script>