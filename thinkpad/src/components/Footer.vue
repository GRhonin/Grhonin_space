<template>
	<div class="footer">
		<div :class="floorClass" @click="dropShow">
			<a href="#">购买渠道</a>
			<i :class="iconDirection"></i>
			<div class="drop-show" v-show="drop">
				<span>线上</span>
				<a href="#">官方商城</a>
				<a href="#">京东旗舰店</a>
				<a href="#">天猫旗舰店</a>
				<a href="#">招行分期</a>
				<span>线下</span>
				<a href="#">查询体验店</a>
				<a href="#">查询专卖店</a>
				<a href="#">查询经销商</a>
			</div>
		</div>
		<div class="floor"><a href="#">联系我们</a></div>
		<div class="floor"><a href="#">联想官网</a></div>
		<div class="tel">官方客服：4008-989-006</div>
		<div class="other-info-content">
			<a href="#">使用条款</a>
			<a href="#">隐私保护</a>
			<a href="#">产品和性能声明</a>
		</div>
		<div class="info-txt">
			<p>
				联想ThinkPad官方网站，版权所有： 联想（北京）
			</p>
			<p>
				有限公司 京ICP备 11035381号
			</p>
			<p>ThinkPad是联想公司的注册商标</p>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
        export default {
                data(){
                        return {
				drop: false,
	                        floorClass: 'floor',
	                        iconDirection: 'el-icon-caret-bottom'
                        }
                },
                methods:{
			dropShow(){
				this.drop = !this.drop;
				this.floorClass = (this.drop)? "floor1" : "floor";
				this.iconDirection = (this.drop)? "el-icon-caret-left" : "el-icon-caret-bottom";
			}
                }
        };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.footer
		background-color rgb(31,32,36)
		.floor, floor1
			width: 100%
			height: 2.4rem
			border-bottom: thin solid #999999
			line-height 2.4rem
			a
				display inline-block
				color #cccccc
				margin-left:1.7rem
				font-size .8rem
	.floor1
		height 17rem
		border-bottom: thin solid #999999
		background-color rgb(31,32,36)
		color white
		a
			display inline-block
			color rgb(240,80,80)
			margin-left:1.7rem
			font-size .8rem
			line-height 2.2rem
	.el-icon-caret-bottom, .el-icon-caret-left
		color white
		margin-left 16rem
	.drop-show
		width: 95%
		border: 1px #999999 solid
		background-color black
		margin-left 2.5%
		padding-top .2rem
		span
			display block
			color rgb(240,80,80)
			margin-left 1.7rem
		a
			display block
			line-height 1.8rem
			color #ccc
	.tel
		color rgb(240,80,80)
		font-size 1.1rem
		height 3.3rem
		text-align center
		line-height 3.3rem
	.other-info-content
		display flex
		align-items center
		justify-content space-around
		width: 66%
		margin-left: 17%
		a
			color white
			font-size .8rem
	.info-txt
		width: 90%
		margin-left: 5%
		margin-top: 1.4rem
		padding-bottom: 2.2rem
		p
			color #cccccc
			font-size .84rem
			line-height 1.3rem


</style>