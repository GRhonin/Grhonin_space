<template>
	<div class="dialog-content">
		<div class="empty" @click="dialogClose"></div>
		<div class="tabs">
			<div class="nav">
				<div class="title"
				     v-for="item in groups"
				     :key="item"
				     v-text="`A面喷涂￥${ item }`"
				     @click="changeTitle( item )"></div>
			</div>
			<div class="content">
				<div class="list">
					<div class="list-title" v-for="item in titleList" :key="item.id" v-text="item.name"></div>
				</div>
				<div class="paintings">
					<div class="picture" v-for="item in 7" :key="item">
						<img src="../assets/product/b5.jpg" alt="">
						<span>图片名字</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import { createNamespacedHelpers } from 'vuex';
	let { mapState } = createNamespacedHelpers('dialog');
        export default {
                data(){
                        return {
                                titleList: []
                        }
                },
                computed: {
	                ...mapState([ 'list' ]),
                        //从仓库拿到数据，然后找到有几种fid，创建几个导航
                        groups(){
                                let arr = [];
                                this.list.forEach(item => {
                                        if(!arr.find(item2 => item2 === item.price))
                                                arr.push(item.price);
                                });
                                return arr;
                        }
                },
                methods: {
                        dialogClose(){
                                this.$store.commit('dialog/paintingClose');
                        },
                        changeTitle(price){
                                let list = this.$store.state.dialog.list;
                                this.titleList = [];
                                for(let i = 0;i<list.length;i++){
                                        if(list[i].price === price) this.titleList.push(list[i]);
                                }
                        }
                }
        };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.nav
		height: 3rem
		display flex
		align-items center
		border-bottom .1rem solid #999999
		.title
			font-size 1.1rem
			padding 0 .6rem
			line-height 3rem
	.content
		display flex
		color #555555
		.list
			width: 26%
			text-align center
			background-color rgb(247,247,247)
			.list-title
				padding 1.2rem 0
				font-size .95rem
		.paintings
			width: 74%
			display flex
			flex-wrap wrap
			justify-content left
			.picture
				width: 8rem
				height: 8rem
				text-align center
				display flex
				flex-direction column
				padding-top .5rem
				img
					width: 80%
					margin 0 auto
					border thin solid #cccccc
				span
					text-align center
					font-size .8rem
	.dialog-content
		z-index 5000
		position fixed
		width: 100%
		top: 0
		bottom: 0
		.empty
			position fixed
			width: 100%
			top: 0
			bottom: 75%
			background-color rgba(0,0,0,0.3)
		.tabs
			position fixed
			width: 100%
			bottom 0
			top 25%
			background-color white;
</style>