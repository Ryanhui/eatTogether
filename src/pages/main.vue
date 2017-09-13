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
  		}
	}
</script>

<style>
	#containerBox{
    	margin-top: 4em;
  }
</style>