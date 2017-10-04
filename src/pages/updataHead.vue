<template>
	<div class="updataHead">
		<div class="head">
			<backarrow message="/myself"></backarrow>
		</div>
		<div class="showHead">
			<div class="subShowHead">
				<img :src="src" alt="">
			</div>
		</div>
		<div class="load">
			<input type="file" id="input" ref="myhead" v-on:change="loadHead">
			<p>支持jpg，png格式</p>
		</div>
		<div class="upload">
			<button v-on:click="updataHead" ref="upbutton">{{up}}</button>
		</div>
		
		<img src="" alt="" ref="ll">
	</div>
</template>

<script>
	import backarrow from '@/components/backArrow.vue';
	export default{
		data:function(){
			return{
				src: 'https://www.ryansky.cn:3333/head/' + localStorage.user.replace(/[@\.]/g,"_") + '.jpg',
				check: false,
				up: '上传'
			}
		},
		components:{
			backarrow
		},
		methods:{
			loadHead:function(){
				var file = this.$refs.myhead.files[0];
				var rFilter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;

				if(file.size <= 20000000 && rFilter.test(file.type)){
					var reader = new FileReader();
					var that = this;
					reader.onload = function(e){
						that.src = e.target.result;
					}
					reader.readAsDataURL(file);
					this.check = true;
				}else{
					alert('图太大啦或者格式不正确');
				}
			},
			updataHead:function(){
				if(this.check === true){
					var img = this.$refs.myhead;
					var file = this.$refs.myhead.files[0];
					var reader = new FileReader();

					var httpRequest = new XMLHttpRequest();

					 /////////////
					 
					 if(!httpRequest) {
					 	alert('这里有一点错误！');
					 	return false;
					 }
					 var self = this;
					 httpRequest.onreadystatechange = function(){
					 	if(httpRequest.readyState === XMLHttpRequest.DONE){
					 		if(httpRequest.status === 200) {
					 			alert(httpRequest.responseText);
					 			self.$router.push('/myself');
					 		}else{
					 			alert('呀！网络错误！');
					 		}
					 	}
					 };
			 		 this.up = "正在上传";
			 		 this.$refs.upbutton.disabled = true;
			 		 this.$refs.upbutton.style.background = "#eee";
			 		 this.$refs.upbutton.style.color = "black";
					 httpRequest.open('POST','https://www.ryansky.cn:3333/updataHead');
					 httpRequest.overrideMimeType('text/plain; charset=utf-8');

					 /////////////
					 reader.onload = function(evt) {
					 	var data = {
					 		"id":localStorage.user,
					 		"image":btoa(evt.target.result)
					 	}
					   	httpRequest.send(JSON.stringify(data));
					   	
					 };
					 reader.readAsBinaryString(file);
				}else{
					alert('选好了？')
				}
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
	input{
		width: 15em;
		height: 2.3em;
		border: 1px solid black;
	}
	img{
		width: 10em;
		height: 10em;
		border-radius: 50%;
	}
	.showHead{
		text-align: center;
		margin-top: 3em;
	}
	.load{
		margin-top: 3em;
		text-align: center;
	}
	.upload{
		margin-top: 3em;
		text-align: center;
	}
	.subShowHead{
		width: 10em;
		height: 10em;
		margin: 0 auto;
		border: 0.5em solid white;
		border-radius: 50%;
	}
	button{
		width: 10em;
		height: 3em;
		background-color: #c0dfd9;
		border: none;
		color: #3b3a36;
		border-radius: 3px;
		box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
		-webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
	}
	.load p{
		padding: 1em;
	}
</style>