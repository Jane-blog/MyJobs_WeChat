/**
 * 加载提示: 文本提示
 * tips：加载完成后服务器返回的message
 */
function progressTips(tips) {
  wx.showToast({
    title: tips,
    icon: 'none',
    duration: 2000
  })
}

/**
 * 加载
 */
function showLoading() {
  wx.showToast({
    icon: 'loading',
    title: '加载中',
    mask: true
  })
}

/**
 * 隐藏加载
 */
function hideLoading() {
  wx.hideLoading()
}

/**
 * 时间戳转换
 */
const changeDateStamp = dateStamp => {
  var y = dateStamp.getFullYear();
  var m = (dateStamp.getMonth() + 1);
  var d = dateStamp.getDate();
  var h = dateStamp.getHours();
  var mm = dateStamp.getMinutes();
  m = m > 9 ? m : '0' + m;
  d = d > 9 ? d : '0' + d;
  var dateStr = [y, m, d,].join('-');
  var format = dateStr
  return format
}

const changeTimeStamp = timeStamp => {
  var y = timeStamp.getFullYear();
  var m = (timeStamp.getMonth() + 1);
  var d = timeStamp.getDate();
  var h = timeStamp.getHours();
  var mm = timeStamp.getMinutes();
  m = m > 9 ? m : '0' + m;
  d = d > 9 ? d : '0' + d;
  h = h > 9 ? h : '0' + h;
  mm = mm > 9 ? mm : '0' + mm;
  var dateStr = [y, m, d,].join('-');
  var timeStr = [h, mm].join(':')
  var format = dateStr + " " + timeStr;
  return format
}


module.exports = {
  progressTips: progressTips,
  showLoading: showLoading,
  hideLoading: hideLoading,
  changeDateStamp: changeDateStamp,
  changeTimeStamp: changeTimeStamp

}