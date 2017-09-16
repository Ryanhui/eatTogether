<template>
	<div class="registered">
		<div class="returnBack">
			<backarrow message="/logandreg"></backarrow>
		</div>
		<div class="content">
			<div class="inputdiv">
				<input v-model="name" placeholder="昵称，2-8个中文字符">
			</div>
			<span>{{ checkname }}</span>
			<div class="inputdiv">
				<input v-model="email" placeholder="邮箱，作为登录账号">
			</div>
			<span>{{ checkemail }}</span>
			<div class="inputdiv">
				<input v-model="password" type="password" placeholder="密码，6-20位字母数字组合">
			</div>
			<span>{{ checkpassword }}</span>
			<div class="inputdiv">
				<input v-model="repeat" type="password" placeholder="再次输入密码">
			</div>
			<span>{{ checkrepeat }}</span>
			<div class="captchaContainer">
				<div class="captchaInput">
					<input v-model="captcha" type="text" placeholder="请输入验证码">
				</div>
				<div class="captchaImg">
					<img src="http://123.207.87.143:8124/" alt="刷新显大图">
				</div>
			</div>
			<span>{{ checkcaptcha }}</span>
			<div>
				<input v-on:click="check" class="button confirm" type="submit" value="注册">
			</div>
		</div>
	</div>
</template>

<script>
	import backarrow from '@/components/backArrow'

	export default {
		components:{
			backarrow
		},
		data:function(){
			return{
				name: 			'',
				email: 			'',
				password: 		'',
				repeat: 		'',
				checkname: 		'',
				checkemail: 	'',
				checkpassword: 	'',
				checkrepeat: 	'',

				captcha: 		'',
				checkcaptcha: 	''
			}
		},
		methods: {
			check:function(){
				//验证email是否合法
				let flag = true;
				this.email = this.email.replace(/^\s+|\s+$/g,"").toLowerCase();
				let regexp = /^[a-z0-9](\w|\.|-)*@([a-z0-9]+-?[a-z0-9]+\.){1,3}[a-z]{2,4}$/i;
				if(this.email.match(regexp)==null){
					this.checkemail = "请输入有效的邮箱";
					flag = false;
				}else{
					this.checkemail = "";
				}
				//验证name是否合法
				if(this.name.length >= 2 && this.name.length <= 8 && this.name.match(/[\u4e00-\u9fa5]{2,8}/g) != null){
					this.checkname = "";
				}else{
					this.checkname = "请输入有效的昵称";
					flag = false;
				}
				//验证密码是否合法
				let reg = new RegExp(/^[A-Za-z0-9]{6,20}$/);
				if(reg.test(this.password) == true){
					this.checkpassword = "";
				}else{
					this.checkpassword = "请输入有效的密码"
					flag = false;
				}
				//验证重复密码
				if(this.password === this.repeat){
					this.checkrepeat = "";
				}else{
					this.checkrepeat = "两次输入的密码不一样"
					flag = false;
				}
				//验证码确认
				if(this.captcha.length == 6 && (/^\w{6}/g).test(this.captcha) ){
					this.checkcaptcha = '';
				}else{
					this.checkcaptcha = "请输入正确的验证码";
					flag = false;
				}

				if(flag === true){
					this.formpost();
				}
				
			},
			formpost: function(){
				var querystring = require('querystring');
				var httpRequest;

				var bodyString = {
					name: 		this.name,
					email: 		this.email,
					password: 	this.password,
					captcha: 	this.captcha
				};

				var postStr = querystring.stringify(bodyString);

				httpRequest = new XMLHttpRequest();
				if(!httpRequest) {
					alert('这里有一点错误！');
					return false;
				}
				httpRequest.onreadystatechange = function(){
					if(httpRequest.readyState === XMLHttpRequest.DONE){
						if(httpRequest.status === 200) {
							alert(httpRequest.responseText);
						}else{
							alert('呀！网络错误！');
						}
					}
				};
		
				httpRequest.open('POST','https://www.ryansky.cn:2323/');
				httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded;charset=UTF-8");
				httpRequest.send(postStr);
			}
		}
	}
</script>

<style scoped>
	.registered {
		height: 4em;
		background: white;
	}
	.content{
		margin-top: 4em;
		padding: 24px;
	}
	.inputdiv{
		width: 100%;
		height: 4em;
		margin-bottom: 1em;
		border-radius: 6px;
		background: #fff;
		border:1px solid #ddd;
	}
	input{
		padding: 1em;
		width: 100%;
		box-sizing: border-box;
		border: 1px solid #ddd;
		font-size: 1.2em;
	}
	.button{
		padding: 0.6em;
		color: white;
		font-size: 1.5em;
		background-color: #4285f4;
		border-radius: 5px;
		margin-top: 10px;
	}
	span{
		color: red;
		display: block;
		margin-bottom: 10px;
	}
	.captchaContainer{
		display: -webkit-box;
		display: -moz-box;
		display: box;
		-webkit-box-orient: horizontal;
		-moz-box-orient: horizontal;
		box-orient: horizontal;
	}
	.captchaInput,
	.captchaImg
	{
		-webkit-box-flex: 1;
		-moz-box-flex: 1;
		box-flex: 1;
	}
	.captchaImg{
		padding-left: 10px;
	}
	.captchaImg img{
		width: 100%;
		height: 100%;
	}
</style>