<template>
    <header class="middle">
        <div class="container ai-center jc-between">
            <div class="left">
                <router-link to="/">
                    <img src="https://legacy.todo-cloud.com/images/todo-cloud-landing-page-logo@2x.png" alt="logo">
                </router-link>
            </div>
            <div class="right">
                <ul class="flex">
                    <li>
                        <router-link to="/">
                            Görev Ekle
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/yapilacak">
                           Yapılacaklar
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/yapildi">
                            Yapıldı
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name:'Header',
    data(){
        return {
            
        }
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

<style scoped>

header {
    width: 100%;
    height: 75px;
    background-color: #259225;
    position: fixed;
    top: 0px;
    left: 0px;
}

.container {
    width: 900px;
    height: 100%;

}

.left img {
    width: 175px;
    transition: all .3s ease;
}

.left img:hover {
    transform: scale(1.1);
}

.right ul li {
    margin-inline: 10px;
    transition: all .3s ease;
}

.right ul li a {
    color: white;
    font-family: 'Mulish' , sans-serif;
    font-size: 20px;
}

.right ul li:hover , .right ul li:hover a{
    transform: scale(1.2);
    color: black;
}

</style>