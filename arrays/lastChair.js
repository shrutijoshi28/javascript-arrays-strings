function getLastChair(chairs){
    var iteration = 0;
    var skip = 0;
    //until we have one chair left
    while (chairs.length > 1) {
        chairs.splice(skip, 1);
        //calculate skip in each iteration
        //eg:- skip = 0 + 1 + 0 % 99 = 
        skip = (skip + 1 + iteration) % chairs.length;
        iteration++;
        //console.log(chairs);
    }
    return chairs;
}

function addChairs(countOfChair){   
    var chairs = []; 
    for(var i = 1; i<= countOfChair; i++){
        chairs.push(i);
    }
    return chairs;
}

var arrayOfChairs = addChairs(100);
var lastChair = getLastChair(arrayOfChairs);

console.log(lastChair, "is the last chair");