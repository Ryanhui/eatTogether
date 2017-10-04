<template>
	<div>
		<div class="head">
			<backarrow message="/"></backarrow>
		</div>

		<div class="content">
			<a class="contentHead"></a>
			<div class="contentBody">
				
				<div class="userHeadContainer">
					<img :src="userhead" alt="">
				</div>
				
				<div class="userinfo">
					<p class="userinfoName">{{ name }}</p>
					<p class="userinfoEmail">@{{ useremail }}</p>
				</div>
				<div class="updataHead">
					<router-link to="/updataHead">修改头像</router-link>
				</div>
				<div class="signOut">
					<button v-on:click="logout">退出登陆</button>
				</div>
			</div>
		</div>

		<div class="myRelease">
			<p>- 我的发布 -</p>
			<myrelease v-for="(one ,index) of postData" :index="index" :userId="one.userId" :message="one.message" :place="one.place" :releaseTime="one.releaseTime" :releaseYear="one.releaseYear" :time="one.time" :id="one._id" :key="one.releaseTime" :booked="one.booked" :bookedId="one.bookedId" :bookedName="one.bookedName"></myrelease>
			<p style="margin-top:-1em;">- 我的饭局 -</p>

			<mybooked v-for="(one,index) of mybooked" :index="index" :userId="one.userId" :message="one.message" :place="one.place" :releaseTime="one.releaseTime" :releaseYear="one.releaseYear" :time="one.time" :id="one._id" :key="one.releaseTime" :booked="one.booked" :bookedId="one.bookedId" :bookedName="one.bookedName" :userName="one.userName" :userHead="one.userHead"></mybooked>
		</div>
	</div>
</template>

<script>
	import backarrow from '@/components/backArrow.vue';
	import myrelease from '@/components/myrelease.vue';
	import mybooked from '@/components/mybooked.vue';

	export default{
		components:{
			backarrow,
			myrelease,
			mybooked
		},
		data:function(){
			return{
				name: 		localStorage.username,
				useremail: 	localStorage.user,
				postData:   '',
				mybooked:   '',
				userhead:   'https://www.ryansky.cn:3333/head/' + localStorage.user.replace(/[@\.]/g,'_') + '.jpg'   
			}
		},
		methods:{
			logout:function(){
				localStorage.user = '';
				localStorage.time = 0;
				localStorage.username = '';
				alert('退出成功')
				this.$router.push('/');
			}
		},
		computed:{
			test(){
				return this.$store.state.mydata;
			},
			mybookedtest(){
				return this.$store.state.mybooked;
			},
		},
		created:function(){
			this.$store.dispatch('getData').then(()=>{
				this.postData = this.$store.state.mydata;
			});
			this.$store.dispatch('getMybooked').then(()=>{
				this.mybooked = this.$store.state.mybooked;
			});
		},

		beforeMount:function(){
			var httpRequest;
			httpRequest = new XMLHttpRequest();
	
            if(!httpRequest) {
               	alert('这里有一点错误！');
               	return false;
            }
					
            httpRequest.onreadystatechange = function(){
               	if(httpRequest.readyState === XMLHttpRequest.DONE){
                   	if(httpRequest.status === 200) {
                       	localStorage.username = JSON.parse(httpRequest.responseText)[0].name;
                   	}else{
                       	alert('呀！网络错误！');
                   	}
               	}
            };
	
            httpRequest.open('POST','https://www.ryansky.cn:3333/getusername');
            httpRequest.send(localStorage.user);
		
		},
		watch:{
			test(val){
				this.postData = val;
			},
			mybookedtest(val){
				this.mybooked = val;
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
		height: 4em;
		background: #b3c2bf !important;
		display: block;
	}
	.contentBody{
		height: 6em;
		background: white;
	}
	.contentBody img{
		border-radius: 50%;
		height: 72px;
		width: 72px;
		box-sizing: border-box;
		color: #fff;
	}
	.content{
		box-shadow: 0 1px 8px rgba(0,0,0,0.2);
	}
	.userinfo{
		position: absolute;
		left: 7.5em;
		top: 8.5em;
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
	.updataHead{
		position: absolute;
		left: 23em;
		top: 10.3em;
	}
	.updataHead a{
		color: rgba(0,0,0,.5);
		border: 1px solid white;
		border-radius: 2px;
		background: #c0dfd9;
		padding: 0.8em;
	}
	.signOut{
		position: absolute;
		left: 7.5em;
		top: 5.9em;	
	}
	.signOut button{
		background: #e9ece5;
		border:1px solid #e9ece5;
		border-radius: 2px;
		padding: 0 0.3em;
	}
	.userHeadContainer{
		position: absolute;
		left: 0.6em;
		top: 5em;
		height: 72px;
		width: 72px;
		border: 2px solid white;
    	border-radius: 50%;
    	background: #eee;
	}
</style>