function binarySearch(arr, val){
  let leftPtr = 0;
  let rightPtr = arr.length - 1;
    
  while(leftPtr <= rightPtr) {
      let middle = Math.floor((leftPtr + rightPtr) / 2);
      
      if(arr[middle] === val) return middle;
      if(arr[middle] < val) leftPtr = middle + 1;
      if(arr[middle] > val) rightPtr = middle - 1;
  }
  
  return -1;
}
