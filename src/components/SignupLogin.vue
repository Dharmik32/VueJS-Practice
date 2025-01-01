<template>
    <img class="logo" src="../assets/restaurant logo.png" />
    <h1>Login</h1>
    <div class="login">
        <input type="text" name="email" v-model="email" placeholder="Enter Email" />
        <input type="password" name="password" v-model="password" placeholder="Enter Password" />
        <button v-on:click="login">Login</button>
    </div>
    <router-link to="/signuphome">SignUp</router-link>
</template>

<script>
import axios from 'axios';

export default {
    name: 'SingupLogin',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods:{
        async login(){
            let result = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`)
            console.log("result", result);

            if(result.status == 200 && result.data.length > 0){
                localStorage.setItem('user-info', JSON.stringify(result.data[0]));
                this.$router.push({name: 'SignUpHome'})
            }
        }
    },
    mounted(){
        let user = localStorage.getItem("user-info");
        console.log("user login page", user);
        if(user){
            this.$router.push({name: "SignUpHome"});
        }
    }
}
</script>