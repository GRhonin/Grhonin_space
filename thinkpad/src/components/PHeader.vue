<template>
	<div class="header-content">
		<div class="header">
			<div class="back">
				<i class="iconfont aiconfanhui"></i>
			</div>
			<div class="center">
				<a href="#">商品</a>
				<a href="#">详情</a>
				<a href="#">配置</a>
				<a href="#">评价</a>
			</div>
			<div class="more" @click="showAlert">
				<i class="iconfont aicongengduo"></i>
			</div>
		</div>
		<transition name="fade">
			<div class="alert" v-show="alertShow">
				<a href="/">首页</a>
				<a href="#">搜索</a>
				<a href="#">我的收藏</a>
			</div>
		</transition>
	</div>

</template>

<script type="text/ecmascript-6">
        export default {
                data(){
                        return {
                                alertShow: false
                        }
                },
                methods:{
                        showAlert(){
				this.alertShow = !this.alertShow;
                        }
                }
        };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.alert
		position fixed
		top 2rem
		right 1.4rem
		display flex
		flex-direction column
		align-items left
		background-color rgba(0,0,0,0.07)
		width: 5rem
		overflow hidden
		padding-left .5rem
		a
			padding .3rem 0
			font-size .9rem
		:nth-child(2)
			border-bottom solid thin #cccccc
			border-top solid thin #cccccc
	.header-content
		position fixed
		top 0
		width: 100%
		z-index 1000
	.header
		display flex
		justify-content space-between
		align-items center
		height: 2.5rem
		font-size 1rem
		padding 0 1rem
		background-color rgb(255,255,255)
		div
			i
				font-size 1.2rem
				font-weight 600
	.center
		width: 11rem
		display flex
		justify-content space-around
	.fade-enter-active, .fade-leave-to
		transition 0.2s
	.fade-enter, .fade-leave-to
		width: 0
		height: 0
	.fade-enter-to
		width: 5rem
		height: 5.2rem
</style>