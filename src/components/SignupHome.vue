<template>
    <h1>New Sign Up For Home Page</h1>
</template>

<script>
export default {
    name: 'NewSignUp',
    mounted(){
        let user = localStorage.getItem("user-info");
        console.log("users signup home", user);
        if(!user){
            this.$router.push({name: "SignUp"});
        }
    }
}
</script>