// write specs for buble sort

describe('Bubble Sort', function(){
    var testArray = [6,9,8,2,4];
    it('handles an empty array', function(){
        expect(bubbleSort([])).toEqual([]);
    });
    it('should return the correct order of an array',function(){    
        expect(bubbleSort(testArray).toEqual([2,4,6,8,9]));
    });
    it('should call itself recursively,ly,ly',function(){
      expect(bubbleSort.calls.count()).toBeGreaterThan(4);
    });
    // it('should keep track of number of swaps',function(){

    // });

    // it('should return an array in ascending order',function(){
    //   expect(bubbleSort(testArray)).toEqual([2,4,6,8,9]);

    // });
    
});