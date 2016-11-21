
//***************************************find repeating characters in a string

// var string = "jsavavstiix";

// findDuplicate(string);


// function findDuplicate(string){ 
//             var duplicates = '';

// for (var i = 0; i< string.length; i++)
// {
//     for (var j = i+1; j < string.length; j++)
//     {
//         if(string[i] == string[j])
//         {
//             duplicates += string[i];
//         }

//     }
// }
// console.log(duplicates);
// }


//**************************************find if two strings are anagrams/permutations

// var string1 = 'mary';
// var string2 = "army";

// checkAnagrams(string1, string2);
// function checkAnagrams(string1, string2){
// var n1= string1.length;
// var n2= string2.length;
// var anagram1 = [];
// var anagram2 = [];
// if(n1 != n2)
// {
//     console.log("Cannot be anagrams");

// }
// else{
// for (var i = 0; i < string1.length; i++)
// {
//     anagram1[i] = '';
//     anagram1[i]+= string1[i];
// }
// for (var i = 0; i < string2.length; i++)
// {
//     anagram2[i] = '';
//     anagram2[i]+= string2[i];
// }

// console.log(anagram1);
// console.log(anagram2);

// var sorted1 = anagram1.sort();
// var sorted2 = anagram2.sort();

// if(sorted1.toString()== sorted2.toString()){
//     console.log("Are anagrams");
// }
// }
// }


//********************************reverse a string

// var string = "aravind";
//  var reversed = '';
// var length = string.length;
// console.log("string : "+ string);

// for (var i = length-1; i>=0; i --)
// {
   
//     reversed += string[i];
// }

// console.log("reversed string : "+ reversed);


//********************************reverse a sentence

// var string = "bob likes dogs in USA";

// function reverserSentence(string)
// {

// var length = string.length;
// console.log("string : "+ string);
// var count = 0;
//  var reversed = {
//  };
// reversed[count] = '';
// for (var i = 0 ; i < length; i++)
// {
//     reversed[count] += string[i];
//     if(string[i] == ' ')
//     {
//         count++;
//         reversed[count] = '';
//     }
// }
// var value = count;

// for(var k = value; k >=0; k--)
// {
//     console.log(reversed[k]);
// }
// }
// reverserSentence(string);

//********************************replace space with %20

// var string = "bob likes dogs in USA";

// function reverserSentence(string)
// {

// var length = string.length;
// console.log("string : "+ string);
//  var reversed = '';
// for (var i = 0 ; i < length; i++)
// {
//     if(string[i] == ' ')
//     {
//         reversed += '%20';
//     }
//     else{
//     reversed += string[i];
//     }
// }
//     console.log(reversed);
// }
// reverserSentence(string);

//***********************************without modulo

// findRemainder(9,2);
// function findRemainder(numerator, denominator){
// // var numerator = 8;
// // var denominator = 3

// while(numerator > 0)
// {
// var result = numerator - denominator;
// if( result < 0 )
//     break;
// else{
// numerator = result;
// }
// }
// console.log("Remainder is : " +numerator);
// }


//**********************************Fizzbuzz


// function fizzBuzz(number)
// {

// for (var i = 1; i <=number; i++)
// {

//     if((i % 5 == 0) && (i % 3 == 0))
//     {
//     console.log("fizzbuzz");
//     }
//     else if(i % 3 == 0)
//     {
//     console.log("buzz");
//     }
//     else if(i % 5 == 0)
//     {
//     console.log("fizz");
//     }
//     else 
//     console.log(i); 
// }

// }

// // fizzBuzz(50);

// //***************************************compress string with repeating characters in a string count %%%%%%%% NOT WORKING %%%%%%%%%%%%%

// var string = "jsavavstiiixx mnFDq   ";

// findDuplicate(string);


// function findDuplicate(string){ 
//        var duplicates = '';

// var counter = '';
// var count = ;
//  var counts = {};
//  for (var i = 0; i< string.length; i++)
//  {
   
//      for (var j = i+1; j < string.length; j++)
//      {
       
//          if(string[i] == string[j])
//          {
            
//             counts[string[i]] = ++count[i];

//             //counter += string[i] + count;
//              duplicates += string[i];
//         }

//      }
// if(duplicates == null)
// {
//     counter += string[i] + ++count;
// }
          
// }
// console.log(counts);
// console.log(duplicates);
//  }
// //***************************************find if a string is an integer 
// var string = "sjh9k";
// check(string);

// function check(string){

