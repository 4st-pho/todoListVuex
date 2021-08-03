<template>
    <div class="todo">
        <div v-for="(work, index) in getWorks" :key="index" >
            <p  :class="{lineThrough : work.done}"> <span @click="work.done = !work.done" class="checkBox" :class="{done: work.done}"></span> {{work.content}}</p>
            <button @click="deleteTodo(index)">Delete</button>
        </div>
        
    </div>
</template>
<script>
import { mapGetters, mapMutations} from 'vuex'
export default {
    computed: {
        ...mapGetters(['getWorks'])
    },
    methods: {
        ...mapMutations(['deleteTodo'])
    }
}
</script>
<style scoped>
.checkBox{
    display: inline-block;
    width: 15px;
    height: 15px;
    background-color:  tomato;
    border: 2px solid #ccc;
}
.done{
    background-color: yellowgreen;
}
.todo > div{
    display: flex;;
    justify-content: space-between;
    margin: 0;
    margin-top: 10px;
    border: 1px solid #ccc;
    background-color: #ebebeb;
    border-radius: 5px;
}
.todo  p{
    display: inline-block;
    line-height: 10px;
    font-size: 25px;
    padding-left: 10px;
}

.lineThrough{
    text-decoration: line-through;
}
</style>