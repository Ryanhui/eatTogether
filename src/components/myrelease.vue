<template>
	<div class="container">
		<div class="booked">
			<p>{{ booked == "true" ? "哇哦！[ " + bookedName + " ] 跟你一起吃饭饭耶" : "还没人和你一起吃饭饭"}}</p>
		</div>

		<div class="head">
			<div class="me">
				<p>我自己</p>
			</div>
			<div class="date">
				<p>{{ releaseTime }}</p>
				<p>{{ releaseYear }}</p>
			</div>
		</div>

		<div class="timePosition">
			<div class="body_left">
				<div>{{ place }}</div>
				<div>{{ time }}</div>					
			</div>
			<div class="body_right">
				<button v-on:click="remove">删除</button>
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

			}
		},

		props:['userId','booked','releaseTime','releaseYear','place','time','message','id',"index","bookedId","bookedName"],

		methods:{
			remove:function(){
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
	
        		httpRequest.open('POST','https://www.ryansky.cn:1010/');
        		httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        		httpRequest.send(postStr);
			}
		}
	}
</script>

<style scoped>
	.container{
		min-height: 10em;
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
		background: #eeeeee;
		color: rgba(0,0,0,0.54);
	}
	.tail{
		padding: 1em;
		border-top:1px solid #ebebeb;
	}
	.booked{
		padding: 0.6em 1.5em;
		border-bottom: 1px solid #ebebeb;
		color: rgba(0,0,0,0.54);
	}
</style>