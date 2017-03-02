function split(wholeArray) {

  var splitIndex = Math.floor(wholeArray.length/2);
  var firstHalf = wholeArray.slice(0, splitIndex);
  var secondHalf = wholeArray.slice(splitIndex);

  return [firstHalf, secondHalf];
}

function merge(sortedArr1, sortedArr2) {
  var mergedArr = sortedArr1.concat(sortedArr2);
  return mergedArr;
}

function mergeSort(array) {

}
