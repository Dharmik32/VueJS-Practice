<template>
    <h2>Student Data:</h2>
    <h2>Student name is: {{ name }}</h2>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Student',
    props: {
        name: String,
    }
}
</script>
