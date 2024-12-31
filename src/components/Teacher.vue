<template>
    <h2>Teacher Data</h2>
    <h2>Teacher name: {{ name }}</h2>
</template>
<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Teacher',
    props: {
        name: String
    }

}
</script>