<template>
    <h1>API Component</h1>
    <!-- <p>User Data</p>
    <ul class="item" v-for="item in list" :key="item.id">
        <li>{{ item.id }}</li>
        <li>{{ item.email }}</li>
        <li>{{ item.first_name }}</li>
        <li>{{ item.last_name  }}</li>
        <li><img :src="item.avatar" /></li>
    </ul> -->

    <h2>Post Request</h2>
    <input type="text" name="email" v-model="email"/> <br/> <br/>
    <input type="text" name="password" v-model="password"/> <br/> <br/>
    <button v-on:click="addUser()">Add user</button>

</template>

<script>
import axios from 'axios';
export default {
    name: "API",
    data(){
        return {
            list: [],
            email: "",
            password: ""
        }
    },
    async mounted(){
        const response = await axios.get('https://reqres.in/api/users');
        console.log("response", response);
        this.list = response.data.data;
    },
    methods: {
        async addUser(){
            let result = await axios.post('https://reqres.in/api/users', {
                email: this.email,
                password: this.password
            })
            console.log("first", this.email, this.password, result)
        }
    }

}
</script>

<style scoped>
.item{
    display: flex;
}
.item img {
    width: 50px
}
.item li{
    display: inline-block;
    width: 180px;
    border: 1px solid;
    text-align: center;
    padding: 5px;
}
</style>