// // reverse polish notation

// // var array = ["4","1","+"];

// // var stack = [];
// // stack.push(4);       // stack is now [2]
// // stack.push(4);
// // stack.push("+")       // stack is now [2, 5]
// // var i = stack.pop(); 

// // if(isNaN(i) )// stack is now [2]
// // var a = stack.pop();
// // console.log(a);
// // var b =stack.pop();
// // console.log(b);

// // switch(i){
// // 	case '+':
// // 		var sum = parseInt(a) + parseInt(b);
// // 		break;

// // }
// // console.log(sum);


// //find all factors

// // var number = 9;

// // findFactors(number);
// // function findFactors(number){
// // 		console.log(number);
// // 		if(number%2 == 0)
// // 		{
// // 		var maxfactor = parseInt(number/2);
// // 	}
// // 	else if(number % 3 ==0)
// // 	{
// // 		var maxfactor = parseInt(number/3);	
// // 	}
// // 		console.log(maxfactor);

// // 		var result = [];
// // for (var factor = maxfactor; factor >= 2; --factor)  
// //       {  
// //          if (number % factor == 0)  
// //          {  
// //             // found 2 factors  
// //             var nextFactor = number / factor;  
              
// //             // try printing only if secondfactor is smaller (i.e. descending order)  
// //             if (nextFactor <= factor)  
// //             {  
// //                if (nextFactor <= previousFactor)  
// //                {  
// //                   System.out.println(currExpression + factor + " * " + nextFactor);  
// //                }  
// //             }  
              
// //             printFactorsHelper(currExpression + factor + " * ", nextFactor, factor);  
// //          }  
// //       }  
	

// // }

// var number = 32;

// findFactors(number);
// findFactors1(number);

// function findFactors(number){
// var set = [];
// 	for(var factor = number/2; factor >= 2; factor --)
// 	{
// 		if(number % factor == 0 && factor >= 2){
// 			set.push(factor);
// 			set.push(number/factor);
// 			if(factor > 2 || )
// 			findFactors(number);		//number = factor;
// 			}
// 		}
// console.log(set);
// }

// function findFactors1(number){
// var set = [];
// 	for(var factor = 2; factor < number/2; factor ++)
// 	{
// 		for(var factor1 = factor+1; factor1 < number/2; factor1++)
// 		{
// 			if(number % (factor1 * factor) == 0)
// 			{
// 				set.push(factor1);
// 				set.push(factor);
// 				set.push(number/(factor1 * factor));
// 			}
// 		}
// 	}
// console.log(set);
// }


printFactorsHelper("", 32, 32);
function printFactorsHelper(currExpression, dividend, previousFactor){

for (var factor = dividend/2; factor >= 2; --factor)  
      {  
         if (dividend % factor == 0 && factor <= previousFactor)  
         {  
            // found 2 factors  
            var nextFactor = dividend / factor;  
              
            												// try printing only if secondfactor is smaller (i.e. descending order)  
												            if (nextFactor <= factor)  
												            {  
												               if (nextFactor <= previousFactor)  
												               {  
												                  console.log(currExpression + factor + " * " + nextFactor); 
												
												               }  
            												}  
              
            printFactorsHelper(currExpression + factor + " * ", nextFactor, factor);  
         }  
      }
      }  


