var array = [34, 56, 1, 25, 54, 78, 89];

console.log(array);
console.log("------------Unsorted Array---------------");

function selectionSort(items) {
      var length = items.length;
      
      for (var i = 0; i < length-1; i++) { //Number of passes
        var min = i; //min holds the current minimum number position for each pass; i holds the Initial min number
        for (var j = i+1; j < length; j++) { //Note that j = i + 1 as we only need to go through unsorted array
          if(items[j] < items[min]) { //Compare the numbers
            min = j; //Change the current min number position if a smaller num is found
          }
        }
        if(min != i) { //After each pass, if the current min num != initial min num, exchange the position.
          //Swap the numbers
          var tmp = items[i];
          items[i] = items[min];
          items[min] = tmp;
        }
        console.log(items);
      }
    }

selectionSort(array);
console.log("------------Sorted Array---------------");
console.log(array);
