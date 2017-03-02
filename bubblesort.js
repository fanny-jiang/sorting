function bubbleSort(arr){
	if (arr.length === 1) return arr;

	var retArr =[];
	for (var i =0; i < arr.length; i++){
		var first = arr[i]; 
		var second = arr[i+1]; 
		if(first>second){
			arr = arr.slice(2).unshift(second, first);
		}
	}
	console.dir(arr)
	return arr

}