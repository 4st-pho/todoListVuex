<template>
    <div class="list">
        <div class="input">
            <input type="text" v-model="$store.state.temp">
            <button @click="getChanged({'content': $store.state.temp, 'done': false})">ADD</button>
        </div>
        <div>
            <Todo />
        </div>

    </div>
</template>
<script>
import { mapActions } from 'vuex'
import Todo from './Todo.vue'
export default {

    components:{
        Todo
    },
    methods: {
        ...mapActions(['getChanged'])
    }
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.list{
    max-width: 500px;
    margin: 0 auto;
}
.list .input{
    border-radius: 5px;
    border: 2px solid gray;
}
.list .input > *{
    border: none;
    outline: none;
    padding: 15px 10px;
    font-size: 25px;
}
.list .input > :first-child{
    display: inline-block;
    width: 80%;
}
.list .input > :last-child{
    display: inline-block;
    width: 20%;
}
</style>