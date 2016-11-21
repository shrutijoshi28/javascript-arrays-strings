
//***************************************find repeating characters in a string

// var string = "jsavavst";

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


// //find if two strings are anagrams

// var string1 = "mary";
// var string2 = "army";

// checkAnagrams(string1, string2);



// function checkAnagrams(string1, string2){
// var n1= string1.length;
// var n2= string2.length;
// console.log(string1[0]);
// if(string1.length == string2.length)
// {
//      var strins = string1.sort();
//      console.log(strins);
//  }
// else{
//     console.log("These cannot be anagrams!");
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

//without modulo

findRemainder(21,5);
function findRemainder(numerator, denominator){
// var numerator = 8;
// var denominator = 3

while(numerator > 0)
{
var result = numerator - denominator;
if( result < 0 )
    break;
else{
numerator = result;
}
}
console.log("Remainder is : " +numerator);
}





