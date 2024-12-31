<template>
  <h1>This is Home component {{ 10 + 20 }}</h1>
  <h1>Email: {{ email }}</h1>
  <h1>Password: {{ password }}</h1>
  <h1>Name: {{ getName("Good Morning") }}</h1>
  <h1>Testing Methods: {{ getNameInsideMethod("Hello") }}</h1>
  <h1>Display Object from methods: {{ getData().email }}</h1>
  <button v-on:click="btnClick()">Once Click Me</button>
  <button v-on:dblclick="btnClick2()">Double Click Me</button>
  <h1>Two Way Binding:</h1>
  <h2>{{ count }}</h2>
  <input type="text" v-model="count" />

  <h3>Get input field value using v-model</h3>
  <input type="text" v-model="email" />
  <br /><br />
  <input type="text" v-model="password" />

  <h3>Get Checkbox in v-model</h3>
  <h3>Technology</h3>
  <label for="java">JavaScript</label>
  <input type="checkbox" value="JavaScript" id="java" v-model="technology" />

  <label for="react">ReactJS</label>
  <input type="checkbox" value="ReactJS" id="react" v-model="technology" />

  <label for="node">NodeJS</label>
  <input type="checkbox" value="NodeJS" id="node" v-model="technology" />

  <h4>Selected Technology: {{ technology }}</h4>

  <br /><br />

  <h2>Who am i</h2>
  <label for="student">Student</label>
  <input type="radio" value="student" id="student" name="who" v-model="who" />

  <label for="developer">Developer</label>
  <input type="radio" value="developer" id="developer" name="who" v-model="who" />

  <p>I am an: {{ who }}</p>

  <h1 v-if="show">If else condition</h1>
  <h1 v-else>Else condition</h1>
  <button v-on:click="show = !show">Toggle</button>

  <h1>For loop in vue js</h1>
  <ul>
    <li v-for="item in forloop" :key="item">
      {{ item }}
    </li>
  </ul>

  <br /><br />

  <h2>Array of object</h2>
  <ul>
    <li v-for="item in user" :key="item.email">
      Name: {{ item.name }} and email: {{ item.email }}
    </li>
  </ul>

  <Child name="Dharmik Chavda" :user="user" :getData="child" />

  <h2>Now uses an reuse component</h2>
  <ul>
    <li v-for="item in user" :key="item.email">
      <User :data="item" :reusefunction="reusefunction" />
    </li>
  </ul>

  default email check :: {{ email }} <br /><br />
  <div v-html="tag"></div>
  <div v-html="tag2"></div>

  <h1>Now Implement an class binding</h1>
  <h1>CSS Binding</h1>
  <h2 :class="{ green: colorfull }">Home Component</h2>
  <button v-on:click="btnColorChange">Change above color</button>

  <h1>Now Prop in vue js</h1>
  <h1>Parent to child</h1>
  <Student :name="name" />
  <Teacher :name="name" />

  <h1>Send Data from child to parent in vue js 3: {{ child2message }}</h1>
  <Child2 :getUser="getUserName" />

  <h1>Ref in vue js 3</h1>
  <input type="text" ref="input" />
  <button v-on:click="getRefBtn">Click me</button>

  <SimpleForm />

  <Modifiers />

  <h1>Start an Non-props</h1>
  <NonProps data="some data" id="user-cmp" />

  <ComputedProperty />

  <watcher />

  <h1>Slots in vue js</h1>
  <!-- <Slot name="dharmik chavda"/> -->
  <Slot>
    <h1>Code Step by Step</h1>
  </Slot>
  <Slot><a href="#">Code step by step</a></Slot>
  <Slot><img
      src="https://media.gettyimages.com/id/493736182/photo/iron-man.jpg?s=2048x2048&w=gi&k=20&c=676a5HYDGasAE2jjbB10IDVHH6hM61aEoeUKKgmXEnM=" />
  </Slot>
  <!-- <Slot></Slot> -->

  <Slot>
    <template v-slot:header>
      <h1>Peter</h1>
    </template>

    <template v-slot:content>
      <p>A vue js</p>
    </template>

    <template v-slot:footer>
      <button>Buy Now</button>
    </template>

  </Slot>

  <Slot>
    <template v-slot:header>
      <h1>Facebook</h1>
    </template>

    <template v-slot:content>
      <p>A React js</p>
    </template>

    <template v-slot:footer>
    </template>

  </Slot>

  <h1>Dynamic Components</h1>
  <button v-on:click="tab = 'Java'">Load Java</button>
  <button v-on:click="tab = 'Php'">Load Php</button>
  <button v-on:click="tab = 'Node'">Load Node</button>

  <component :is="tab" />

  <h1>Teleport Component Start</h1>
  <teleport to='#footer'>
    <Footer />
  </teleport>

  <LifeCycle/>

  <h1>Before UnMounted and Unmounted </h1>
  <button v-on:click="showUnMounted=!showUnMounted">Toggle</button>
  <BeforeMounted v-if="showUnMounted"/>

</template>

<script>
import BeforeMounted from "./BeforeMounted.vue";
import Child from "./Child.vue";
import Child2 from "./Child2.vue";
import ComputedProperty from "./ComputedProperty.vue";
import Footer from "./Footer.vue";
import Java from "./Java.vue";
import LifeCycle from "./LifeCycle.vue";
import Modifiers from "./Modifiers.vue";
import Node from "./Node.vue";
import NonProps from "./NonProps.vue";
import Php from "./Php.vue";
import SimpleForm from "./SimpleForm.vue";
import Slot from "./Slot.vue";
import Student from "./Student.vue";
import Teacher from "./Teacher.vue";
import User from "./User.vue";
import Watcher from "./Watcher.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    Child,
    User,
    Student,
    Teacher,
    Child2,
    SimpleForm,
    Modifiers,
    NonProps,
    ComputedProperty,
    Watcher,
    Slot,
    Php,
    Node,
    Java,
    Footer,
    LifeCycle, 
    BeforeMounted
  },
  data() {
    return {
      showUnMounted: true,
      tab: "Java",
      child2message: "",
      name: "Burce",
      colorfull: false,
      email: "dharmikchavda@gmail.com",
      password: null,
      technology: [],
      who: null,
      show: true,
      forloop: ["JavaScript", "Node", "React", "Angular", "Vue"],
      user: [
        {
          name: "Dharmik",
          email: "dharmik@gmail.com",
        },
        {
          name: "Bhavya",
          email: "bhavya@gmail.com",
        },
      ],
      getName: function (text) {
        return "Dharmik Chavda" + " " + text;
      },
      count: 0,
      tag: "<h1>My Self Dharmik Chavda</h1>",
      tag2: "<h1>My Self Dharmik Chavda, Good Morning</h1>",
    };
  },
  methods: {
    getRefBtn() {
      this.$refs.input.focus();
      let val = this.$refs.input.value;
      console.log("val", val);
    },
    getUserName(name) {
      this.child2message = name;
    },
    btnColorChange() {
      this.colorfull = !this.colorfull;
    },
    reusefunction(name) {
      alert(name);
    },
    child: function () {
      console.log("first");
    },
    getNameInsideMethod: function (text) {
      return text;
    },
    getData() {
      return {
        firstName: "Dharmik",
        lastName: "chavda",
        email: this.email,
      };
    },
    btnClick() {
      alert("Button Click");
      this.count++;
    },
    btnClick2() {
      alert("Button Click 2");
    },
  },
};
</script>

<style scoped>
h1 {
  color: orange;
}

.green {
  background-color: green;
  width: 200px;
  padding: 10px;
}
</style>
