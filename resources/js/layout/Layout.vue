<template>
  <div>
    <div class="main-container">
      <nav-bar></nav-bar>
      <app-main></app-main>
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