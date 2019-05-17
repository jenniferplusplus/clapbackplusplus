<template>
  <div id="app" class="md-layout">
    <div class="md-layout-item">
      <ClapBack/>
    </div>
  </div>
</template>

<script>
import ClapBack from './components/ClapBack.vue';

export default {
  name: 'app',
  components: {
    ClapBack
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
