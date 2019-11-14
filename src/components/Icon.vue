<template>
    <img class="icon" :src="iconUrl">
</template>

<script>
export default {
    props: ["type"],
    name: 'Icon',
    computed: {
        iconUrl: function() { return require('@/assets/icons/' + this.type + '_icon.png') }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon {
    vertical-align: middle;
    margin: 0 5px;
}
</style>
