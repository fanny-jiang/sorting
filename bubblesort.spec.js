function numerically(a, b) { return a - b; };

function generateArray(size, lower, upper) {
  var randomArray = [];
  while (size--) {
    var randomNum = Math.floor(lower + Math.random() * upper);
    randomArray.push(randomNum);
  }
  return randomArray;
}

describe('Bubble Sort', function(){
  it('sorts an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('sorts an array of one element', function(){
    expect( bubbleSort([1]) ).toEqual([1]);
  });

  it('sorts an array of many elements', function(){
    expect( bubbleSort([4, 5, 2, 6, 3, 2])).toEqual([2, 2, 3, 4, 5, 6])
  })

  it('The bubble Sort returns a properly sorted Array', function(){
  	var sortedArr = bubbleSort([1, 2, 4])
    expect( sortedArr ).toEqual([1, 2, 4]);
  });

  it('The bubble Sort returns a properly sorted Array', function(){
  	var sortedArr = bubbleSort([4, 2, 1])
    expect( sortedArr ).toEqual([1, 2, 4]);
  });

  for (var i = 2; i < 103; i += 20) {
    it('sorts an array of ' + i + ' random items', function(){
      var arr = generateArray(i, 0, 100);
      var sorted = arr.slice(0).sort(numerically);
      expect( bubbleSort(arr) ).toEqual(sorted);
    });
  }

  it('compares the expected number of times', function() {
    spyOn(window, 'inOrder').and.callThrough();
    bubbleSort([4, 6, 5, 1]);
    expect(inOrder.calls.count()).toEqual(10);
  });

  it('swaps the expected number of times', function(){
    spyOn(window, 'swap').and.callThrough();
    bubbleSort([4, 6, 5, 1]);
    expect(swap.calls.count()).toEqual(4);
  });
});

