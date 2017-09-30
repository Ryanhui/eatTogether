<template>
	<div class="container">
		<div class="gap"></div>
		<div class="who">
			<div class="head">
				<div><img :src="photoUrl" alt=""></div>
				<div class="name">{{ userName }}</div>
				<div class="releasetime"> 
					<p>时间 {{releaseTime}}</p>
					<p>{{ releaseYear }}</p>
				</div>
			</div>

			<div class="body">
				<div class="body_left">
					<div>{{place}}</div>
					<div>{{time}}</div>					
				</div>
				<div class="body_right">
					<button v-on:click="eatTogether">一起吃</button>
				</div>
			</div>	

			<div class="tail">
				<p>「 {{ message }} 」 </p>
			</div>
		
		</div>
	</div>
</template>

<script>
	export default{
		data: function(){
			return{
				photoUrl: 'http://www.qinlab.net/heads/' + this.userHead  + '.jpg'
			}
		},
		props:['userName','message','place','releaseYear','releaseTime','time','userHead','booked','bookedId','bookedName','id'],
		methods:{
			eatTogether:function(){
				if(this.booked === "false"){
					var querystring = require('querystring');
        			var httpRequest;
        			var bodyString = {
        			    _id: this.id,
        			    bookedId: localStorage.user
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
		
        			httpRequest.open('POST','https://www.ryansky.cn:2180/');
        			httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        			httpRequest.send(postStr);
				}else{
					alert('已经被预定了');
				}
			}
		}
	}
</script>

<style scoped>
	.container{
		width: 100%;
	}
	.gap{
		background: none;
		height: 1.5em;
	}
	.who{
		background: #fff;
		box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14);
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

	.body{
		padding: 0 1em 1em 1em;
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
</style>