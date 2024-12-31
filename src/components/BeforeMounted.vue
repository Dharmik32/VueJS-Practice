<template>
    <h1 ref="user">Before Mounted Component</h1>
</template>

<script>
export default {
    name: 'BeforeMounted',
    beforeUnmount(){
        console.log('Before Unmounted Component', this.$refs['user']);
    },
    unmounted(){
        console.log('Unmounted Component', this.$refs['user']);
    }
}
</script>