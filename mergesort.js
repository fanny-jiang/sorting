'use strict';

function split(array) {

  var splitIndex = array.length / 2;
  var left = array.slice(0, splitIndex);
  var right = array.slice(splitIndex);

  return [left, right];
}

function merge(left, right) {
  var mergedArr = [],
      leftIndex = 0,
      rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
    mergedArr.push(left[leftIndex]);
    leftIndex++;
    } else {
      mergedArr.push(right[rightIndex]);
      rightIndex++;
    }
  }
  for (; leftIndex < left.length; leftIndex++) mergedArr.push(left[leftIndex]);
  for (; rightIndex < right.length; rightIndex++) mergedArr.push(right[rightIndex]);
  return mergedArr;
}

function mergeSort(array) {
  // base case: if the array length is less than two, return the array
  if (array.length < 2) return array;

  var splits = split(array),
      left = splits[0],
      right = splits[1];

  return merge(mergeSort(left), mergeSort(right)); // merge sorted!
}

