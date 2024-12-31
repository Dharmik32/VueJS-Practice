<template>
    <div class="user">
        <h1>{{data.name}}</h1>
        <h1>{{data.email}}</h1>
        
        <button v-on:click="reusefunction(data.name)">Call Function</button>
    </div>
   
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'User',
    props: {
        data: Object,
        reusefunction: Function,
    }

}
</script>

<style scoped>
.user{
    background-color: skyblue;
    padding: 10px;
    border-bottom: 1px solid;
    margin-bottom: 20px;
}
</style>