describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles numbers', function(){
  	var sortedArr = bubbleSort([1,2,4])
    expect( typeof sortedArr[0]).toEqual('number');
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
