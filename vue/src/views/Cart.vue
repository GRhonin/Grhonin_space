<template>
	<div class="cart-content">
		<OHeader></OHeader>
		<div class="empty-head"></div>
		<div class="cart-tips">APP首单立减十元</div>
		<div class="pro-content" v-for="item in list" :key="item.id">
			<div class="content">
				<div class="top">
					<div class="lft">
						<div class="choose">
							<img :src="item.check? checkImg : uncheckImg" @click="$store.commit('cart/toggle', item.id)" alt="">
						</div>
						<div class="price" v-text="`￥${item.price * item.count}`"></div>
					</div>
					<div class="edit">
						<Count :num="item.count" @decrease="decrease(item.id)" @increase="increase(item.id)"></Count>
						<i class="el-icon-delete" @click="deleteGoods"></i>
					</div>
				</div>
				<div class="bottom">
					<img :src="item.avatar" alt="">
					<div class="proinfo">
						<span class="name" v-text="item.name"></span>
						<span class="price" v-text="`￥${item.price}`"></span>
					</div>
				</div>
			</div>
		</div>
		<div class="empty-footer"></div>
		<div class="pay-content">
			<div class="selectall">
				<img :src="isAll? checkImg : uncheckImg" @click="$store.commit('cart/toggleAll', !isAll)" alt="" />
			</div>
			<div class="price-content">
				<p class="shifu" v-text="countPrice"></p>
				<p class="count" v-text="countPrice"></p>
				<p class="reduce">节省了0</p>
			</div>
			<div class="topay" @click="this.$store.dispatch('cart/balance');">去结算</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import OHeader from '../components/OHeader.vue';
	import Count from '../components/Count.vue';
	import axios from 'axios';
	import Cookies from 'js-cookie';
	import checkImg from '../assets/check.png';
	import uncheckImg from '../assets/uncheck.png';
        export default {
                components: { OHeader, Count },
	        data(){
                        return {
                                checkImg,
	                        uncheckImg
                        }
	        },
                computed: {
                        list(){ return this.$store.state.cart.list; },
                        isAll(){
                                for(let i=0; i<this.list.length;i++){
                                        if(!this.list[i].check) return false;
                                }
                                return true;
                        },
                        countPrice(){
                                let price = 0;
                                this.list.forEach(item => {
                                        if(item.check){
                                                price += item.price * item.count;
                                        }
                                });
                                return price;
                        }
                },
	        methods: {
                        increase(id){ this.$store.dispatch('cart/increase', id) },
                        decrease(id){ this.$store.dispatch('cart/decrease', id) },
		        deleteGoods(id){ this.$store.dispatch('cart/deleteGoods', id) }
	        },
                created(){
                        this.$store.dispatch('cart/init', Cookies.get('name'));
                }
        };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.empty-head
		height: 2.5rem
	.empty-footer
		height: 3.75rem
	.pay-content
		position fixed
		z-index 1000
		bottom 0
		width: 100%
		display flex
		align-items center
		background-color rgb(46,46,46)
		height: 3.75rem
		.selectall
			width: 10%
			text-align center
			img
				width: 1.5rem
				height: 1.5rem
		.price-content
			color white
			width: 65%
			padding-left .5rem
			.shifu
				font-size 1rem
			.count, .reduce
				font-size .75rem
				color #999999
		.topay
			background-color #e2231a
			color white
			text-align center
			font-size 1rem
			line-height 3.75rem
			width: 25%
	.cart-tips
		height: 2rem
		background-color rgb(209,209,209)
		font-size 1rem
		line-height 2rem
		text-align center
		color #e2231a
	.pro-content
		margin 0 1rem
		display flex
		padding-top 1rem
		.content
			flex-grow 1
			.top
				height: 2.4rem
				display flex
				justify-content space-between
				align-items center
				.lft
					display flex
					justify-content space-between
					.choose
						font-size 1.3rem
						color red
						margin-right .3rem
						img
							width: 1.5rem
				.edit
					display flex
					width 9rem
					justify-content space-around
					i
						font-size 1.8rem
					.jisuan
						width 5.625rem
						display flex
						justify-content space-around
						font-size 1.2rem
						border thin solid #cccccc
						text-align center
						line-height 1.6rem
						.count
							border-right solid thin #cccccc
							border-left solid thin #cccccc
							padding 0 .6rem
					.el-icon-delete
						color #999999
			.bottom
				border-bottom thin solid #999999
				display flex
				margin-left 2rem
				img
					width: 5.625rem
					height: 5.625rem
				.proinfo
					display flex
					justify-content space-around
					flex-direction column
					.price
						color #e2231a
						margin-top -2rem
						font-size 1rem
					.name
						width 13rem
						white-space nowrap
						overflow hidden
						text-overflow ellipsis
						font-size 1.15rem
</style>