<template>
	<div class="login">
		<div class="returnback">
			<backarrow message="/logandreg"></backarrow>
		</div>
		<div class="container">
			<div class="inputdiv">
				<input type="email" v-model="useremail" placeholder="邮箱">
			</div>

			<div class="insert">{{ checkUserEmail }}</div>
			
			<div class="inputdiv">
				<input type="password" v-model="password" placeholder="密码">
			</div>

			<div class="insert"></div>

			<div class="captchaContainer">
				<div class="captchaInput">
					<input v-model="captcha" type="text" placeholder="请输入验证码">
				</div>
				<div class="captchaImg">
					<img src="http://123.207.87.143:8124/" alt="刷新显大图">
				</div>
			</div>	

			<div class="insert">{{ checkcaptcha }}</div>

			<div>
				<input v-on:click="sendpost" class="button confirm" type="submit" value="登陆">
			</div>		
		</div>
		<div class="forget">
			<p v-on:click = "forget">忘记密码</p>
		</div>
	</div>
</template>

<script>
	import backarrow from '@/components/backArrow.vue'
	export default{
		data:function(){
			return{
				useremail: 		'',
				password: 		'',
				captcha: 		'',

				checkUserEmail: '',
				checkcaptcha: 	'',

				checker: 		false
			}
		},
		components: {
			backarrow
		},
		methods: {
			sendpost: function(){
				if(this.checker === true){

					var querystring = require('querystring');
					var httpRequest
	
					var bodyString = {
						useremail: this.useremail,
						password: this.password,
						captcha: this.captcha
					}
	
					var postData = querystring.stringify(bodyString);
	
					httpRequest = new XMLHttpRequest();
					if(!httpRequest){
						alert('这里有一点错');
						return false;
					}
	
					httpRequest.onreadystatechange = function(){
						if(httpRequest.readyState === XMLHttpRequest.DONE){
							if(httpRequest.status === 200){
								alert(httpRequest.responseText);
							}else{
								alert('呀！网络错误！');
							}
						}
					}
	
					httpRequest.open('POST','https://www.ryansky.cn:7788/');
					httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
					httpRequest.send(postData);
				}else{
					alert('请检查输入内容')
				}
			},
			forget:function(){
				alert('啥？忘了密码了？真是拿你没办法。')
			}
		},
		watch:{
			useremail:function(){
				this.checkUserEmail = "";
				this.useremail = this.useremail.replace(/^\s+|\s+$/g,"").toLowerCase();
				let regexp = /^[a-z0-9](\w|\.|-)*@([a-z0-9]+-?[a-z0-9]+\.){1,3}[a-z]{2,4}$/i;
				if(this.useremail.match(regexp)==null){
					this.checkUserEmail = "请输入有效的邮箱";
				}else{
					this.checkUserEmail = "";
					this.checker = true;
				}
			},
			captcha:function(){
				if(this.captcha.length == 6 && (/^\w{6}/g).test(this.captcha) ){
					this.checkcaptcha = '';
				}else{
					this.checkcaptcha = "请输入正确的验证码";
					this.checker = true;
				}
			}
		}
	}
</script>

<style scoped>
	.returnback{
		height: 4em;
		background: white;
	}
	.container{
		padding: 1em;
		margin-top: 4em;
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
	.captchaContainer{
		display: -webkit-box;
		display: -moz-box;
		display: box;
		-webkit-box-orient: horizontal;
		-moz-box-orient: horizontal;
		box-orient: horizontal;
		margin-bottom: 1em;
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
	.button{
		background-color: #4285f4;
		box-shadow:0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
		border-radius: 3px;
		border: 1px solid #4285f4;
		color: white;
		font-size: 1.5em;
		line-height: 1em;
	}
	.forget{
		padding: 1em;
		margin-top: 1em;
	}
	.forget p{
		text-align: center;
		color: rgba(0,0,0,0.5);
	}
	.insert{
		padding-bottom: 1em;
		color: red;
		padding-left: 3px;
	}
</style>