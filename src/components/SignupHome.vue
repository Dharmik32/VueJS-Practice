<template>
    <SignUpHeader/>
    <h1>New Sign Up For Home Page</h1>
</template>

<script>
import SignUpHeader from './SignUpHeader.vue';

export default {
    name: 'NewSignUp',
    components: {
        SignUpHeader
    },
    mounted(){
        let user = localStorage.getItem("user-info");
        console.log("users signup home", user);
        if(!user){
            this.$router.push({name: "SignUp"});
        }
    }
}
</script>