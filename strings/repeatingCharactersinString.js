
//******find repeating characters in a string

var string = "jsavavstiix";

findDuplicate(string);


function findDuplicate(string){ 
            var duplicates = '';

for (var i = 0; i< string.length; i++)
{
    for (var j = i+1; j < string.length; j++)
    {
        if(string[i] == string[j])
        {
            duplicates += string[i];
        }

    }
}
console.log('Repeating characters are : ', duplicates);
}