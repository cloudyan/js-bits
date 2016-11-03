
/**
 * 生成随机数
**/


function fRandomBy(min, max){
  switch(arguments.length){
    case 1: return parseInt(Math.random() * min + 1);
    case 2: return parseInt(Math.random() * (max - min + 1) + min);
    default: return 0;
  }
}


// test
// 1-10以内随机数，包含10（要用0-9，使用双参数0, 9）

var randomNum;
for(var i = 0; i < 10; i++){
  randomNum = fRandomBy(10);
  // randomNum = fRandomBy(0, 9);
  // randomNum = fRandomBy(3, 8);
  console.log(randomNum);
}
