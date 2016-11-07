
/**
 * 冒泡排序
 *
 * 冒泡排序的思想是
 * 比较相邻两个数，如果前者大于后者，就把两个数交换位置；
 * 这样一来，第一轮就可以选出一个最大的数放在最后面；
 * 那么经过n-1轮，就完成了所有数的排序
**/

function bubbleSort(arr){
  var len = arr.length, j;
  var temp;
  while(len > 0){
    for(j = 0; j < len-1; j++){
      if(arr[j] > arr[j+1]){
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
    len--;
  }
  return arr;
}

var testArr = [2,6,3,5,9,6,8,4,1,7];
bubbleSort(testArr);
