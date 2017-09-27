<template>
	<div>
		<div class="head">
			<backarrow message="/"></backarrow>
		</div>

		<div class="content">
			<a class="contentHead"></a>
			<div class="contentBody">
				<a href="/#/myself" class="userhead">
					<img src="http://www.qinlab.net/heads/1175782349_qq_com.jpg" alt="">
				</a>
				<div class="userinfo">
					<p class="userinfoName">{{ name }}</p>
					<p class="userinfoEmail">@{{ useremail }}</p>
				</div>
			</div>
		</div>

		<div class="myRelease">
			<p>- 我的饭局 -</p>
			<myrelease></myrelease>
			<myrelease></myrelease>
			
		</div>
	</div>
</template>

<script>
	import backarrow from '@/components/backArrow.vue';
	import myrelease from '@/components/myrelease.vue';

	export default{
		components:{
			backarrow,
			myrelease
		},
		data:function(){
			return{
				name: 		'惠氏集团挖坑手',
				useremail: 	'1175782349@qq.com'
			}
		}
	}	
</script>

<style scoped>
	.head{
		height: 4em;
		background-color: white;
		box-shadow: 0 1px 8px rgba(0,0,0,.3);
		-webkit-box-shadow:0 1px 8px rgba(0,0,0,.3);
	}
	.contentHead{
		height: 6em;
		background: #1DA1F2 !important;
		display: block;
	}
	.contentBody{
		height: 6em;
		background: white;
	}
	.userhead{
		display: inline-block;
		border-radius: 50%;
		background-color: white;
		margin: -36px 0 0 1em;
	}
	.contentBody img{
		border-radius: 50%;
		height: 72px;
		height: 72px;
		border: 2px solid #fff;
		box-sizing: border-box;
		color: #fff;
	}
	.content{
		box-shadow: 0 1px 8px rgba(0,0,0,0.2);
	}
	.userinfo{
		position: absolute;
		left: 7.5em;
		top: 10.5em;
	}
	.userinfoName{
		font-size: 1.5em;
		font-weight: 500;
	}
	.userinfoEmail{
		font-size: 1em;
		color: rgba(0,0,0,0.54);
	}
	.myRelease p{
		text-align: center;
		font-size: 1em;
		color:rgba(0,0,0,0.54);
		padding: 0.5em 0;
	}
</style>