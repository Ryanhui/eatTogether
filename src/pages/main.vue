<template>
	<div>
		<myheader></myheader>
      	<div id="containerBox">
        	<container></container>
        	<container></container>
        	<container></container>
        	<container></container>
      	</div>
      	<myfooter></myfooter>  
	</div>

</template>

<script>
	import myheader from '@/components/head';
	import myfooter from '@/components/foot';
	import container from '@/components/container';

	export default{
		data(){
			return {

			}
		},
		components: {
    		myheader,
    		myfooter,
    		container
  		},
  		methods:{
  			getArtical:function(){
  				var httpRequest;

  				function makeRequest(){
  					httpRequest = new XMLHttpRequest();
  					if(!httpRequest){
  						alert('放弃吧，不能联网的。');
  						return false;
  					}

  					httpRequest.onreadystatechange = alertContents;
  					httpRequest.open('GET', '');
  					httpRequest.send();
  				}

  				function alertContents(){
  					if(httpRequest.readyState === XMLHttpRequest.DONE) {
  						if(httpRequest.status === 200) {
  							alert(httpRequest.responseText);
  						}else{
  							alert('服务器相应有问题！');
  						}
  					}
  				}
  				
  			}
  		}
	}
</script>

<style>
	body{
		font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
	}
	#containerBox{
    	margin-top: 4em;
  }
</style>