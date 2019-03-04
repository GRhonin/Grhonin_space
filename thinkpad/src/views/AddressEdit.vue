<template>
	<div class="address-content">
		<div class="header">
			<i class="el-icon-arrow-left"></i>
			<span>新增收货地址</span>
			<i></i>
		</div>
		<div class="detail">
			<span>收货人：</span>
			<input type="text" v-model="uName" placeholder="请输入收货人姓名">
		</div>
		<div class="detail">
			<span>手机号码：</span>
			<input type="text" v-model="phone" placeholder="请输入手机号码">
		</div>
		<div class="detail">
			<span>固定电话：</span>
			<input type="text" v-model='phone2' placeholder="请输入固定电话">
		</div>
		<div class="detail select-content">
			<span>所在区域：</span>
			<div class="right">
				<select v-model="sProvince" @change="getCity">
					<option disabled value="">省份</option>
					<option v-for="item in province"
					        :key="item.id"
					        v-text="item.name">
					</option>
				</select>
				<select v-model="sCity" @change="getArea">
					<option disabled value="">城市</option>
					<option v-for="item in city" :key="item.id" v-text="item.name"></option>
				</select>
				<select v-model="sArea" @change="getTown">
					<option disabled value="">区/县</option>
					<option v-for="item in area" v-text="item.name" :key="item.id"></option>
				</select>
				<select v-model="sTown">
					<option disabled value="">乡镇</option>
					<option v-for="item in town" v-text="item.name" :key="item.id"></option>
				</select>
			</div>
		</div>
		<div class="detail">
			<span>详细地址：</span>
			<input type="text" v-model="address" placeholder="请输入详细地址">
		</div>
		<div class="save" @click="addAddress">保存</div>
	</div>
</template>

<script type="text/ecmascript-6">
        import axios from 'axios';
	import Cookies from 'js-cookie';
        export default {
                data(){
                        return {
                                uName: '',
                                phone: null,
                                phone2: null,
                                province: [],
                                city: [],
                                area: [],
                                town: [],
                                address: '',
                                sProvince: '',
                                sCity: '',
                                sArea: '',
                                sTown: ''
                        }
                },
                methods: {
                        saveAddress(){
                                console.log(5666);
                        },
                        getCity(){
                                let fid = 0;
                                this.area = [];
                                this.town = [];
                                this.province.forEach(item =>{
                                        if(item.name === this.sProvince) fid = item.id
                                });
                                axios({
                                        url: '/area/getCity',
                                        method: 'post',
                                        data: {fid}
                                })
                                        .then(result => this.city = result.data)
                                        .catch(err => console.log(err.message));
                        },
                        getArea(){
                                let fid = 0;
                                this.town = [];
                                this.city.forEach(item =>{
                                        if(item.name === this.sCity) fid = item.id
                                });
                                axios({
                                        url: '/area/getArea',
                                        method: 'post',
                                        data: {fid}
                                })
                                        .then(result => this.area = result.data)
                                        .catch(err => console.log(err.message));
                        },
                        getTown(){
                                let fid = 0;
                                this.area.forEach(item =>{
                                        if(item.name === this.sArea) fid = item.id
                                });
                                axios({
                                        url: '/area/getTown',
                                        method: 'post',
                                        data: {fid}
                                })
                                        .then(result => this.town = result.data)
                                        .catch(err => console.log(err.message));
                        },
	                addAddress(){
				if(this.uName && this.phone && this.address && this.sTown){
				        axios({
						url: '/address/add',
					        method: 'post',
					        data: {
						        uName: Cookies.get('name'),
						        name: this.uName,
						        phone: this.phone,
						        phone2: this.phone2,
						        province: this.sProvince,
						        city: this.sCity,
						        area: this.sArea,
						        town: this.sTown,
						        address: this.address
					        }
				        })
					        .then()
					        .catch(err => console.log(err.message));
				}else{
				        alert('请填写完整信息！');
				}
	                }
                },
                created(){
                        axios({
                                url: '/area/getProvince',
                                method: 'post'
                        })
                                .then(result => this.province = result.data)
                                .catch(err => console.log(err))
                }
        };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.header
		height: 3rem
		background-color rgb(232, 232, 232)
		display flex
		align-items center
		justify-content space-between
		i
			font-size 1.8rem
		span
			font-size 1.2rem

	.detail
		width: 90%
		margin 0 auto
		padding .8rem 0
		border-bottom solid thin #999999
		display flex
		justify-content space-between
		input
			border none
			width: 80%
			height: 1rem
			outline none
			font-size .85rem
	.select-content
		padding-bottom 0
		.right
			width: 80%
			display flex
			flex-wrap wrap
			justify-content space-between
			select
				width: 30%
				margin-bottom .5rem
	.save
		width: 80%
		height: 2.3rem
		font-size .9rem
		background-color #e2231a
		color white
		line-height 2.3rem
		border-radius .3rem
		margin 3rem auto
		text-align center
</style>