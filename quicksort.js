const quickSort = (arr, left=0, right=arr.length-1) => {
  if(left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex-1);
    quickSort(arr, pivotIndex+1, right);
  }

  return arr;
}