// 	for(var i = 0; i < string.length; i++)
// 	{
// 	var a = string.charAt(i);
// 	console.log(a);
// 	if(a > 1 && a <=9){
// 		console.log("it is an integer");
// 		break;
// 	}
// }
// }

// OR USE isNAN(string)

// *************************************exponential functions complexity O(n)

// var x = 2;
// var y= 4;

// function expAetB(x, y) {
//      product=1;
//      for (i=0; i<y; i++)
//      {
//           product=product*x;
//      }
//      console.log(product);
// };

// function ipow(x, y)
// {
//     var result = 1;
//     while (y != 0)
//     {
//         if ((y & 1) == 1)
//             result *= x;
//         console.log("shruit" + result);
//         y >>= 1;
//         x *= x;
//     }

//     console.log(result);
// }

// ipow(2, 4);
// expAetB(2,3);

// ******************************************* check if string is palindrome

// var s1 = 'army';
// var s2 = 'ymar';

// var s3 = '';
// function palindrome(s1){
// for(var i = s1.length; i >= 0; i--)
// {
// 	s3 = s3+ s1.charAt(i);

// }
// console.log(s3);
// }


// palindrome(s1);

// var zero = s3.localeCompare(s2);
// 	if(zero == 0){
// 		console.log("they are palindrome");
// 	}
// 	else{
// 		console.log("they are not palindromes");
// 	}
// //

// ************************************** without using multiplication complexity O(smaller no)

var a = 2;
var b = 3;

function multiply(a,b){

if(a > b)
{
	var product = a;
	mul(product, b);
}
else{
	product = b;
	mul(product, a);
}

}

function mul(a, b){
	for(var i = 1; i < b; i++ ){
	a += a;
}
console.log(a);
}

multiply(a, b);

/*************************************************** first non repeating character ****************************/
// function findFirstNonRepeatedChar(input_string) {
 
//     var str = input_string;

//     //check if string is empty
//     if (str.length == 0) {
//         console.log('Empty String');
//         return;
//     }

//     var hash = [];
//     var atleast_one_found = false;
//     var string_chars = Array.prototype.slice.apply(str);

//     console.log(string_chars);
 
//     for (var i in string_chars) {
//         if (typeof (hash[string_chars[i]]) != "undefined") {
//             hash[string_chars[i]]++;
//             atleast_one_found = true;
//         } else {
//             hash[string_chars[i]] = 0;
//             console.log(hash);
//         }
//     }
//     if (atleast_one_found) {
//         for (var j in hash) {
//             if (hash[j] == 0) {
//                 console.log('First non repeated char found => ' + j);
//                 return;
//             }
//         }
//     }
//     alert('No non-repeated char found');
// }

// var string = "aabcbhucut";
// findFirstNonRepeatedChar(string);

/******************************** Given an almost sorted array where only two elements are swapped, how to sort the array efficiently? **********/

// function swap (a, b) {
// 	// body...
// 	console.log("inside swap");
// 	var temp = a;
// 	a = b;
// 	b = temp;
// 	return;
// }

// function check(array)
// {
// 		console.log(array);

// 		for(var  i = array.length-1; i>=0; i--)
// 		{
// 			if(array[i] < array[i-1])
// 			{
// 				var j = i-1;
// 				while (j>=0 && array[i] < array[j])

//                 j--;

//             //swap(array[i], array[j+1]);
//             var temp = array[i];
// 	array[i] = array[j+1];
// 	array[j+1] = temp;


// 			}

// 		}
// 		console.log(array);
// }

// var array = [2,3,4,5,8,7,6,10];

// check(array);

/******************************** Two sum problem **********/

// function twoSum(numbers, target) {
//     var map = [];
//     var result = [];
 
//     for (var i = 0; i < numbers.length; i++) {
//         if (map[numbers[i]] != null) {
//             index = map[numbers[i]];
//             result[0] = index+1 ;
//             result[1] = i+1;
//             break;
//         } else {
//             map[target - numbers[i]] = i;
//         }
//     }
 
//     return result;
// }

// console.log(twoSum([1,2,3,4,5,6,7],5));

// //sorted array - we don't need to process all items in that array. Observe below code and demo

// function twoSum(numbers, target) {
//     if (numbers == null || numbers.length == 0)
//         return null;
 
//     var i = 0;
//     var j = numbers.length - 1;
 
//     while (i < j) {
//         var x = numbers[i] + numbers[j];
//         if (x < target) {
//             ++i;
//         } else if (x > target) {
//             j--;
//         } else {
//             return [i + 1, j + 1 ];
//         }
//     }
 
//     return null;
// }

// console.log(twoSum([1,2,3,4,5,6,7],5));




