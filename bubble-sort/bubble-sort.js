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

function swap(array,index1,index2) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function bubbleSort(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length-1; j++) {
      if (array[j] > array[i]) {
        swap(array,j,j+1);
      }
    }
  }
  return array;
}