<template>
	<div class="arrow-left arrow-box" >

		<router-link v-bind:to="whereto">
			<b class="left"><i class="left-arrow1"></i><i class="left-arrow2"></i></b>
		</router-link>	
    </div>
</template>

<script>
	module.exports = {
		
		data: function(){
			return{
				whereto:this.message
			}
		},
		props: ['message'],
	}
</script>

<style scoped>
	.left{
        width:20px;
        height:20px;
        position:absolute;
        left:0;
        top:0;
        z-index: 2;/*兼容ie8-*/
        border:1px solid white;
        top: 50%;
        }
    .left-arrow1,.left-arrow2{
        width:0;
        height:0;
        display:block;
        position:absolute;
        left:0;
        top:0;
        z-index:5;/*兼容ie8-*/
        border-top:10px transparent dashed;
        border-left:10px transparent dashed;
        border-bottom:10px transparent dashed;
        border-right:10px white solid;
        overflow:hidden;
    }
    .left-arrow1{
        border-right:10px #4285f4 solid;
    }
    .left-arrow2{
        left:2px;/*重要*/
        border-right:10px white solid;
    }
    .arrow-box{
        width:30px;
        height:30px;
        position: relative;
		margin-left: 1em;
    }	
</style>