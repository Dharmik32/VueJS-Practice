<template>
    <h1>Create a simple form</h1>
    <p>{{ form }}</p>
    <ul>
        <li v-for="item in error" v-bind:key="item">
            {{ item }} not valid
        </li>
    </ul>
    <form>
        <label>
            Email:
        </label>
        <input type="text" placeholder="Enter email" v-model="form.email" />

        <br /> <br />
        <label>
            Password:
        </label>
        <input type="password" placeholder="Enter password" v-model="form.password" />

        <br /> <br />
        <label>Select Country: </label>
        <select v-model="form.country">
            <option>India</option>
            <option>China</option>
            <option>USA</option>
            <option>Canada</option>
        </select>

        <br /> <br />
        <h3>Techonolgy</h3>
        <label>Java: </label>
        <input type="checkbox" value="java" v-model="form.technology" />

        <br /> <br />
        <label>React: </label>
        <input type="checkbox" value="react" v-model="form.technology" />

        <br /> <br />
        <label>Node: </label>
        <input type="checkbox" value="node" v-model="form.technology" />

        <br /> <br />

        <h3>Gender</h3>
        <label>Male: </label>
        <input type="radio" value="male" name="gender" v-model="form.gender" />

        <label>Female: </label>
        <input type="radio" value="female" name="gender" v-model="form.gender" />

        <br /> <br />
        <button v-on:click="handleSubmit" type="button">Submit</button>
    </form>
</template>
<script>
export default {
    name: 'SimpleForm',
    data() {
        return {
            form: {
                email: '',
                password: '',
                country: '',
                technology: [],
                gender: ''
            },
            error: [],
        }
    },
    methods: {
        handleSubmit() {
            this.error = [];
            for(const item in this.form){
                if(this.form[item] === '' || this.form[item].length == 0){
                    this.error.push(item);
                }
            }

            if(this.error.length == 0){
                alert("Data has been Submitted Successsfully!");
            }

            console.log(this.form, this.error);
        }
    }
}
</script>