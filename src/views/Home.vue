<template>
  <div class="home middle">
    <div class="content-container">
      <h1 class="title"><i class="fas fa-clipboard-list"></i> Yapıcalak Görev Ekle</h1>
      <div class="input-container jc-center">
        <input type="text" v-model="task" placeholder="Eklemek İstediğiniz Görev..." />
        <button @click="addTodo" class="middle">Ekle</button>
      </div>
      <div class="message">
        <p>{{ messageText }} <i class="fas fa-check-double" v-if="messageText!=''"></i></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  data(){
    return {
      task:'',
      messageText:''
    }
  },
  methods:{
    ...mapActions([
      'addTodoTask'
    ]),
    addTodo(){
      this.giveMessage("Görev Eklendi!");
      this.addTodoTask(this.task);
      this.task="";
    },
    giveMessage(text,ms=1500){
      this.messageText=text;
      setTimeout(() => {
        this.messageText="";
      }, ms);
    }
  }
}
</script>

<style scoped>

.home {
  width: 100%;
  height: calc(100vh - 75px - 45px);
}

.content-container {
  width: 900px;
  padding: 25px;
  border-radius: 10px;
  background-color: #3cc73c;
  text-align: center;
  font-family: 'Mulish' , sans-serif;
  box-shadow: 5px 5px 10px 1px rgba(0,0,0,.2);
  color: white;
}

.title {
  margin-bottom: 15px;
}

.input-container {
  width: 100%;
  padding-block: 10px;
  margin-bottom: 25px;
}

.input-container input {
  font-size: 25px;
  margin-right: 10px;
  padding: 5px;
  width: 350px;
  border-radius: 3px;
  border: 2px solid rgb(218, 218, 218);
  font-family: 'Poppins' , sans-serif;
}

.input-container input::placeholder {
  color: rgb(172, 172, 172);
}

.input-container button {
  width: 100px;
  height: 55px;
  border-radius: 3px;
  background-color: #7699e3;
  color: white;
  cursor: pointer;
  font-family: 'Poppins' , sans-serif;
  font-size: 20px;
  transition: all .2s ease;
}

.input-container button:hover {
  background-color: #6b8bcf;
}

.message {
  width: 100%;
  height: 40px;
  text-align: center;
  font-family: 'Poppins' , sans-serif;
  font-size: 20px;

}

</style>