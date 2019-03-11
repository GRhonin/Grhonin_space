<template>
	<div class="login-content">
		<OHeader></OHeader>
		<img class="logo-img" src="../assets/common/logo.png" alt="">
		<div class="form">
			<input type="text" :placeholder="placeHolder" v-model="login.uName">
			<input type="password" v-show="type" placeholder="请输入密码" v-model="login.pwd">
			<div class="identify" v-show="!type">
				<input type="text" placeholder="请输入验证码" v-model="login.pwd">
				<div>获取验证码</div>
			</div>
			<div class="login-btn" @click="signIn">登录</div>
			<div class="register-btn" v-show="type">还没有账号？立即注册</div>
			<div class="logintips">
				<span v-text="loginType" @click="changeType"></span>
				<span>忘记密码？</span>
			</div>
		</div>
		<div class="other-type">
			<div class="cooperation">
				<span></span>
				<p>您还可以用以下方式登录</p>
				<span></span>
			</div>
			<div class="cooperation-items">
				<img src="../assets/common/qq1.png" alt="">
				<img src="../assets/common/wb.png" alt="">
				<img src="../assets/common/zfb.png" alt="">
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import OHeader from '../components/OHeader.vue';
	import Cookies from 'js-cookie';
	import axios from 'axios';
        export default {
                components: { OHeader },
	        data(){
                        return {
                                login: {
                                        uName: '',
	                                pwd: ''
                                },
                                type: true,       //规定true为密码登录，false为手机验证码登录
	                        value: 0
                        }
	        },
	        computed: {
	                loginType(){
	                        this.login.uName = '';
	                        this.login.pwd = '';
	                        return this.type ? '手机验证码快捷登录 >' : '账号密码登录 >';
	                },
		        placeHolder(){
	                        return this.type ? '请输入账户名称' : '请输入手机号';
		        }
	        },
	        methods: {
			changeType(){
			        this.type = !this.type;
			},
		        signIn(){
			        if( this.login.uName && this.login.pwd){
				//发送ajax验证登录信息,
				        if(this.type){  //如果密码登录，
                                                axios({
                                                        method: 'post',
                                                        url: '/user/pwdLogin',
                                                        data: { uName: this.login.uName, pwd: this.login.pwd }
                                                })
                                                        .then(result => {
                                                                if(!result.result){
                                                                        Cookies.set('name', this.login.uName);
                                                                        this.$router.replace(Cookies.get('url'));
                                                                } else alert(result[0]);
                                                        })
                                                        .catch(err => alert(err.message));
				        }else{  //如果验证码登录
                                                axios({
                                                        method: 'post',
                                                        url: '/user/codeLogin',
                                                        data: { phone: this.login.uName, code: this.login.pwd }
                                                })
                                                        .then(result => {
                                                                if(!result.result){
                                                                        Cookies.set('name', this.login.uName);
                                                                        this.$router.replace(Cookies.get('url'));
                                                                }
                                                        })
                                                        .catch(err => alert(err.message));
				        }
			        }else{
			                alert('请正确填写用户名和密码！');
			        };
		        }
	        }
        };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.form
		display flex
		flex-direction column
		width: 80%
		margin: 0 auto
		.identify
			display flex
			justify-content space-between
			align-items center
			div
				margin-left: -7rem
				height: 1.8rem
				width: 5rem
				border: 1px #cccccc solid
				font-size .9rem
				line-height 1.8rem
				border-radius .2rem
		.login-btn, .register-btn
			height: 2.4rem
			background-color rgb(226,35,25)
			color white
			border-radius .3rem
			text-align center
			margin-top .5rem
			line-height 2.4rem
			font-size 1rem
		.register-btn
			background-color white
			border thin solid black
			color: black
			margin-top: .8rem
		input
			height: 3rem
			line-height 2.4rem
			outline none
			border none
			font-size .9rem
			border-bottom thin solid #cccccc
			width: 100%
		.logintips
			margin-top: .8rem
			display flex
			justify-content space-between
	.login-content
		text-align center
		.logo-img
			width: 9.53rem
			margin-top: 3rem
			margin-bottom 4.5rem
	.other-type
		margin 0 auto
		margin-top 3rem
		width: 86%
		display flex
		align-items center
		flex-direction column
		.cooperation
			display flex
			justify-content space-around
			width: 100%
			span
				height: 1px
				background-color #d6d6d6
				width: 25%
				margin-top: .35rem
		.cooperation-items
			display flex
			justify-content space-around
			width: 50%
			margin-top 1.2rem
			img
				width: 2rem
				height: 2rem
</style>