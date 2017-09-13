<template>
	<div class="login">
		<div class="returnback">
			<backarrow message="/logandreg"></backarrow>
		</div>
	</div>
</template>

<script>
	import backarrow from '@/components/backArrow.vue'
	export default{
		components: {
			backarrow
		}
	}
</script>

<style scoped>
	.returnback{
		height: 4em;
		background: white;
	}
</style>