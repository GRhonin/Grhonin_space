<template>
	<div class="office">
		<div class="header">
			<i class="lft iconfont aiconfanhui"></i>
			<div class="center">ThinkPad电脑</div>
			<i class="rgt iconfont aicongengduo" @click="dropShow"></i>
		</div>
		<transition name="fade">
			<div class="drop" v-show="drop">
				<div class="home">
					<i class="iconfont aiconshouye"></i><router-link to="/">首页</router-link>
				</div>
				<div class="search">
					<i class="iconfont aiconsousuo"></i><span>搜索</span>
				</div>
				<div class="profile" @click="toProfile">
					<i class="iconfont aicongerenzhongxinxianxing"></i><span>个人中心</span>
				</div>
			</div>
		</transition>
		<div class="empty"></div>
	</div>
</template>

<script type="text/ecmascript-6">
	import Cookies from 'js-cookie';
        export default {
                data(){
                        return {
                                drop: false
                        }
                },
	        methods: {
                        dropShow(){
                                this.drop = !this.drop;
                        },
		        toProfile(){
                                if(Cookies.get('name')){
                                        this.$router.push({ path: '/profile' });
                                }else{
                                        Cookies.set('url', this.$router.path);
                                        this.$router.replace({ path: '/login' });
                                }
		        }
	        }
        };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.office
		box-shadow 0 .2rem .1rem white
	.header
		position fixed
		height: 2.5rem
		width: 100%
		display flex
		background-color rgb(232,232,232)
		justify-content space-between
		align-items center
		padding 0 1rem
		.center
			font-size 1.2rem
		.rgt, .lft
			font-size 1.5rem
	.drop
		position fixed
		height 2.5rem
		width: 100%
		top 2.5rem
		background-color rgba(255,255,255,0.5)
		overflow hidden
		display flex
		justify-content center
		align-items center
		font-size .9rem
		div
			letter-spacing .1rem
		.search
			margin 0 2rem
	.empty
		height: 2.5rem
	.fade-enter-active, .fade-leave-to
		transition 0.5s
	.fade-enter, .fade2-enter, .fade-leave-to
		height: 0
	.fade-enter-to
		height 2.5rem
</style>