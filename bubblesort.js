function bubbleSort(arr){
	if (arr.length === 1) return arr;

	for (var j = 0; j < arr.length-1; j++) {
		for (var i = 0; i < arr.length; i++){
			var first = arr[i];
			var second = arr[i+1];
			if (first>second) {
				// arr = arr.slice(2).unshift(second, first);
				arr[i+1] = first;
				arr[i] = second;
				console.log("end of loop", arr)
			}
		}
	}
	console.log("our return array", arr)
	return arr

}
