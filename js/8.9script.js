function makeTree (height) {
	
	for (var i = 0; i <= height; i++) {
		var star = '';
		for (var j = 1; j < i; j++) {
			star += '*';
		}
		console.log(star)
	}
}

makeTree(10)

// for ( wartość_inicjująca ; warunek_stopu ; modyfikacja_wartości)