<template>
  <div id="app">
    <div style="width: 80%; margin-left: auto; margin-right:auto;">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  /*name: 'app',
  components: {
    GoalViewList,
    Icon
  },
  data: () => {
    return {
      goals: {
        type: 'Mining',
        title: '87 Mining',
        subgoals: [{
          type: 'Prayer',
          title: '69 Prayer',
          subgoals: [{
            type: 'Defence', title: '69 Defence'
          }]
        }]
      }
    }
  }*/
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
