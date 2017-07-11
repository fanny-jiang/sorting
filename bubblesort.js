'use strict';

function bubbleSort(arr){
// if we ever make a swap, we know we have to continue making passes
// but if we never make a swap, then we should stop doing passes bc we know the array is sorted.
	var sorted = false;

  for (var end = arr.length; end > 0 && !sorted; end--) { // passes through the array
		sorted = true;
		for (var j = 0; j < end; j++){ // bubbling and comparing the values
			if (!inOrder(arr, j)) {
				swap(arr, j);
				sorted = false;
			}
		}
	}
	return arr;
}

function inOrder(array, index) {
	if (index === array.length - 1) return true;
	return array[index] < array[index + 1];
}

function swap(array, index) {
	var oldLeftVal = array[index]; // capture the old left value
	array[index] = array[index + 1]; // Swap! set the new left value to its neighbor
	array[index +1] = oldLeftVal; // set the neighbor to the old left value
}
