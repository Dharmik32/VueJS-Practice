<template>
    <h1>Form Modifiers</h1>
    <input type="number" v-model.number.lazy="data" />
    <h2>Data is:{{ typeof(data) }} </h2>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Modifiers",
    data() {
        return{
            data: ""
        }
    }
}
</script>