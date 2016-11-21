//implement stack






function Stack(){

	this.stack = [];
	this.top = -1;
	console.log("New Stack is created"); 
}

Stack.prototype = {

	push : function(data){
		var operators = "+-*/";
		console.log("inside push function");
	if(!data)
	{
		return;
	}
	if(isNaN(data)){
		var a = this.pop();
		var b = this.pop();

			switch(data){	
		 		case '+':
		 		sum = parseInt(a) + parseInt(b);
						break;
				case '*':
	 			sum = parseInt(a) * parseInt(b);
					break;
				case '%':
	 			sum = parseInt(a) % parseInt(b);
						break;
				case '-':
	 			sum = parseInt(a) - parseInt(b);
					break;
				}

		this.stack[++this.top] = sum;
		console.log("data is " +sum+ " pushed and top is incremented to " +this.top);
	}
	else{
		this.stack[++this.top] = data;
		console.log("data is " +data+ " pushed and top is incremented to " +this.top);
	}
	},

	pop : function(){
	if(this.top == -1)
	{
		console.log("stack is empty. no elements to return");
		return;
	}
	else{
		this.temp = this.stack[this.top];
		this.top = this.top - 1;
		console.log("Top is now after popping "+this.temp +this.top);
		return this.temp;
	}
	},

	peek : function(){
	if(this.top == -1)
	{
		console.log("stack is empty. no elements to return");
		return;
	}
	if(this.top){

		return this.stack[this.top];
	}
	},

	reversePolish : function(){
	if(this.top == -1)8556523446
	{
		console.log("stack is empty. no elements to return");
		return;
	}
	if(this.top){
		var top = this.stack.pop();
		console.log(this.stack);
		var sum = 0;
		if((top === '+'))// stack is now [2]
		{
				console.log("The last item was an operator");
				var a = stack.pop();
				console.log("A is " + a);
				var b = stack.pop();
				console.log("B is " + b);

			switch(top){	
		 		case '+':
		 		sum = parseInt(a) + parseInt(b);
						break;
				case '*':
	 			sum = parseInt(a) * parseInt(b);
					break;
				case '%':
	 			sum = parseInt(a) % parseInt(b);
						break;
				case '-':
	 			sum = parseInt(a) - parseInt(b);
					break;
				}

		console.log("Sum is "+sum);
		this.stack.push(21);

		}
		
				
	}

	},

	// printStack : function(){
	// if(this.top == -1)
	// {
	// 	console.log("stack is empty. no elements to return");
	// 	return;
	// }
	// else{
	// 	for(var  i = 0; i <= this.top; i++)
	// 	console.log(this.stack[i]);
	// }
	// return this.stack;
	// }
}

var stack = new Stack();

stack.push(19);
stack.push(2);
stack.push(20);
stack.push('*');

// var value = stack.pop();
// console.log("value :"+ value);

// var peek = stack.peek();
// console.log("value of peek :"+ peek);
// stack.reversePolish();











