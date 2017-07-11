describe('Merge Sort', function() {

  describe('split', function() {
    it('is able to split an array into two halves', function() {
      var splitArrays = split([])
      expect(splitArrays).toEqual([[], []]);
    });

    it('handles array containing even number of elements', function(){
      var splitArrays = split([8, 3, 6, 5, 4, 4])
      expect(splitArrays).toEqual([[8, 3, 6], [5, 4, 4]]);
    });

    it('handles array containing odd number of elements', function(){
      var splitArrays = split([8, 3, 6, 5, 4, 4, 2])
      expect(splitArrays).toEqual([[8, 3, 6], [5, 4, 4, 2]]);
    });

});

  describe('merge', function(){

    it('given two arrays, returns two arrays', function() {
      expect(merge([], [])).toEqual([]);
      expect(merge([1, 3, 6], [2, 4, 8])).toEqual([1, 2, 3, 4, 6, 8]);
    });

    it('is able to merge two already sorted arrays of equal length into one sorted array', function(){
      var arr1 = [1, 2, 3];
      var arr2 = [4, 5, 6];
      var mergeArrays = merge(arr1, arr2)
      expect(mergeArrays).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('works for arrays of unequal length', function(){
      expect(merge([1, 5, 10, 20, 21], [2, 4, 100])).toEqual([1, 2, 4, 5, 10, 20, 21, 100]);
    });

  });

  describe('mergeSort', function(){
    it('with 1 or fewer elements, returns sorted array', function(){
      expect(mergeSort([])).toEqual([]);
      expect(mergeSort([1000])).toEqual([1000]);
    });

    it('does the thing it\'s supposed to do', function(){
      var sorted = mergeSort([9, 1994, 18, 1, -90, 1234, 56]);
      expect(sorted).toEqual([-90, 1, 9, 18, 56, 1234, 1994]);
    });
  });

});
