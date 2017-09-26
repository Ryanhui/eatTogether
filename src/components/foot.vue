<template>
	<div id="footer">
		<div id="date">
			<router-link v-on:click.native="showAlert" :to="appointmentRouter" >约个饭</router-link>
		</div>
		<div id="login">
			<router-link :to="routerTo" >{{ routerContent }}</router-link>
		</div>	
	</div>
</template>

<script>
	module.exports = {
		data:function(){
			return{
				routerTo : 			'',
				routerContent: 		'',

				appointmentRouter: 	'',
				appointmentContent: ''
			}
		},
	
		methods:{
			showAlert:function(){
				
				if(this.appointmentContent == ''){
				
				}else{
					alert(this.appointmentContent);
				}
			}
		},

		created:function(){
			let verify = localStorage.getItem('verify');
			let time = localStorage.getItem('time');

			if(verify == 'true' && Date.now().toString() - time < 36000000){
				this.routerTo = '/aboutme';
				this.routerContent = '我自己';

				this.appointmentRouter = '/appointment'

			}else{
				this.routerTo = '/logandreg';
				this.routerContent = '登陆／注册';

				this.appointmentContent = "请先登录";
				this.appointmentRouter = '/'
			}
		},

	}
</script>

<style scoped>
	#footer{
		width: 100%;
		height: 4em;
		position: fixed;
		bottom: 0;
		box-shadow:0 0 8px rgba(0,0,0,.5);
		color: rgba(0,0,0,0.7);
		background: #fff;
		display: -webkit-box;
		display: -moz-box;
		display: box;
		-webkit-box-orient:horizontal;
		-moz-box-orient:horizontal;
		box-orient:horizontal;
	}
	#date,
	#login{
		-webkit-box-flex:1;
		-moz-box-flex:1;
		box-flex:1;
		text-align: center;
		line-height: 4em;
	}
	a{
		color: rgba(0,0,0,0.7);
	}
</style>