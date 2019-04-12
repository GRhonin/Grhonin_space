<template>
<div>
    <p>{{title}}</p>
    <button @click="toEditor">编辑</button>
</div>
    
</template>
<script>
import iview from 'iview';
export default {
    name: 'index',
    data(){
        return{
            title: "我是主页"
        }
    },
    methods: {
        toEditor(){
            console.log('去编辑器');
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>
