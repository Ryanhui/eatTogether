<template>
	<div class="logregContainer">
		<div class="returnBack">
			<backarrow message='/'></backarrow>
		</div>
		<div class="logoImg">
			<img src="../assets/eat.png" alt="一起吃">
		</div>
		<div class="logorreg">
			<div class="log">
				<router-link to="/login">
					<div>登陆</div>
				</router-link>
			</div>
			<div class="reg">
				<router-link to="/registered">
					<div>注册</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import backarrow from '@/components/backArrow';
	import {mapMutations} from 'vuex';
	import $ from 'jquery';

	export default {
			data:function(){
				return{
					
				}
			},
			components:{
				backarrow
			},
			computed:{
				count() {
					return this.$store.state.count
				}
			},
			methods:{
				...mapMutations([
					'increment'
				]),
				add:function(){
					this.increment();
				}
				
			}
	}
</script>

<style scoped>
	.logregContainer{
		padding: 2em;
		margin-top: 4em;
	}
	.logo{
		height: 20em;
	}
	.logorreg{
		height: 6em;
		display: -webkit-box;
		display: -moz-box;
		display: box;
		-webkit-box-orient: horizontal;
		-moz-box-orient: horizontal;
		box-orient: horizontal;
	}
	.log,
	.reg{
		-webkit-box-flex: 1;
		-moz-box-flex: 1;
		box-flex: 1;
	}
	
	.reg div,
	.log div{
		margin: 1em;
		background: #4285f4;
		text-align: center;	
		font-size: 1.5em;
		color: white;
		line-height: 2.5em;
		box-shadow:0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
		border-radius: 3px;
		font-weight: 500;
	}
	.returnBack{
		height: 4em;
		background: #fff;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}
	.logoImg{
		width: 20em;
		margin: 0 auto;
		margin-top: 6em;
		margin-bottom: 1em;
	}
	.logoImg img{
		width: 100%;
	}
</style>