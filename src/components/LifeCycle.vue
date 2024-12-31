<template>
<!-- <h1>Before Created and created: {{ name }}</h1> -->
 <h1 ref="count">Counter: {{ counter }}</h1>
 <button v-on:click="counter=counter+1">Update Count</button>
</template>

<script>
export default {
    name: "LifeCycle",
    data() {
        console.log("warm");
        return {
            name: "Dharmik",
            counter: 0,
        }
    },
    // beforeCreate() {
    //     console.log("before created");
    //     alert("before created");
    // },
    // created(){
    //     console.log("created");
    //     this.name = "Bhavya"
    //     alert("created");
    // }
    // beforeMount(){
    //     alert("before mount");
    //     console.log("before mount", this.$el);
    // },
    // mounted(){
    //     alert("mounted");
    //     console.log("mounted", this.$el);
    // }
    beforeUpdate(){
        alert("before update");
        console.log("before update", this.$refs['count'].textContent);
        
    },
    updated(){
        alert("updated");
        console.log("after updated", this.$refs['count'].textContent);
    }
}
</script>
