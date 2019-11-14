<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'Card'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
    margin: 5px 5px;
    padding: 5px 5px;
    border-width: 1px;
    border-color: darkgray;
    border-radius: 10px;
    border-style: solid;
    box-shadow: 3px 3px #99999999;
}
</style>
