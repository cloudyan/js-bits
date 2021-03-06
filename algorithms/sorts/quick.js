
/**
 * 快速排序
 *
 * 大致分三步：
 * 1、找基准（一般是以中间项为基准）
 * 2、遍历数组，小于基准的放在left，大于基准的放在right
 * 3、递归
**/

function quickSort(arr){
  //如果数组<=1,则直接返回
  var len = arr.length;
  if(len <= 1){
    return arr;
  }
  var pivotIndex = Math.floor(len/2);
  //找基准，并把基准从原数组删除
  var pivot = arr.splice(pivotIndex, 1)[0];
  //定义左右数组
  var left = [],
      right = [];

  //比基准小的放在left，比基准大的放在right
  for(var i=0; i<len; i++){
    if(arr[i] <= pivot){
      left.push(arr[i]);
    }else{
      right.push(arr[i]);
    }
  }
  //递归
  return quickSort(left).concat([pivot], quickSort(right));
}

var testArr = [2,6,3,5,9,6,8,4,1,7];
quickSort(testArr);
