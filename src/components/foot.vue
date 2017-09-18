<template>
	<div id="footer">
		<div id="date">
			约个饭
		</div>
		<div id="login">
			<router-link to="/logandreg">注册／登陆</router-link>
		</div>	
	</div>
</template>

<script>
	module.exports = {

	}
</script>

<style scoped>
	#footer{
		width: 100%;
		height: 4em;
		position: fixed;
		bottom: 0;
		box-shadow:0 0 8px rgba(0,0,0,.5);
		color: rgba(0,0,0,0.7);
		background: #fff;
		display: -webkit-box;
		display: -moz-box;
		display: box;
		-webkit-box-orient:horizontal;
		-moz-box-orient:horizontal;
		box-orient:horizontal;
	}
	#date,
	#login{
		-webkit-box-flex:1;
		-moz-box-flex:1;
		box-flex:1;
		text-align: center;
		line-height: 4em;
	}
	a{
		color: rgba(0,0,0,0.7);
	}
</style>