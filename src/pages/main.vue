<template>
	<div>
		<myheader></myheader>
    <div id="containerBox">
      <container  v-for="item in artical" :key="item.userId" :userName="item.userName" :place="item.place" :releaseTime="item.releaseTime" :releaseYear="item.releaseYear" :time="item.time" :message="item.message" :userHead="item.userHead" :booked="item.booked" :bookedId="item.bookedId" :bookedName="item.bookedName" :id="item._id"></container>
      <p class="iAmBottom">没有啦! ┌( ಠ_ಠ)┘ </p>
    </div>
    <myfooter></myfooter>  
	</div>
</template>

<script>
	import myheader from '@/components/head';
	import myfooter from '@/components/foot';
	import container from '@/components/container';

	export default{

    data:function(){
      return{
          artical: ''
      }
    },

		components: {
    		myheader,
    		myfooter,
    		container
  	},

  	methods:{
  		getArtical:function(){
        var that = this;
  			var httpRequest;
  			function makeRequest(){
  				httpRequest = new XMLHttpRequest();
  				if(!httpRequest){
  					alert('放弃吧，不能联网的。');
  					return false;
  				}
  				httpRequest.onreadystatechange = alertContents;
  				httpRequest.open('GET', 'https://www.ryansky.cn:3333/');
  				httpRequest.send();
  			}
  			function alertContents(){
  				if(httpRequest.readyState === XMLHttpRequest.DONE) {
  					if(httpRequest.status === 200) {
  						that.artical = JSON.parse(httpRequest.responseText);
              console.log(JSON.parse(httpRequest.responseText));
  					}else{
  						alert('服务器响应有问题！');
  					}
  				}
  			}
  			makeRequest();
  		},
  	},

    created: function(){
        this.getArtical()
    },

	}
</script>

<style>
	body{
		font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
	}
	#containerBox{
    	margin-top: 4em;
      padding-bottom: 4em;
  }
  .iAmBottom{
    text-align: center;
    color: rgba(0,0,0,.6);
    padding: 1em;
  }
</style>