function findLength(string){
	
	console.log(string);

	var length = string.length;


var map = [];
	var map = {'#' : 0, '*' : 0};

	var result = 0;

	console.log(map['#']);

	for(var i = 0 ; i < length; i ++)
	{


		map[i] = {'#' = 0, '*' = 0};

		if(string[i] === '#'){
			countHash = map['#'];
			countHash++;

			console.log(countHash);
			map[string[i]] = countHash;
			if(map[i]['#']){
				map[i]['#'] = countHash;
			}

		}
		else if(string[i] === '*'){
			countHash = map['*'];
			countHash++;

			console.log(countHash);
			map[string[i]] = countHash;

if(map[i]['*']){
				map[i]['*'] = countHash;
			}

		}


		if( (i+1) % 2 === 0 ){

			console.log('inside if', i);
				var cstar = map['*'];
				var chash = map['#'];

				console.log(cstar, 'count of stars');
				console.log(chash, 'count of ashes');


				if(cstar === chash){
					console.log(i, 'here they are equal');
					result = cstar + chash;
				}
				else{

					var map[i] = {'#' : 0, '*' : 0};
				}
		}


	}

	// if(result === 0){

	// 	if(map['#'] < map['*']){
	// 		result = map['#'] * 2;
	// 	}
	// 	else{
	// 		result = map['*'] * 2;
	// 	}
	// }

console.log(map);
console.log('length of longest substring', result);

}


var string = '**#*##';

findLength(string);