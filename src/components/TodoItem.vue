<template>
  <div class="item jc-between ai-center">
      <p><i class="fas fa-hand-point-right"></i> {{ contentText }}</p>
      <div class="navigate middle">
          <i class="far fa-check-circle" v-if="todoState=='yapilacak'" @click="moveTodo"></i>
          <i class="fas fa-check-circle" v-else></i>
          <div class="description middle" v-if="todoState=='yapilacak'">
              <h5>Taşı</h5>
          </div>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name:'TodoItem',
    props:[
        'content-text',
        'todo-state',
        'index'
    ],
    data(){
        return {
            
        }
    },
    methods:{
        ...mapActions([
            'moveTodoItem'
        ]),
        moveTodo(){
            this.moveTodoItem(this.index);
        }
    }
}
</script>

<style scoped>

.item {
    width: 99%;
    padding: 10px;
    background-color: white;
    box-shadow: 5px 5px 10px 1px rgba(0,0,0,.2);
    border-radius: 3px;
    color: black;
    text-align: start;
    margin-block: 15px;
}

.item p {
    font-family: 'Poppins' , sans-serif;
    font-size: 18px;
}

.item p i {
    color: #7699e3;
    font-size: 20px;
}

.navigate {
    width: 45px;
    margin-left: 20px;
    font-size: 35px;
    position: relative;
}

.navigate .far {
    cursor: pointer;
}

.navigate i:hover + .description {
    display: block;
    display: flex;
}

.description {
    width: 70px;
    height: 30px;
    position: absolute;
    top: -30px;
    background-color: #141414;
    font-size: 15px;
    color: white;
    border-radius: 6px;
    letter-spacing: 1px;
    display: none;
    cursor: default;
}

.description:hover {
    display: block;
    display: flex;
}

</style>