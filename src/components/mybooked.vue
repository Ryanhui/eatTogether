<template>
	<div class="mybooked">
		<div class="head">
			<div class="headimg"><img :src="itemUserHead" alt=""></div>
			<div class="name">{{userName}}</div>
			<div class="releasetime"> 
				<p>时间 {{releaseTime}}</p>
				<p>{{ releaseYear }}</p>
			</div>
		</div>

		<div class="timePosition">
			<div class="body_left">
				<div>{{place}}</div>
				<div>{{time}}</div>					
			</div>
			<div class="body_right">
				<button v-on:click="cancel">取消</button>
			</div>
		</div>

		<div class="tail">
			<p>「 {{message}} 」</p>
		</div>
	</div>
</template>

<script>
	module.exports = {
		data:function(){
			return{
				itemUserHead: 'https://www.ryansky.cn:3333/head/' + this.userId.replace(/[@\.]/g,'_') + '.jpg'
			}
		},
		props:['userId','booked','releaseTime','releaseYear','place','time','message','id',"index","bookedId","bookedName",'userName','userHead'],

		methods:{
			cancel:function(){
				if(confirm("确认取消吗？")){
					var querystring = require('querystring');
        			var httpRequest;
        			var bodyString = {
        			    _id: this.id
        			};
        			var postStr = querystring.stringify(bodyString);
	
        			httpRequest = new XMLHttpRequest();
        			if(!httpRequest) {
        			    alert('这里有一点错误！');
        			    return false;
        			}
        			const that = this;
  				
        			httpRequest.onreadystatechange = function(){
        			    if(httpRequest.readyState === XMLHttpRequest.DONE){
        			        if(httpRequest.status === 200) {
        			            alert(httpRequest.responseText);
        			            that.$router.go(0);       		            
        			        }else{
        			            alert('呀！网络错误！');
        			        }
        			    }
        			};
	
        			httpRequest.open('POST','https://www.ryansky.cn:3333/cancel');
        			httpRequest.send(postStr);

				}
			
			}
		}
	}
</script>

<style scoped>
	.mybooked{
		min-height: 8em;
		max-height: 20em;
		background-color: white;
		box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14);
		margin-bottom: 1em;
	}
		.head{
		padding: 1em 1.5em;
		overflow: hidden;
	}
	.me{
		float: left;
	}
	.date{
		float: right;
		text-align: right;
	}
	.timePosition{
		padding: 0 1em 0.6em 1em;
		font-size: 1.5em;
		display: -webkit-box;
		display: -moz-box;
		display: box;
		-webkit-box-orient: horizontal;   /*属性值：        [horizontal]横向/[vertical]纵向*/
		-moz-box-orient: horizontal;
		box-orient: horizontal;
	}
	.body_left,
	.body_right{
		-webkit-box-flex: 1;
		-moz-box-flex: 1;
		box-flex: 1;
	}
	.body_right button{
		width: 100%;
		height: 3.5em;
		text-align: center;
		padding: 0.5em;
		border: 1px solid #fff;
		border-radius: 3px;
		background: #c0dfd9;
		color: rgba(0,0,0,0.54);
	}
	.tail{
		padding: 1em 1.5em;
		border-top:1px solid #ebebeb;
		color: rgba(0,0,0,.54);
	}
	.head{
		overflow: hidden;
		padding: 1em;
	}
	.head div{ 
		float: left;
	}
	.head img{
		width: 4em;
		height: 4em;
		border-radius:50%;
	}
	.headimg{
		width: 4em;
		height: 4em;
		border-radius: 50%;
		background: #eee;
	}
	.name{
		padding-left: 1em;
		padding-top: .5em;
	}
	.releasetime{
		float: right!important;
		color: rgba(0,0,0,0.87);
	}
	.releasetime p{
		text-align: right;
	}
</style>