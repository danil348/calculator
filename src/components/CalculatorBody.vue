<template>
	<div class="calculator">
		<div class="calculator__screen-wrapper">
			<div class="calculator__screen">
				<div class="calculator__ans">
					{{tmpTask}} <br>
					{{result}}
				</div>
			</div>
		</div>
		<div class="calculator__keyboard keyboard">
			<button class="keyboard__button button-operation" @click="reset()">c</button>
			<button class="keyboard__button button-operation" @click="calc(false)">=</button>
			<button class="keyboard__button button-operation" @click="bracketClose == true ? input('(') : 1">(</button>
			<button class="keyboard__button button-operation" @click="bracketClose == false ? input(')') : 1">)</button>
			<button class="keyboard__button button-operation" @click="bracketClose == true ? input('√(') : input(')')">sqrt</button>
			<button class="keyboard__button button-operation" @click="input('^')">^</button>
			<button class="keyboard__button button-operation" @click="input(operation)" v-for="operation in keyboardOperations" :key="operation.id">{{operation}}</button>
			<button class="keyboard__button button-operation" @click="calc(true)">%</button>
			<button class="keyboard__button button-number" @click="input(number)" v-for="number in keyboardNumbers" :key="number.id">{{number}}</button>
		</div>
	</div>
	<TmpScreenBody :tmpResults="tmpResults" />
</template>

<script>
import TmpScreenBody from './TmpScreenBody.vue'

