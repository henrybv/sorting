// implement bubble sort  

var bubbleSort = function(array) {
  // var swapTimes 

  var swapped = false;

  while(!swapped) {
    debugger;
    swapped = true;
    for (var i = 1; i < array.length; i++) {
      
      var temp = array[i];

      if (array[i] < array[i-1]){
        swapped = false;
        array[i] = array[i-1]
        array[i-1] = temp;
      }

    }
    // swapped = false;
  }
  
  return array;
};

// var bubblesort = function(array) {
//     var done = false;
//     while (!done) {
//         done = true;
//         for (var i = 1; i<array.length; i++) {
//             if (array[i-1] > array[i]) {
//                 done = false;
//                 [array[i-1], array[i]] = [array[i], array[i-1]]
//             }
//         }
//     }
//     return array;
// }