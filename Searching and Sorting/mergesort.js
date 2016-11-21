var array = [34, 56, 1, 25, 54, 78, 89, 90];

//length is always equal to no. of elements
console.log("Length of the array/ No. of elements are:" + array.length);
console.log("The array is :" + array);

console.log("------------Unsorted Array---------------");

function mergeSort(data)
{
    if(data.length == 1 ) return data;
  
    var mid = data.length / 2;
    var left = data.slice(0, mid);
    var right = data.slice(mid);
  
    left = mergeSort(left);
    right = mergeSort(right);
      
    return merge(left, right);
}
  
function merge(left, right)
{
    var result=[];
    var leftIndex=0;
    var rightIndex=0;
  
    while(leftIndex<left.length && rightIndex<right.length)
    {
        if(left[leftIndex]>right[rightIndex])
        {
  
            result.push(right[rightIndex]);
            rightIndex++;
        }
        else
        {
            result.push(left[leftIndex]);
            leftIndex++;
        }
    }
    while(leftIndex<left.length)
    {
        result.push(left[leftIndex]);
        leftIndex++;
    }
    while(rightIndex<right.length)
    {
        result.push(right[rightIndex]);
        rightIndex++;
    }
    return result;
}

console.log("------------Sorted Array---------------");
console.log(mergeSort(array));