export default {
	name: 'CalculatorBody',
  components: {
    TmpScreenBody
  },
	data(){
		return{
			bracketClose: true,
			tmpResults: [], 
			tmpTask: "",
			result: '0',
			splitresult: [''],
			isAns: false,
			keyboardOperations: ['.','/','*','+','-'],
			operationsCount: 0,
			maxOperations: 10,
			keyboardNumbers: [1,2,3,4,5,6,7,8,9,0],
		}
	},
	methods: {
		reset(){
			this.result = "0"
			this.operationsCount = 0
			this.splitresult = [""]
			this.tmpTask = ''
			this.isAns = false
			this.bracketClose = true
		},
		input(number){
			if(this.operationsCount < this.maxOperations){
				if(this.result == "0" && this.isAns == false){
					this.result = ""
				}else if(this.isAns == true){
					if(this.result == "=0"){
						this.result = ""
					}
					this.result = this.result.slice(1, this.result.length)
					this.isAns = false
				}
				if((this.result == '' || this.numTest(this.result) == false) && (number == '/' || number == '*' || number == '+')){
					this.result = '0'
					return
				}
				if(this.regTest(this.result[this.result.length-1]) == true &&  this.regTest(number) == true){
					this.result = this.result.slice(0,this.result.length-1) + number
					return
				}

				if(number == '+' || number == '-'){
					if(this.result == ''){
						if(number == '-'){
							this.result+=number
						}else{
							this.result = '0'
						}
						return
					}
					if(this.numTest(this.result[this.result.length - 1]) == true || this.result[this.result.length-1] == ')' ||
						this.result[this.result.length-1] == '('){
						this.result+=number
						this.operationsCount++
						return
					}
					if(this.result[this.result.length - 1] == '*' || this.result[this.result.length - 1] == '/' || 
					this.result[this.result.length - 1] == '-' || this.result[this.result.length - 1] == '+'){
						this.result = this.result.slice(0,this.result.length-1) + number
					}
					return
				}
				
				if(number == '(' || number == ')' || number == '√('){
					if(this.result == '' && (number == '('|| number == '√(')){
						this.bracketClose = false 
						this.result += number
						if(number == '√('){
							this.operationsCount++
						}
						this.splitResult()
						return
					}
					if(this.result[this.result.length-1] != '('  && this.regTest(this.result[this.result.length-1]) == false && number == ')'
					&& this.result[this.result.length-1] != '.' && this.result[this.result.length-1] != '^'){
						this.result += number
						this.bracketClose = true 
						this.splitResult()
						return
					}
					if(this.result[this.result.length-1] == '^' && number == '('){
						this.operationsCount++
						this.result += number
						this.bracketClose = false 
						this.splitResult()
						return
					}
					if((this.result[this.result.length-1] == ')' || this.regTest(this.result[this.result.length-1]) == false) && 
						(number == '(' || number == '√(') && this.result[this.result.length-1] != '.' && this.result[this.result.length-1] != '^'){
						this.operationsCount++
						this.result += "*" + number
						this.bracketClose = false 
						this.splitResult()
						return
					}
					if(this.regTest(this.result[this.result.length-1]) == true && (number == '('|| number == '√(')){
						this.result += number
						this.bracketClose = false 
						this.splitResult()
						return
					}
					return
				}
				
				if(number == '^'){
					if(this.result == ''){
						this.result = '0'
						return
					}
					if(this.result[this.result.length-1] == '^' || this.splitresult[this.splitresult.length - 2] == '^'){
						return
					}
					if(this.regTest(this.result[this.result.length-1]) == false && this.result[this.result.length-1] != '(' &&
						this.result[this.result.length-1] != ')' && this.result[this.result.length-1] != '.'){
						this.operationsCount++
						this.result += number
						return
					}
					return
				}

				if(number == '.' && this.splitresult[this.splitresult.length-1].includes('.') == false && 
					this.numTest(this.splitresult[this.splitresult.length-1]) == true){
					if(this.result == ''){
						this.result = '0' + number
						return
					}
					if(this.numTest(this.result[this.result.length-1]) == true){
						this.result += number
						this.splitResult()
						return
					}
					if(this.regTest(this.result[this.result.length-1]) == false && this.result[this.result.length-1] != '(' &&
					this.result[this.result.length-1] != ')' && this.result[this.result.length-1] != '.'){
						this.result += number
						return
					}else{
						return
					}
				}else if(number == '.' ){
					return
				}

				if((number == '/' || number == '*') && (this.result[this.result.length-1] == '.' || this.result[this.result.length-1] == '(' 
				|| this.result[this.result.length-1] == '^')){
					return
				}
				
				if(this.numTest(number) == true && this.result[this.result.length-1] == ')'){
					return
				}

				this.result += number
				this.operationsCount += this.regTest(number)
				this.splitResult()
			}else if(number == ')' && this.bracketClose == false){
				this.bracketClose = true
				this.result += number
			}else if(this.numTest(number) == true && this.checkingLength() < 15){
				console.log("asdasd")
				this.result += number
				this.splitResult()
			}
		},
		calc(calcPercent){
			this.splitResult()
			if(this.bracketClose == true && (this.operationsCount != 0 || calcPercent == true) && 
				this.regTest(this.result[this.result.length-1]) == false){
				this.splitresult.forEach(function(element,index,arr) {
					if(element[0] == '(' && element[element.length - 1] == ')'){
						arr[index] = element.slice(1,element.length-1)
					}
				});
				
				while(this.hasSplit()){
					this.splitresult.forEach(function(element,index,arr) {
						if((element[0] == '(' || element[1] == '(') && element[element.length-1]!=')'){
							arr[index]+=arr[index+1]
							arr = arr.splice(index+1,1)
						}
					});
				}

				this.splitresult.forEach(function(element,index,arr) {
					if(element.includes('^') == true && element != '^'){
						if(element[0] != '√'){
							arr[index] = String(eval(element.split('^').join('**')))
						}
					}else if(element == '^'){
						arr[index-1] = String(Math.pow(arr[index-1],arr[index+1]))
						arr = arr.splice(index,2)
					}
				});

				this.splitresult.forEach(function(element,index,arr) {
					if(element[0] == '(' && element[element.length - 1] == ')'){
						arr[index] = String(eval(element))
					}
					if(element[0] == '√' && element[element.length - 1] == ')' && element.includes('^') == false){
						element = element.slice(1,element.length)
						arr[index] = String(Math.pow(eval(element),0.5) )
					}else if(element[0] == '√' && element[element.length - 1] == ')'){
						element = element.slice(2,element.length-1)
						element = element.split(/([-*+/])/)
						element.forEach(function(el,id) {
							if(el.includes('^')){
								element[id] = String(Math.pow(Number(el.split('^')[0]),Number(el.split('^')[1])))
							}
						});
						arr[index] = String(Math.pow(eval(element.join('')), 0.5))
					}
				});
				
				if(this.splitresult[0].includes('=') == 1){
					this.splitresult[0] = this.splitresult[0].slice(1,this.splitresult[0].length-1)
				}
				let ans = 0
				this.splitresult = this.splitresult.join('')
				if(calcPercent == true && (this.splitresult.includes('-') || this.splitresult.includes('+'))){
					this.splitresult = this.splitresult.split(/([+-])/)
						this.splitresult[this.splitresult.length-1] = '%'+String(eval(this.splitresult.splice(this.splitresult.length - 1,1).join('')))
						this.splitresult = this.splitresult.join('')
						this.splitresult = this.splitresult.split('%')
						if(this.splitresult[0][this.splitresult[0].length-1] == '-'){
							ans = eval(this.splitresult[0].slice(0,this.splitresult[0].length-1)) - eval(this.splitresult[0].slice(0,this.splitresult[0].length-1)) *  this.splitresult[1] / 100
						}else{
							ans = eval(this.splitresult[0].slice(0,this.splitresult[0].length-1)) + eval(this.splitresult[0].slice(0,this.splitresult[0].length-1)) *  this.splitresult[1] / 100
						}
				}else if(calcPercent == true){
					ans = eval(this.splitresult) / 100
				}else{
					ans = eval(this.splitresult)
				}
				if(isNaN(ans) == true){
					ans=0
				}
				if(calcPercent == true){
					if(isNaN(ans) == true){
						ans=0
					}
					if(this.result.includes('=')){
						this.result = this.result.slice(1,this.result.length)
					}
					this.tmpResults.push([this.result + '%',"=" + ans])
				}else{
					this.tmpResults.push([this.result,"=" + ans])
				}
				if(this.tmpResults.length > 100){
					this.tmpResults = this.tmpResults.splice(1,this.tmpResults.length)
				}
				localStorage.setItem("lStmpResults", JSON.stringify(this.tmpResults));
				this.tmpTask = this.result
				this.splitresult = [String(ans)]
				this.result = '=' + ans
				this.operationsCount = 0
				this.isAns = true
			}
		},
		checkingLength(){
			return this.splitresult[this.splitresult.length - 1].length
		},
		splitResult(){
			this.splitresult = this.result.split(/([-^*+/])/)
		},
		regTest(element){
			return /[-*+/s]/.test(element)
		},
		numTest(element){
			return /[0-9]/.test(element)
		},
		hasSplit(){
			let flag = false
			this.splitresult.forEach(element => {
				if((element[0] == '(' || element[1] == '(') && element[element.length-1]!=')'){
					flag = true
				}
			});
			return flag
		}
	},
	created(){
		if(JSON.parse(localStorage.getItem("lStmpResults")) != null){
			this.tmpResults = JSON.parse(localStorage.getItem("lStmpResults"));
		}
	}

}
</script>

<style scoped lang="scss">

.calculator{
  box-shadow: 0px 0px 12px 6px rgba(211, 211, 211, 0.2);
	font-size: $fontSize;
	color: $fontColor;
	width: 500px;
	height: 500px;
  display: flex;
  flex-direction: column;
	&__screen{
		height: auto;
		max-height: 100%;
	}
	&__screen-wrapper{
		word-break: break-all;
		position: relative;
		padding: 10px 20px 5px 10px;
		text-align: end;
		display: flex;
		height: 30%;
		align-items: flex-end;
		justify-content: end;
		background: $screenColor;
		color: $buttonNumberColor;
		outline: none;
		
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
	
		@media (max-width: 500px){
			max-width: 500px;
			width: 100%;
		}
}
button.button-number{
	color: $buttonNumberColor;
}
button.button-operation{
	color: $buttonOperationColor;
	&:nth-child(1){
		flex: 0 1 50%;
	}
	&:nth-child(2){
		flex: 0 1 50%;
	}
}
</style>