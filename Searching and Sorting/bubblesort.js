var array = [34, 56, 1, 25, 54, 78, 89];

//length is always equal to no. of elements
console.log("Length of the array/ No. of elements are:" + array.length);
console.log(array);
console.log("------------Unsorted Array---------------");

function bubblesort(a){
var swapped;
do{
swapped = false

for(var i = 0; i < a.length; i++){
if(a[i]>a[i+1])
{
	var temp = a[i];
	a[i] = a[i+1];
	a[i+1] = temp;
	swapped = true;
}
	
}
console.log(array);
}while (swapped == true); 
}

bubblesort(array);
console.log("------------Sorted Array---------------");
console.log(array);


