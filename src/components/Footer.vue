<template>
    <footer class="middle">
        <h2>Made with ❤️ by <span @click="openExternalLink">HeaveN</span></h2>
    </footer>
</template>

<script>
export default {
    name:'Footer',
    methods:{
        openExternalLink(){
            window.open('https://yavuzselim.netlify.app/','_blank')
        }
    }
}
</script>

<style scoped>

footer {
    width: 100%;
    height: 45px;
    background-color: #218521;
    color: white;
    font-family: 'Mulish' , sans-serif;
}

h2 span {
    padding-inline: 3px;
    cursor: pointer;
}

h2 span:hover {
    background-color: black;
    color: white;
}

</style>