function merge(left,right) {
  var merged = [], 
      i = 0, 
      j = 0;

  while (left.length && right.length) {
    if (left[i] < right[j]) {
      merged.push(left[i++].shift());
    } else {
      merged.push(right[j++].shift());
    }
  }
  return merged.concat(left.slice(i)).concat(right.slice(j));
}

function split(wholeArray) {

  var center = Math.floor(wholeArray.length/2), left = [], right = [];

  left = wholeArray.slice(0, center);
  right = wholeArray.slice((center))


  return [left,right];
}

function mergeSort(array) {

  if (array.length < 2) return array;

  var left = split(array)[0];
  var right = split(array)[1];

  return merge(mergeSort(left), mergeSort(right));
  
}
  