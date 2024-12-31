<template>
    <div>
        <h3>Dharmik</h3>
        <h3>Bhavya</h3>
        <h3>John</h3>
        <h3 v-bind="$attrs">{{data}}</h3>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Nonprops",
    inheritAttrs: false,
    props: {
        id: String,
        data: String
    }
}
</script>