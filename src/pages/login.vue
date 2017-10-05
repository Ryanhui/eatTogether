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
				<div class="captchaImg" v-on:click="ccprefresh">
					<img :src="ccpsrc" alt="点击获取验证码">
				</div>
			</div>	

			<div class="insert">{{ checkcaptcha }}</div>

			<div class="loginbtn">
				<input v-on:click="sendpost" class="button confirm" :value="loginIng">
			</div>		
		</div>
		<div class="forget">
			<p v-on:click = "forget">忘记密码</p>
		</div>
	</div>
</template>

<script>
	import backarrow from '@/components/backArrow.vue';

	export default{
		data:function(){
			return{
				useremail: 		'',
				password: 		'',
				captcha: 		'',

				checkUserEmail: '',
				checkcaptcha: 	'',

				checker: 		false,
				ccpsrc: 		'',

				loginIng: 		'登陆'
			}
		},
		components: {
			backarrow
		},
		methods: {
			ccprefresh:function(){
				var xmlhttp = new XMLHttpRequest();
				var url = "https://www.ryansky.cn:3333/ccp";
				var self = this;
				xmlhttp.onreadystatechange = function() {
    				if (this.readyState == 4 && this.status == 200) {
        				self.ccpsrc = "data:image/jpeg;base64," + this.response;
    				}
				};
				xmlhttp.open("GET", url, true);
				xmlhttp.send();
			},
			sendpost: function(){
				const that = this;
				if(this.checker === true){
					this.loginIng = '正在登录';
					var querystring = require('querystring');
					var httpRequest
	
					var bodyString = {
						useremail: this.useremail,
						password: this.password,
						captcha: this.captcha.toLowerCase().replace(/\s+/g,"")
					}
	
					var postData = querystring.stringify(bodyString);
	
					httpRequest = new XMLHttpRequest();

					if(!httpRequest){
						alert('这里有一点错');
						return false;
					}
					var self = this;
					httpRequest.onreadystatechange = function(){
						if(httpRequest.readyState === XMLHttpRequest.DONE){
							if(httpRequest.status === 200){

								if(isNaN(httpRequest.responseText)){
									alert(httpRequest.responseText);
									self.loginIng = "登陆";
								}else{
									localStorage.verify = true;
									localStorage.time = httpRequest.responseText;
									localStorage.user = that.useremail;
									alert('登陆成功');
									that.$router.push('/');
								}

							}else{
								alert('呀！网络错误！');
								self.loginIng = "登陆";
								
							}
						}
					}
	
					httpRequest.open('POST','https://www.ryansky.cn:3333/login');
					httpRequest.send(postData);
						

				}else{
					alert('请检查输入内容');
				}
			},
			forget:function(){
				alert('啥？忘了密码了？真是拿你没办法。');
				
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
		margin-left: 10px;
	}
	.captchaImg img{
		width: 12em;
		height: 3.7em;
	}
	.button{
		background-color: #c0dfd9;
		color: white;
		border:none;
		text-align: center;
		font-size: 1.5em;
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
	.loginbtn{
		box-shadow:0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
		border-radius: 5px;
	}
</style>