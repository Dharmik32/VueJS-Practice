<template>
<h1>{{ name }}</h1>
<h2>Object Props: {{ user }}</h2>
<button v-on:click="getData()">Call Function</button>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Child',
    props: {
        name: String,
        user: Object,
        getData: Function
    }
}
</script>
