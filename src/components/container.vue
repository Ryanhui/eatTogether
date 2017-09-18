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
					<button>一起吃</button>
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
				photoUrl: 'http://www.ryansky.cn/eatTogetherHead/' + this.userHead  + '.jpg'
			}
		},
		props:['userName','message','place','releaseYear','releaseTime','time','userHead']
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