<template>
	<div id="header">
		<p>一起吃<em>「 福建农林大学 」</em></p>
	</div>
</template>

<script>
	module.exports = {
		data: function(){

			return {
				
			}
		}
	}
</script>

<style scoped>
	#header{
		position: fixed;
		top: 0;
		width: 100%;
		height: 4em;
		line-height: 4em;
		text-align: center;
		box-shadow: 0 1px 8px rgba(0,0,0,.3);
		background: #fff;
	}
	#header p{
		font-size: 1.5em;
		color: rgba(0,0,0,0.7);
		padding-left: 1em;
	}
	#header em{
		font-size: 0.5em;
	}
</style>