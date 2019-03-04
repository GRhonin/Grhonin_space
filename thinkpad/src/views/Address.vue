<template>
	<div class="address-manager">
		<OHeader></OHeader>
		<div class="detail" v-for="item in list">
			<div class="user">
				<span v-text="item.name"></span>
				<span v-text="item.phone" class="empty-left"></span>
			</div>
			<div class="address">
				<span v-text="item.province"></span>
				<span v-text="item.city" class="empty-left"></span>
				<span v-text="item.town" class="empty-left"></span>
				<span v-text="item.county" class="empty-left"></span>
				<span v-text="item.address" class="empty-left"></span>
			</div>
			<div class="edit">
				<div class="lft">
					<i class="el-icon-success"></i>
					<span>默认地址</span>
				</div>
				<div class="rgt">
					<div class="change" @click="AddressChange">
						<i class="el-icon-edit"></i>
						<span>编辑</span>
					</div>
					<div class="del">
						<i class="el-icon-delete"></i>
						<span>删除</span>
					</div>
				</div>
			</div>
		</div>
		<div class="addAddress" @click="addAddress">+新增收货地址</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import Cookies from 'js-cookie';
	import axios from 'axios';
	import OHeader from '../components/OHeader.vue';
        export default {
                components: { OHeader },
		data(){
		        return {
		                list: []
		        }
		},
	        methods: {
			addAddress(){
			        this.$router.push('/addressedit');
			}
	        },
	        created(){
		        axios({
			        url: '/address/getaddress',
			        method: 'post',
			        data: { name: Cookies.get('name') }
		        })
			        .then(result => this.list = result)
			        .catch(err => console.log(err.message));
	        }
        };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.addAddress
		width: 80%
		height: 2.3rem
		font-size .9rem
		background-color #e2231a
		color white
		line-height 2.3rem
		border-radius .3rem
		margin 3rem auto
		text-align center
	.empty-left
		padding-left .5rem
	.detail
		font-size .75rem
		color #797979
		border-bottom thin solid #979797
		padding 0 1rem
		.user
			font-size .875rem
			color #000000
			height: 2rem
			line-height 2rem
			margin-top: .4rem
			padding-bottom .2rem
			.empty-left
				padding-left 1rem
		.address
			padding .2rem 0
			line-height 1.4rem
			margin-top -0.5rem
			border-bottom thin solid #979797
		.edit
			height: 2rem
			display flex
			align-items center
			justify-content space-between
			.rgt
				display flex
				width: 6rem
				justify-content space-between
</style>