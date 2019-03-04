<template>
	<div class="order-content">
		<OHeader></OHeader>
		<div class="typelist">
			<span @click="showAll">全部</span>
			<span @click='showNotpay' >待付款</span>
			<span @click="showNotdeliver">待发货</span>
			<span @click="showNotreceive">待收货</span>
		</div>
		<div class="order" v-for="item in orderList.show" :key="item.id">
			<div class="title" v-text="`订单编号：${item.id}`"></div>
			<div class="goods">
				<img :src="item.avatar" alt="">
				<span class="name" v-text="item.name"></span>
				<span class="count" v-text="`×${item.count}`"></span>
			</div>
			<div class="info">商品总价：<span v-text="`${item.price}元`"></span></div>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
	import OHeader from '../components/OHeader.vue';
	import axios from 'axios';
	import Cookies from 'js-cookie';
        export default {
                data(){
                        return {
	                        orderList: {
	                                original: [],
	                                show: [],
		                        notPay: [],
		                        notDeliver: [],
		                        notReceive: []
	                        }
                        }
                },
                components: { OHeader },
	        methods: {
			showAll(){
				this.orderList.show = this.orderList.original;
			},
		        showNotpay(){
                                this.orderList.show = this.orderList.notPay;
		        },
		        showNotdeliver(){
                                this.orderList.show = this.orderList.notDeliver;
		        },
		        showNotreceive(){
                                this.orderList.show = this.orderList.notReceive;
		        }
	        },
	        created(){
                        axios({
	                        url: '/user/getorder',
	                        method: 'post',
	                        data: { name: Cookies.get('name')}
                        })
	                        .then(result => {
                                        this.orderList.show = result;
                                        this.orderList.original = result;
                                        for(let i = 0;i<result.length;i++){
                                                switch(true)
                                                {
	                                                case result[i].state ===1:
								this.orderList.notPay.push(result[i]);
	                                                        break;
                                                        case result[i].state ===2:
                                                                this.orderList.notDeliver.push(result[i]);
                                                                break;
                                                        case result[i].state ===3:
                                                                this.orderList.notReceive.push(result[i]);
                                                                break;
	                                                default :
                                                }
                                        }
	                        })
	                        .catch(err => console.log(err.message));
	        }
        };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.order
		background-color rgb(232,232,232)
		.title
			height: 2.2rem
			font-size .8rem
			line-height 2.2rem
			padding-left 1rem
		.goods
			border-top thin solid #dcdcdc
			border-bottom thin solid #dcdcdc
			display flex
			justify-content space-around
			height: 5rem
			align-items center
			img
				width: 3.75rem
				height: 3.75rem
			.name
				width: 60%
		.info
			height: 2.2rem
			font-size .8rem
			line-height 2.2rem
			text-align right
			padding-right 1rem
			border-bottom thin dashed #cccccc
			span
				color red
	.typelist
		height: 2.2rem
		width: 100%
		display flex
		justify-content space-around
		background-color rgb(223,223,223)
		span
			line-height 2.2rem
			font-size .8rem
</style>