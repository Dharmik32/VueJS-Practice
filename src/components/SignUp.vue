<template>
    <img class="logo" src="../assets/restaurant logo.png" />
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" name="name" v-model="name" placeholder="Enter Name" />
        <input type="text" name="email" v-model="email" placeholder="Enter Email" />
        <input type="password" name="password" v-model="password" placeholder="Enter Password" />
        <button v-on:click="handleSubmit">Sign Up</button>
    </div>
    <router-link to="/signuplogin">Login</router-link>
</template>

<script>
import axios from 'axios';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Singup",
    data() {
        console.log("first", this.$router);
        return {
            name: "",
            email: "",
            password: ""
        }
    },
    methods: {
        async handleSubmit() {
            let response = await axios.post("http://localhost:3000/user", {
                name: this.name,
                email: this.email,
                password: this.password
            })
            console.log(response);
            console.log("run before api");

            if(response.status == 201){
                localStorage.setItem("user-info", JSON.stringify(response.data));
                this.$router.push({name: "SignUpHome"});
            }
        }
    },
    mounted(){
        let user = localStorage.getItem("user-info");
        console.log("user", user);
        if(user){
            this.$router.push({name: "SignUpHome"});
        }
    }
}
</script>

<style>
</style>