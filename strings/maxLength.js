function findLength(string)
{
    var length = string.length;
    var maxlen = 0; //initialize the length to 0

    console.log(length);
 
    // Choose starting point of every substring
    for (var i=0; i<length; i++)
    {
        // Choose ending point of even length substring
        for (var j =i +1; j<length; j += 2)
        {
            var length = j-i+1;//Find length of current substr
 
            // Calculate left & right sums for current substr
            var leftsum = 0, rightsum =0;
            for (var k =0; k<length/2; k++)
            {
                leftsum  += (string[i+k]-'0');
                rightsum += (string[i+k+length/2]-'0');
            }
 
            // Update result if needed
            if (leftsum == rightsum && maxlen < length)
                    maxlen = length;
        }
    }
    return maxlen;
}



var string = '##!!';
findLength(string);