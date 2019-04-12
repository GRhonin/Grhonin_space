<template>
<div>
    <p>{{title}}</p>
    <button @click="toEditor">编辑</button>
</div>
    
</template>
<script>
import iview from 'iview';
import Router from 'vue-router';
export default {
    name: 'index',
    data(){
        return{
            title: "我是主页"
        }
    },
    methods: {
        toEditor(){
            this.$router.push({ path: '/editor' });
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>
