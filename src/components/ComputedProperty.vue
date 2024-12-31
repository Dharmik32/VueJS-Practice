<template>
    <h1>Computed Property</h1>
    <h2>{{ (dollors*rupeeVal) - discount }}</h2>

    <h2>Used an Computed Result: {{getResult}}</h2>
    <h2>Used an Method Result: {{ getResultMethod() }}</h2>
</template>

<script>
export default {
    name: 'ComputedProperty',
    data(){
        return {
            dollors: 100,
            rupeeVal: 70,
            discount: 10,
        }
    },
    methods: {
        getResultMethod(){
            return (this.dollors*this.rupeeVal)-this.discount;
        }
    },
    computed: {
        getResult(){
            return (this.dollors*this.rupeeVal)-this.discount;
        }
    }
}
</script>