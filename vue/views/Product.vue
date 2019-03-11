<template>
	<div class="product-content">
		<transition name="fade">
			<div class="dialog" v-show="dialogShow">
				<Painting></Painting>
			</div>
		</transition>
		<PHeader></PHeader>
		<swiper  :options="swiperOption">
			<swiper-slide v-for="item in banner" :key="item.id">
				<img :src="item.avatar" alt="暂无相关图片">
			</swiper-slide>
		</swiper>
		<div class="floor1">
			<div class="lft">
				<div class="top">
					<span>秒杀价￥</span>
					<span class="price" v-text="goods.price"></span>
				</div>
				<div class="bottom">
					<div class="lft"><i class="el-icon-time"></i></div>
					<div class="rgt">商城秒杀</div>
				</div>
			</div>
			<div class="rgt">
				<span>距结束还剩</span>
				<div class="bottom">
					<span v-text="times.$hours"></span>
					<span class="symbol">:</span>
					<span v-text="times.$minutes"></span>
					<span class="symbol">:</span>
					<span v-text="times.$seconds"></span>
				</div>
			</div>
		</div>
		<div class="title-content">
			<h2 v-text="`${goods.name}${goods.model}`"></h2>
			<span v-text="goods.spec"></span>
		</div>
		<div class="break"></div>
		<div class="info-wrap">
			<div class="lft">活动</div>
			<div class="center"><span>先抽奖再购物直接抵扣。Think官网抽奖最高立减3000元，100%中奖，商城购物直接抵扣货款。</span></div>
			<div class="rgt"><i class="el-icon-arrow-right"></i></div>
		</div>
		<div class="info-wrap">
			<div class="lft">促销</div>
			<div class="center"><span class="radius">首单立减</span>首单立减10元</div>
			<div class="rgt"><i class="el-icon-arrow-right"></i></div>
		</div>
		<div class="info-wrap">
			<div class="lft">赠品</div>
			<div class="center">ThinkPad背包</div>
			<div class="rgt"><i class="el-icon-arrow-right"></i></div>
		</div>
		<div class="info-wrap">
			<div class="lft">私定</div>
			<div class="center btn">选择A面喷图</div>
			<div class="rgt"></div>
		</div>
		<div class="info-wrap">
			<div class="lft">分期</div>
			<div class="center">[花呗分期]享3期免息</div>
			<div class="rgt"><i class="el-icon-arrow-right"></i></div>
		</div>
		<div class="info-wrap">
			<div class="lft">已选</div>
			<div class="center"><span>未选官方服务</span>i5-8250U/Windows 10 家庭版/8GB/500GB+128GB SSD/独显</div>
			<div class="rgt"><i class="el-icon-arrow-right"></i></div>
		</div>
		<div class="info-wrap">
			<div class="lft">购买数量</div>
			<div class="rgt jisuan">
				<div class="release" @click="reduce">-</div>
				<div class="account" v-text="count"></div>
				<div class="reduce" @click="release">+</div>
			</div>
		</div>
		<div class="info-wrap">
			<div class="lft">配送</div>
			<div class="center"><span>有货</span>, 此商品在16点前完成支付当天发货；则第二天内完成发货；如有喷绘/刻字定制，发货时效增加2个工作日；(每月最后一天不发货）</div>
			<div class="rgt"><i class="el-icon-arrow-right"></i></div>
		</div>
		<div class="info-details"><img src="../assets/product/img1.jpg" alt=""></div>
		<div class="info-details"><img src="../assets/product/img2.jpg" alt=""></div>
		<div class="info-details"><img src="../assets/product/img3.jpg" alt=""></div>
		<div class="table">
			<table cellspacing="0">
				<tr>
					<td colspan="2" class="td-weight">商品编码</td>
				</tr>
				<tr>
					<td>商品编码</td>
					<td id="module">20L5001SCD</td>
				</tr>
				<tr>
					<td colspan="2" class="td-weight">处理器</td>
				</tr>
				<tr>
					<td>CPU</td>
					<td>第八代Kabylake智能英特尔® 酷睿™ i5 处理器</td>
				</tr>
				<tr>
					<td>CPU型号</td>
					<td>i5-8250U</td>
				</tr>
				<tr>
					<td>CPU主频</td>
					<td>1.6GHz</td>
				</tr>
				<tr>
					<td>最高睿频</td>
					<td>3.5GHz</td>
				</tr>
				<tr>
					<td>三级缓存</td>
					<td>6MB</td>
				</tr>
				<tr>
					<td colspan="2" class="td-weight">操作系统</td>
				</tr>
				<tr>
					<td>操作系统</td>
					<td> Windows 10 家庭版 (联想推荐使用Windows 10 专业版)</td>
				</tr>
				<tr>
					<td colspan="2" class="td-weight">屏幕</td>
				</tr>
				<tr>
					<td>屏幕尺寸</td>
					<td>12.5英寸</td>
				</tr>
				<tr>
					<td>物理分辨率</td>
					<td>1366×768</td>
				</tr>
				<tr>
					<td>显示比例</td>
					<td>16:9</td>
				</tr>
			</table>
		</div>
		<div class="foot-nav">
			<div class="server">
				<img src="../assets/product/server.png" alt="">
				<span>客服</span>
			</div>
			<div class="collect">
				<img src="../assets/product/star_white.png" alt="">
				<span>收藏</span>
			</div>
			<div class="cart" @click="toCartpage">
				<img src="../assets/product/cart.png" alt="">
				<span>购物车</span>
			</div>
			<div class="buy" @click="toCart">加入购物车</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import PHeader from '../components/PHeader.vue';
	import Painting from '../components/Painting.vue';
	import axios from 'axios';
	import Cookies from 'js-cookie';
        export default {
                components: { PHeader, Painting },
                data(){
                        return {
                                goods: [],
	                        banner: [],
                                swiperOption: {
                                        loop: false
                                },
	                        times: {
                                        timer: '',
                                        $hours: 0,
		                        $minutes: 0,
                                        $seconds: 0
	                        },
	                        count: 1
                        }
                },
	        computed: {
                        bannerList(){
                                return this.$store.state.product.list;
                        },
		        dialogShow(){
                                return this.$store.state.dialog.paintingShow;
		        }
	        },
	        methods: {
                        getTime(){
                                let mydate = new Date();
                                //create a timeObj as overtime, today`s 24th
                                let overtime = new Date();
                                overtime.setHours(23);
                                overtime.setMinutes(59);
                                overtime.setSeconds(59);
                                //get time difference
                                let times = mydate.getTime();
                                let times1 = overtime.getTime();
                                let Dtime = parseInt((times1 - times)/1000);
                                //get hours/minutes/seconds
                                let minute =  (Dtime - (Dtime%60))/60;
                                let $second = Dtime - minute * 60;  //get seconds
                                let $hour = (minute - (minute%60))/60; //get hours
                                let $minute = minute - $hour * 60; //get minutes
                                this.times.$hours =  $hour<10 ? "0"+$hour : $hour;
                                this.times.$minutes =  $minute<10 ? "0"+$minute : $minute;
                                this.times.$seconds =  $second<10 ? "0"+$second : $second;
                        },
		        release(){
                                this.count = this.count>4 ? 5 : this.count + 1
		        },
		        reduce(){
		                this.count = this.count<2 ? 1 : this.count - 1
		        },
                        paintingShow(){    //同时发送ajax获取弹出框的数据
		                this.$store.commit('dialog/paintingShow');
                                this.$store.dispatch('dialog/init');
                        },
		        toCart(){
                                if(Cookies.get('name')){
                                        axios({
	                                        url: '/product/entercart',
	                                        method: 'post',
	                                        data: {
	                                                pid: parseInt(this.goods.id),
		                                        name: Cookies.get('name'),
		                                        price: this.goods.price,
		                                        count: this.count,
		                                        addTime: new Date().toLocaleString()
	                                        }
                                        })
	                                        .then(result => {
                                                        this.$router.push({ path: '/cart' });
	                                        })
	                                        .catch(err => console.log(err.message));
                                }else{
                                        Cookies.set('url', this.$route.path);
                                        this.$router.replace({ path: '/login' });
                                }
		        },
		        toCartpage(){
		                if(Cookies.get('name')) this.$router.push('/cart');
		                else {
		                        Cookies.set('url', '/cart');
		                        this.$router.replace('/login');
		                }
		        }
	        },
	        created(){
                        console.log(this.$route.params.cid);
                        axios({
				url: '/product/' + this.$route.params.cid,
	                        method: 'post',
	                        data: { cid: this.$route.params.cid }
                        })
	                        .then(result => this.goods = result.data)
	                        .catch(err => console.log(err.message));
                        axios({
                                url: '/product/getbanner',
                                method: 'post',
                                data: { cid: this.$route.params.cid }
                        })
                                .then(result => this.banner = result.data)
                                .catch(err => console.log(err.message));
	        },
		mounted(){
                        this.timer = setInterval(this.getTime, 50);
		},
                beforeDestroy() {
                        clearInterval(this.getTime);
                }
        };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.product-content
		width: 100%
		overflow hidden
	.info-details
		width: 100%
		img
			width: 100%
	.swiper-container
		width: 100%
		.swiper-wrapper
			width: 100%
			.swiper-slide
				width: 100%
				img
					width: 100%
	.break
		height: .5rem
		background-color rgb(247,247,247)
	.title-content
		padding .4rem .8rem
		h2
			font-size 1rem
			padding-bottom .4rem
	.swiper-container
		width: 100%
	.empty
		height: 10rem
	.floor1
		display flex
		.lft
			width: 65%
			background-color rgb(245,49,114)
			color white
			padding-left 2rem
			padding-bottom .4rem
			.top
				.price
					font-size 1.5rem
					font-weight 600
			.bottom
				display flex
				flex-direction row
				align-items center
				width: 40%
				height: 1.2rem
				border-radius 0.6rem
				border thin solid white
				overflow hidden
				.rgt
					width: calc(75% - 1px)
					background-color rgb(245,49,114)
					text-align center
					line-height 1.2rem
				.lft
					width calc(25% - 1px)
					background-color white
					text-align left
					height: 100%
					i
						position relative
						left -1.5rem
						z-index 1000
						color red
						line-height 1rem
						font-weight 400
		.rgt
			width: 35%
			display flex
			flex-direction column
			align-items center
			justify-content center
			color white
			background-color rgb(246,208,212)
			span
				color red
			.bottom
				display flex
				align-items center
				justify-content space-around
				span
					background-color rgb(245,49,114)
					color white
					padding 0.1rem
					font-weight 600
				.symbol
					color rgb(245,49,114)
					font-weight 800
					background-color rgb(246,208,212)
	.info-wrap
		display flex
		align-items center
		justify-content space-between
		padding 1rem 1.5rem
		border-bottom thin solid #eeeeee
		font-size .9rem
 		.center
			width 70%
			white-space nowrap
			overflow hidden
			text-overflow ellipsis
			span
				color #F4364C
			.radius
				display inline-block
				font-size .8rem
				border-radius .7rem
				border solid 1px #F4364C
		.jisuan
			display flex
			width: 6.2rem
			justify-content space-around
			align-items center
			font-size 1rem
			div
				padding .6rem
				background-color rgb(245,245,245)
			.release, .reduce
				padding .6rem .8rem
	.table
		background-color: white;
		table
			border-collapse: collapse;
			tr
				td
					padding-left: .6rem;
					height: 4rem;
					border: 1px solid #e4e4e4;
				.td-weight
					font-weight bold
	.foot-nav
		background-color white
		display flex
		position fixed
		bottom 0
		width: 100%
		height: 3.125rem
		z-index 1000
		font-size .9rem
		div
			flex-grow 1
			text-align center
			display flex
			flex-direction column
			align-items center
			justify-content center
			img
				width: 30%
		.buy
			flex-grow 30
			color white
			background-color rgb(244,54,76)
			padding 1.1rem
	.dialog
		position fixed
		width 100%
		top: 0
		bottom: 0
		z-index 50000
		overflow hidden
</style>