<template>
  <div>
    <div id="app" class="md-layout">
      <div class="md-layout-item">
        <ClapBack/>
      </div>
    </div>
    <div class="md-layout footer">
      <md-content class="md-layout-item footer-item">
        <div class="md-layout md-alignment-bottom-left">
          <p><a href="https://jenniferplusplus.com/a-job-i-did-not-get/">Read why</a></p>
        </div>
      </md-content>
      <md-content class="md-layout-item footer-item">
        <div class="md-layout md-inline md-alignment-bottom-right">
          <p class="text-align-right">Made with 💁‍♀️ by <a href="https://jenniferplusplus.com">Jennifer++</a><br/>
          <a href="https://twitter.com/jennplusplus">Get @ me</a></p>
        </div>
      </md-content>
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

  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2.5rem;
  }

  .footer-item {
    padding: 0em 2em;
  }

  .text-align-right {
    text-align: right;
  }
</style>
