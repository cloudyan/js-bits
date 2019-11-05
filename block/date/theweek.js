// 获取当年第几周
function theWeek() {
  var totalDays = 0;
  var now = new Date();
  var years = now.getYear();
  if (years < 1000){
    years += 1900;
  }
  var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  //判断是否为闰年，针对2月的天数进行计算
  if (Math.round(now.getYear() / 4) == now.getYear() / 4) {
    days[1] = 29;
  } else {
    days[1] = 28;
  }

  if (now.getMonth() == 0) {
    totalDays = totalDays + now.getDate();
  } else {
    var curMonth = now.getMonth();
    for (var count = 1; count <= curMonth; count++) {
      totalDays = totalDays + days[count - 1];
    }
    totalDays = totalDays + now.getDate();
  }
  //得到第几周
  var week = Math.round(totalDays / 7);
  return week;
}
