describe('Merge Sort', function(){
   it('is able to merge two sorted arrays', function(){
       // test the merging algorithm
       expect(merge([1,2,3,4], [6,7,8,9])).toEqual([1,2,3,4,6,7,8,9]);

   });
});

describe('Split Array function', function() {
 it('is able to split an array into two halves', function() {
   expect(split([1,2,3,4,5,6,8,9])).toEqual([[1,2,3,4], [5,6,8,9]]);
 });
 //Test SPec for odd number
});

// write test spec for mergeSort
describe('mergeSort function', function(){
  it('should be able to sort an array.',function(){
    expect(mergeSort([2,1,8,5,9,10,4])).toEqual([1,2,4,5,8,9,10]);
  });

});

