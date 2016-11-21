function binarySearch(array, targetValue) {
    var min = 0;
    var max = array.length - 1;
    var median;
    console.log(targetValue);

    while(min <= max) {
        median = Math.floor((max + min) / 2);

        if (array[median] === targetValue) {
            console.log("the element " +array[guess]+ " is at " + guess+ "th position");
            break
        }
        else if (array[median] < targetValue) {
            min = median + 1;
        }
        else {
            max = median - 1;
        }

    }

    return -1;
}

var array = [3,4,5,6,7,8,9,12,14,19,20];
var find = 12;

binarySearch(array, find);