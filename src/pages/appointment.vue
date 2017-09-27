<template>
	<div>
		<div class="head">
			<backarrow message="/"></backarrow>
		</div>
		<div class="content">
			<div class="position">
				<p>那么，你想在哪里吃饭呢</p>
				  <select v-model="position">
    				<option disabled value="">选一个吧</option>
    				<option>第一餐厅</option>
    				<option>第二餐厅</option>
    				<option>第三餐厅</option>
    				<option>第八餐厅</option>
    				<option>第九餐厅</option>
    				<option>第十餐厅</option>
    				<option>第十一餐厅</option>
    				<option>第十二餐厅</option>
    				<option>京元餐厅</option>
    				<option>教职工餐厅</option>
  				  </select>
			</div>

			<div class="time">
				<p>你想什么时候呀</p>
				<select v-model="day">
					<option disabled value="">今天或者明天哦</option>
					<option>今天</option>
					<option>明天</option>
				</select>
				<p class="gape">从：</p>
				<vue-timepicker v-model="timeFrom" format="HH:mm"></vue-timepicker>
				<p class="gape">到：</p>
				<vue-timepicker v-model="timeTo" format="HH:mm"></vue-timepicker>
			</div>

			<div class="message">
				<p>现在，留下你想说的吧</p>
				<textarea v-model="message" v-on:keyup="auto_grow" ref="myTextArea" placeholder="写在这里..."></textarea>
			</div>
			
			<div class="release">
				<button v-on:click="sendPost" >发布</button>
			</div>
		</div>


	</div>
</template>

<script>
	import backarrow from '@/components/backArrow.vue';
	import VueTimepicker from 'vue2-timepicker';

	export default{
		data:function(){
			return{
				position: 	'',   //哪个餐厅
				day: 		'',
				timeFrom: {       //开始时间
					HH: '',
					mm: ''
				},
				timeTo: {         //结束时间
					HH: '',
					mm: ''
				},
				message: 	'',   //留言
				postDay: 	''    //哪天
			}
		},
		components: {
			backarrow,
		    VueTimepicker,
		},
		methods: {
			auto_grow:function() {
				//alert('yes')
				var element = this.$refs.myTextArea;
				console.log(element);
				//alert(element.style.height);
    			element.style.height = "5px";
    			element.style.height = (element.scrollHeight)+"px";
			},
			sendPost:function(){
				const that = this;

				var bodyString = {
                	place : this.position,
                	timeFrom : this.timeFrom.HH + ':' + this.timeFrom.mm,
                	timeTo	 : this.timeTo.HH + ':' + this.timeTo.mm,
                	time     : this.timeFrom.HH + ':' + this.timeFrom.mm + ' - ' + this.timeTo.HH + ':' + this.timeTo.mm,
                	postDay  : this.postDay,
                	message  : this.message,
                	userId	 : localStorage.getItem('user')
            	};

				function send(){
					
					var querystring = require('querystring');
					var httpRequest;
	
            		var postStr = querystring.stringify(bodyString);
            		httpRequest = new XMLHttpRequest();
	
            		if(!httpRequest) {
                		alert('这里有一点错误！');
                		return false;
            		}
					
            		httpRequest.onreadystatechange = function(){
                		if(httpRequest.readyState === XMLHttpRequest.DONE){
                	    	if(httpRequest.status === 200) {
                	        	alert(httpRequest.responseText);
                	        	that.$router.push('/');
                	    	}else{
                	        	alert('呀！网络错误！');
                	    	}
                		}
            		};
	
            		httpRequest.open('POST','https://www.ryansky.cn:2310/');
            		httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            		httpRequest.send(postStr);
            	}

            	if(!isNaN(this.postDay) && this.position && this.message && this.timeFrom.HH !== '' && this.timeTo.HH !== '' && this.timeFrom.mm !== '' && this.timeTo.mm !== ''){
            		send();
            	}else{
            		alert('咦？有什么忘了填了？');
            	}
			}
		},
		watch:{
			day:function(){
				if(this.day === "今天"){
					this.postDay = 0;

				}else if(this.day === "明天"){
					this.postDay = 1;
				}				
			}
		}

	}
</script>

<style scoped>
	body{
		background-color: white;
	}
	.head{
		background: white;
		height: 4em;
		box-shadow: 0 1px 8px rgba(0,0,0,.3);
		-webkit-box-shadow:0 1px 8px rgba(0,0,0,.3);
	}
	.content{
		padding: 1em;
		background: white;
		margin-top: 1em;
		font-size: 1.3em;
		padding-bottom: 4em;
	}
	p{
		color: rgba(0,0,0,.5);
	}
	select{
		width: 100%;
		border: 0;
		border-bottom:2px solid rgba(0,0,0,.3);
		border-radius: 0px;
		font-size: 0.5em;
		padding: 10px 0;
		background: white;
	}
	.position{
		margin-bottom: 2em;
	}
	.time{
		margin-bottom: 2em;
	}
	.gape{
		padding: 1em 0;
	}
	.release{
		margin: 3em auto;
		width: 60%;
	}
	button{
		width: 100%;
		font-size: 1.1em;
		box-shadow:0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
		-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
		color:rgba(0,0,0,0.54);
		padding: 0.5em 0;
		border-radius: 2px;
		border: 0;
		background-color: white;
	}
	textarea{
		resize: none;
		color: rgba(0,0,0,1);
		font-size: 0.8em;
		margin-top:1em;
		width: 100%;
		overflow: hidden;
		min-height: 30px;
        max-height: 100px;
		border: 0;
		border-bottom: 2px solid rgba(0,0,0,0.3);
	}
</style>