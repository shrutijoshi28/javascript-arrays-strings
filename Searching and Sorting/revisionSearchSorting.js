
/************************Sequential Search******************/
// var array = [1,3,10,2,8,9,4,7];
// var searchElement = 10;

// sequentialSearch(array, searchElement);

// function sequentialSearch(array, searchElement){
// 	console.log("Unsorted Array :" + array);
// 	console.log("Find :" + searchElement);
// 	var found = false;
// 	for(var i = 0; i< array.length; i++)
// 	{
// 		if(array[i] === searchElement)
// 		{
// 			found = true;
// 			console.log("Element " + searchElement+" found at " + i);
// 		}
// 	}
// 	if(!found){
// 		console.log("Element " + searchElement+" not found");
// 	}
// }

/************************Binary Search******************/
// var array = [1,3,5,8,9,10,12,18,25,30];
// var searchElement = 10;

// binarySearch(array, searchElement);


// function binarySearch(array, searchElement){
// 	var found = false;
// 	console.log("Unsorted Array :" + array);
// 	console.log("Find :" + searchElement);

// 	var min = 0;
// 	var max = array.length-1;
	
// 	while(min <= max){
// 	var middle = parseInt((min + max)/2);
// 	if(searchElement === array[middle]){
// 		found = true;
// 		console.log("Element " + searchElement+" found at " + middle);
// 		break;
// 	}
// 	if(searchElement < array[middle]){
// 		max= middle-1;
// 	}
// 	if(searchElement > array[middle]){
// 		min =middle+1;
// 	}
// }
// 	if(!found){
// 		console.log("Element " + searchElement+" not found");
// 	}
// }

/**********************************************************************/
/************************* S O R T I N G ******************************/
/**********************************************************************/

/************************Bubble Sort******************/

// var array = [9, 10, 2,4,5,11,6,3,1];

// bubbleSort(array);
// function bubbleSort(array){
// 	console.log("Unsorted Array :" + array);
// 	var swapped;
// 	do{
// 		swapped = false;
// 		for(var i = 0; i<array.length-1; i++)
// 		{
// 			if(array[i]>array[i+1])
// 			{
// 				var temp = array[i];
// 				array[i] = array [i+1];
// 				array[i+1] = temp;
// 				swapped = true;
// 			}
// 		}
// 	}while(swapped == true)
// 	console.log(array);
// }

/******************************************/

/************************Selection Sort******************/

// var array = [9, 10, 2,4,5,11,6,3,1];

// selectionSort(array);
// function selectionSort(array){
// 	console.log("Unsorted Array :" + array);
// 	for(var i=0; i< array.length-1; i++)
// 	{
// 		var min = i;
// 		for(var j= i+1; j< array.length; j++){
// 			if(array[min]> array[j])
// 			{
// 				min = j;
// 			}
// 		}
// 		if(min != i)
// 		{
// 			var temp = array[i];
// 			array[i] = array[min];
// 			array[min] = temp;
// 		}
// 	}
// 	console.log(array);
// }

/******************************************/

