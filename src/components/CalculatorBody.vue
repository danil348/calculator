<template>
	<div class="calculator">
		<div class="calculator__screen">{{result}}</div>
		<div class="calculator__keyboard keyboard">
			<button class="keyboard__button button-operation" @click="reset()">c</button>
			<button class="keyboard__button button-operation" >sqrt</button>
			<button class="keyboard__button button-operation" >^</button>
			<button class="keyboard__button button-operation" @click="input(operation)" v-for="operation in keyboardOperations" :key="operation.id">{{operation}}</button>
			<button class="keyboard__button button-operation" @click="calc()">%</button>
			<button class="keyboard__button button-operation" @click="calc()">=</button>
			<button class="keyboard__button button-number" @click="input(number)" v-for="number in keyboardNumbers" :key="number.id">{{number}}</button>
			
		</div>
	</div>
</template>

<script>
export default {
	name: 'CalculatorBody',
	data(){
		return{
			tmpResult: '0',
			result: '0',
			needCalc: false,
			keyboardOperations: ['.','/','*','+','-'],
			keyboardNumbers: [1,2,3,4,5,6,7,8,9,0]
		}
	},
	methods: {
	}

}
</script>

<style scoped lang="scss">
.calculator{
	font-size: $fontSize;
	color: $fontColor;
	width: 500px;
	height: 500px;
  display: flex;
  flex-direction: column;
	&__screen{
		padding: 10px;
		display: flex;
		align-items: flex-end;
		justify-content: end;
		background: $screenColor;
		flex: 1 1 30%;
	}
	&__keyboard{
		position: relative;
		&::before{
			content: "";
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			width: 90%;
			height: 1px;
			background: $borderColor;
		}
		background: $screenColor;
		flex: 1 1 70%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		button{
			flex: 1 1 20%;
			max-height: 25%;
			transition: all 0.3s ease 0s;
			font-size: $fontSize;
			&:hover{
				background: $buttonHoverBg;
			}
		}
	}
}
button.button-number{
	color: $buttonNumberColor;
}
button.button-operation{
	color: $buttonOperationColor;
}
</style>