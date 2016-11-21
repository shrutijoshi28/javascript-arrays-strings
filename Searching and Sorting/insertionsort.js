var array = [34, 56, 1, 25, 54, 78, 89];

console.log(array);
console.log("------------Unsorted Array---------------");

function insertionsort(array){
for (var i = 0; i< array.length; i++)
{

	var tmp = array[i]; //Copy of the current element.
	console.log(tmp);
    /*Check through the sorted part and compare with the 
    number in tmp. If large, shift the number*/
    for(var j = i - 1; j >= 0 && (array[j] > tmp); j--) {

    	console.log("here" +array[j]);
      //Shift the number
      array[j+1] = array[j];
    }
    //Insert the copied number at the correct position
    //in sorted part.
    array[j+1] = tmp;
  }
}


insertionsort(array);

console.log("------------Sorted Array---------------");
console.log(array);