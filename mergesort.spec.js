describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    var splitArrays = split([8,3,6,5,4,4])
    expect (splitArrays).toEqual([[8,3,6],[5,4,4]]);
  });

  it('handles array containing odd number of elements', function(){
  	var splitArrays = split([8,3,6,5,4,4,2])
    expect (splitArrays).toEqual([[8,3,6],[5,4,4,2]]);
  });

})

describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    var arr1 = [1,2,3];
    var arr2 = [4,5,6];
    var mergeArrays = merge(arr1, arr2)
    expect(mergeArrays).toEqual([1,2,3,4,5,6]);
  });

  it('The bubble Sort returns a properly sorted Array', function(){
  	var sortedArr = bubbleSort([1,2,4])
    expect( sortedArr ).toEqual([1,2,4]);
  });

  it('The bubble Sort returns a properly sorted Array', function(){
  	var sortedArr = bubbleSort([4,2,1])
    expect( sortedArr ).toEqual([1,2,4]);
  });

})
