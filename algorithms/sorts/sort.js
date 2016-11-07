
/**
 * 插入排序
 *
 * 插入排序的思想是：
 * 插入排序是在一个已经有序的小序列的基础上，一次插入一个元素。
 * 刚开始这个小序列只包含第一个元素，事件复杂度O(n2)。
 * 比较是从这个小序列的末尾开始的。想要插入的元素和小序列的最大者开始比起，
 * 如果比它大则直接插在其后面，否则一直往前找它该插入的位置。
**/


function sortInsert(array){
  var i=1,j,len=array.length,key;
  for(;i<len;i++){
    j=i;
    key=array[j];
    while(--j>-1){
      if(array[j]>key){
        array[j+1]=array[j];
      }
      else
      {
         break;
      }
    }
    array[j+1]=key;
  }
  return array;
}

var testArr = [2,6,3,5,9,6,8,4,1,7];
sortInsert(testArr);
