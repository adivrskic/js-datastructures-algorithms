//quick sort helper function

const pivot = (arr, start=0, end=arr.length+1) => {
  const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }


  var pivot = arr[start];
  var swapIndex = start;

  for(let i = start+1; i < arr.length; i++) {
    if(pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  swap(arr, start, swapIndex);
  return(swapIndex);
}
