<template>
    <h2>Child2 Component</h2>
    <button v-on:click="getUser(message)">Send Child 2 Message</button>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Child2',
    data() {
        return {
            message: 'Hello from Child2'
        }
    },
    props: {
        getUser: Function
    }
}
</script>