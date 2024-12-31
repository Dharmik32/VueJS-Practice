<template>
<h1>{{profile}}'s Profile Component</h1>
</template>

<script>
import {
    useRoute
} from 'vue-router';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Profile',
    data() {
        // console.log("first Data");
        return {
            profile: "",
        }
    },
    mounted() {
        const route = useRoute();
        console.log("route", route, route.params, route.fullPath);
        this.profile = route.params.name;
    }
}
</script>
