/*** Given an almost sorted array 
where only two elements are swapped, 
how to sort the array efficiently? ****/

// function swap (array, i, j) {
// 	// body...
// 	console.log("inside swap", array, i , j);
// 	var temp = array[i];
// 			array[i] = array[j];
// 			array[j] = temp;

// 	return;
// }

function check(array)
{

		console.log('Unsorted Array is : ',array);

		for(var  i = array.length-1; i>=0; i--)
		{
			if(array[i] < array[i-1])
			{
				var j = i-1;
				while (j>=0 && array[i] < array[j])

                j--;

            //swap(array, array[i], array[j+1]);
            var temp = array[i];
			array[i] = array[j+1];
			array[j+1] = temp;


			}

		}
		console.log('Sorted Array is : ', array);
}

var array = [2,3,4,5,8,7,6,10];

check(array);