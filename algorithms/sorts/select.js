
/**
 * 选择排序
 *
 * 选择排序的思想是：
 * 把每一个数都与第一个数比较，如果小于第一个数，就把它们交换位置；
 * 这样一轮下来，最小的数就排到了最前面；
 * 重复n-1轮，就实现了选择排序
 *
 * 选择排序和冒泡排序思想上有些相近
**/

function selectSort(arr){
  var len = arr.length;
  var temp;
  for(var i = 0; i < len-1; i++){
    for(var j = i+1; j < len; j++){
      if(arr[j] < arr[i]){
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
    i++;
  }
  return arr;
}

var testArr = [2,6,3,5,9,6,8,4,1,7];
bubbleSort(testArr);
