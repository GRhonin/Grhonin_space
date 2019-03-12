<template>
	<div class="profile-content">
		<div class="header">
			<div class="top">
				<i class="iconfont aiconshezhi"></i>
				<i class="iconfont aicontixing"></i>
			</div>
			<div class="account">
				<img src="../assets/profile/profile.png" alt="账号头像区">
				<span v-text="account.name"></span>
			</div>
		</div>
		<div class="credit-card">
			<div class="top">
				<div class="title">我的会员卡</div>
				<div class="sign">签到</div>
			</div>
			<span class="credit-type">普卡会员</span>
			<div class="bottom">
				<div class="num" v-text="account.number"></div>
				<div class="enter">进入会员中心 ></div>
			</div>
		</div>
		<div class="my-section">
			<div class="top">
				<div class="lft">
					<div class="logo order"></div>
					<span>所有订单</span>
				</div>
				<div class="rgt" @click="toMyOrder">
					<span class="seemore">查看全部订单</span>
					<i class="el-icon-arrow-right"></i>
				</div>
			</div>
			<div class="bottom">
				<div class="block">
					<img src="../assets/profile/my-pay.png" alt="">
					<span>待付款</span>
				</div>
				<div class="block">
					<img src="../assets/profile/my-send.png" alt="">
					<span>待发货</span>
				</div>
				<div class="block">
					<img src="../assets/profile/my-deliver.png" alt="">
					<span>待收货</span>
				</div>
				<div class="block">
					<img src="../assets/profile/my-evaluate.png" alt="">
					<span>待评价</span>
				</div>
				<div class="block">
					<img src="../assets/profile/my-refund.png" alt="">
					<span>退货/换货</span>
				</div>
			</div>
		</div>
		<div class="my-section">
			<div class="top">
				<div class="lft">
					<div class="logo asset"></div>
					<span>我的资产</span>
				</div>
				<div class="rgt">
					<span class="seemore">查看全部资产</span>
					<i class="el-icon-arrow-right"></i>
				</div>
			</div>
			<div class="bottom">
				<div class="block">
					<img src="../assets/profile/my-ld-new.png" alt="">
					<span>乐豆</span>
				</div>
				<div class="block">
					<img src="../assets/profile/my-score.png" alt="">
					<span>消费积分</span>
				</div>
				<div class="block">
					<img src="../assets/profile/my-yhq-new.png" alt="">
					<span>可用优惠券</span>
				</div>
				<div class="block">
					<img src="../assets/profile/my-lpk-new.png" alt="">
					<span>实物奖品</span>
				</div>
			</div>
		</div>
		<div class="my-section">
			<div class="top">
				<div class="lft">
					<div class="logo helper"></div>
					<span>我的助手</span>
				</div>
				<div class="rgt">
					<span class="seemore">一键查看更多</span>
					<i class="el-icon-arrow-right"></i>
				</div>
			</div>
			<div class="bottom bottom-wrap">
				<div class="block">
					<img src="../assets/profile/my-booking-new.png" alt="">
					<span>我的预约</span>
				</div>
				<div class="block">
					<img src="../assets/profile/my-save-new.png" alt="">
					<span>我的收藏</span>
				</div>
				<div class="block">
					<img src="../assets/profile/update-passwold-new.png" alt="">
					<span>修改密码</span>
				</div>
				<div class="block">
					<img src="../assets/profile/my-teasing-new.png" alt="">
					<span>我要吐槽</span>
				</div>
				<div class="block" @click="toAddress">
					<img src="../assets/profile/my-address-new.png" alt="">
					<span>收货地址</span>
				</div>
				<div class="block">
					<img src="../assets/profile/myzc_p.png" alt="">
					<span>我的众筹</span>
				</div>
				<div class="block">
					<img src="../assets/profile/my-customer-new.png" alt="">
					<span>客服电话</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import Cookies from 'js-cookie';
	import axios from 'axios';
        export default {
                data(){
                        return {
                                account: {
					name: '',
	                                number: ''
                                }
                        }
                },
	        created(){
			let name = Cookies.get('name');
			axios({
				url: '/user/getaccount',
				method: 'post',
				data: { name }
			})
				.then(result => {
				        this.account.name = result.name;
				        this.account.number = result.phone;
				})
				.catch(err => alert(err.message));
	        },
                methods: {
                        toMyOrder(){
                                this.$router.push('/order');
                        },
	                toAddress(){
                                this.$router.push('/address');
	                }
                }
        };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.profile-content
		background-color rgb(232,232,232)
	.header
		background url("/images/profile/my-bg-new.png") no-repeat center center
		background-size cover
		padding 1rem
		height: 10rem
		.top
			display flex
			justify-content space-between
			i
				color white
				font-size 2rem
				opacity 0.7
		.account
			align-self center
			text-align center
			display flex
			flex-direction column
			align-items center
			img
				height: 3.125rem
				width: 3.125rem
			span
				font-size .85rem
				color white
	.credit-card
		color white
		font-size 1rem
		margin -1.5rem 0.8rem 1.2em
		background url("../assets/profile/redCard.png")
		background-size cover
		height: 10.875rem
		padding 1rem
		border-radius 1rem
		.top, .bottom
			display flex
			justify-content space-between
		.top
			margin-bottom 1rem
			.sign
				padding .15rem .3rem
				font-size .8rem
				border-radius .55rem
				border solid thin white
		.bottom
			margin-top: 4rem
		.credit-type
			font-size .8rem
			border thin solid #cccccc
			border-radius 0.55rem
			padding 0.1rem 0.3rem
	.my-section
		margin-top: .5rem
		padding 0 1rem
		background-color white
		font-size .85rem
		.top
			display flex
			height: 3rem
			border-bottom thin solid #cccccc
			justify-content space-between
			align-items center
			.lft
				display flex
				justify-content space-between
				font-size 1rem
				.logo
					height: 1.4rem
					width: 1.4rem
					margin-right: .4rem
				.order
					background url("../assets/profile/my-list-new.png") no-repeat center center
					background-size cover
				.asset
					background url("../assets/profile/my-property-new.png") no-repeat center center
					background-size cover
				.helper
					background url("../assets/profile/my-help-new.png") no-repeat center center
					background-size cover
		.bottom
			display flex
			justify-content: space-around
			align-items center
			padding .5rem 0
			.block
				display flex
				flex-direction column
				align-items center
				img
					width: 2rem
					height: 2rem
		.bottom-wrap
			flex-wrap wrap
			justify-content left
			.block
				width: 25%
				margin-bottom: .4rem


</style>