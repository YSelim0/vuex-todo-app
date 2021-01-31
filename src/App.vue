<template>
  <div>
    <Header />
    <div class="main-content-container">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name:'app',
  data(){
    return {
      
    }
  },
  components:{
    Header,
    Footer,
  },
  created(){

  },
  mounted(){

  },
  computed:{

  },
  methods:{

  }
}
</script>

<style>

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  text-decoration: none;
  outline: none;
  list-style-type: none;
  border: none;
}

.flex {
  display: flex;
}

.ai-center {
  display: flex;
  align-items: center;
}

.jc-center {
  display: flex;
  justify-content: center;
}

.jc-between {
  display: flex;
  justify-content: space-between;
}

.middle {
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-content-container {
  width: 100%;
  margin-top: 75px;
}

</style>