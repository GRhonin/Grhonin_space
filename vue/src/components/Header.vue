<template>
	<div :class="headClass">
		<div class="nav">
			<div class="left" @click="navShow1"></div>
			<div class="center" @click="clearCookie"></div>
			<div class="right" @click="searchShow = !searchShow"></div>
		</div>
		<transition name="fade2">
			<div class="search" v-show="searchShow">
				<i class="el-icon-search"></i>
				<input v-model="inputTxt" type="text" class="searchinput">
				<i class="el-icon-error" @click = 'clearInput'></i>
			</div>
		</transition>
		<transition name="fade">
			<div class="dialog" v-show="navShow">
				<ul>
					<li><a href="#">首页</a></li>
					<li><a href="#">产品中心</a></li>
					<li><a href="#">thinkplus</a></li>
					<li><router-link to="/official">官方商城</router-link></li>
					<li><a href="#">关于ThinkPad</a></li>
					<li><a href="#">社区</a></li>
					<li><a @click="toLogin" v-text="userName"></a></li>
				</ul>
			</div>
		</transition>
		<div class="backtop"></div>
	</div>
</template>

<script type="text/ecmascript-6">
	import Cookies from 'js-cookie';
        export default {
                data() {
                        return {
                                headClass: 'headerShort',
                                navShow: false,
	                        searchShow: false,
	                        inputTxt: '',
	                        userName: ''
                        }
                },
	        created(){
                        this.userName = Cookies.get('name') || "登录/注册";
	        },
	        methods: {
                        clearInput(){ this.inputTxt = ''; },
		        navShow1(){
                                this.navShow = !this.navShow;
				if(this.navShow) this.headClass = 'header'
				else if(!this.navShow) this.headClass = 'headerShort'
		        },
		        toLogin(){
		                if(!Cookies.get('name')){
		                        this.$router.replace('/login');
		                }else{
		                        console.log(999);
		                        this.$router.push('/profile');
		                }
		        },
		        clearCookie(){
		                Cookies.remove('name');
		        }
	        }
        };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.headerShort
		position fixed
		top 0
		width 100%
		z-index 1000
		height: 3rem
	.header
		position fixed
		top 0
		width: 100%
		z-index 1000
		height: 100%
	.nav
		background-color black
		color white
		height: 3rem
		display flex
		justify-content space-between
		align-items center
		.left
			height: 1.2rem
			width: 1rem
			background url("../assets/common/sprite.png") no-repeat 3.8% 0
			margin-left 1.3rem
		.center
			height: 1.3rem
			width: 4.1rem
			background url("../assets/common/logo2.png") no-repeat center center
			background-size cover
		.right
			height: 1.2rem
			width: 1rem
			background url("../assets/common/sprite.png") no-repeat 0 0
			margin-right: 1.3rem
	.search
		background-color rgb(39,39,39)
		height: 3.5rem
		overflow hidden
		display flex
		justify-content space-around
		align-items center
		i
			font-size 1.4rem
			color #999
		.el-icon-search
			margin-right: -5rem
			z-index 20
		.el-icon-error
			margin-left: -5rem
			z-index 20
		.searchinput
			width: 92%
			background-color rgb(39,39,39)
			border thin solid #999999
			height: 2.2rem
			line-height 1.8rem
			font-size 1.2rem
			outline none
			color white
			padding 0 2rem
	.dialog
		height: 100%
		width 100%
		background url("../assets/common/navMain_bg.jpg") no-repeat center center
		background-size cover
		overflow hidden
		ul
			display flex
			flex-direction column
			align-items center
			li
				border-bottom: 1px solid #666666
				width: 90%
				text-align center
				padding .65rem 0
				a
					color white
					font-size 1rem
					letter-spacing .06rem
			:last-child
				border-bottom none
			:first-child
				margin-top .2rem
	.fade-enter-active, .fade-leave-to, .fade2-enter-active
		transition 0.5s
	.fade-enter, .fade2-enter, .fade-leave-to, .fade2-leave-to
		height: 0
	.fade-enter-to
		height 100%
	.fade2-enter-to
		height 3.5rem
	.fade2-leave-to
		transition 0.1s
	.backtop
		width: 40px
		height: 40px
		border-radius 20px
		position fixed
		bottom 80px
		right 25px
		background-color black
		background url("../assets/common/sprite.png") no-repeat -250px 0
</style>