<template>
	<div class="container">
		<div class="booked">
			<p>暂时无人预定</p>
		</div>

		<div class="head">
			<div class="me">
				<p>我自己</p>
			</div>
			<div class="date">
				<p>9月19日</p>
				<p>2017</p>
			</div>
		</div>

		<div class="timePosition">
			<div class="body_left">
				<div>第二餐厅</div>
				<div>3:00 - 4:00</div>					
			</div>
			<div class="body_right">
				<button>删除</button>
			</div>
		</div>

		<div class="tail">
			<p>「 大是大非老地方给那两个地方艰难的胜利 」 </p>
		</div>

	</div>
</template>

<script>
	module.exports = {
		data:function(){
			return{

			}
		}
	}
</script>

<style scoped>
	.container{
		min-height: 10em;
		max-height: 20em;
		background-color: white;
		box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14);
		margin-bottom: 1em;
	}
	.head{
		padding: 1em 1.5em;
		overflow: hidden;
	}
	.me{
		float: left;
	}
	.date{
		float: right;
		text-align: right;
	}
	.timePosition{
		padding: 0 1em 0.6em 1em;
		font-size: 1.5em;
		display: -webkit-box;
		display: -moz-box;
		display: box;
		-webkit-box-orient: horizontal;   /*属性值：        [horizontal]横向/[vertical]纵向*/
		-moz-box-orient: horizontal;
		box-orient: horizontal;
	}
	.body_left,
	.body_right{
		-webkit-box-flex: 1;
		-moz-box-flex: 1;
		box-flex: 1;
	}
	.body_right button{
		width: 100%;
		height: 3.5em;
		text-align: center;
		padding: 0.5em;
		border: 1px solid #fff;
		border-radius: 3px;
		background: #eeeeee;
		color: rgba(0,0,0,0.54);
	}
	.tail{
		padding: 1em;
		border-top:1px solid #ebebeb;
	}
	.booked{
		padding: 0.6em 1.5em;
		border-bottom: 1px solid #ebebeb;
		color: rgba(0,0,0,0.54);
	}
</style>