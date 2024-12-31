<template>
    <h1>{{ count }}</h1>
    <button v-on:click="count=count+1">+</button>
    <button v-on:click="count=count-1">-</button>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Watcher',
    data(){
        return {
            count: 0
        }
    },
    watch: {
        count(val, prev){
            if(val > 5 && val > prev){
                this.count = 0
            }
        }
    }
}
</script>