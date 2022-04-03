<template>
	<div class="tmp__screen">
		<div class="tmp__item" v-for="res in tmpResults" :key="res.id">{{res[0]}}{{res[1]}}</div>
	</div>
</template>

<script>
export default {
	name: 'TmpScreenBody',
	props:{
		tmpResults: {
			type: Object,
			default(){
				return
			}
		}
	}
}
</script>

<style  scoped lang="scss">
.tmp{
	&__screen{
  box-shadow: 0px 0px 12px 6px rgba(211, 211, 211, 0.2);
		font-size: 20px;
		height: 500px;
		width: 300px;
		text-align: end;
		background: $screenColor;
		overflow-y: scroll;
		border-left: 1px solid $borderColor;
		padding: 0px 10px 0px 10px;
		color: $buttonNumberColor;
		word-break: break-all;
		&::-webkit-scrollbar {
			width: 10px;
			background: $buttonOperationColor;
		}

		&::-webkit-scrollbar-thumb {
			width: 5px;
			background: #383838;
			border-radius: 15px;
			-webkit-box-shadow: #383838 0px 0px 20px, #383838 0px 0px 30px, #383838 0px 0px 40px, #383838 0px 0px 50px, #383838 0px 0px 75px;
							box-shadow: #383838 0px 0px 20px, #383838 0px 0px 30px, #383838 0px 0px 40px, #383838 0px 0px 50px, #383838 0px 0px 75px;
		}

		@media (max-width: 500px){
			max-width: 500px;
			width: 100%;
			border-left: none;
		}
	}
	&__item{
		margin: 10px 0px;
	}
}
</style>