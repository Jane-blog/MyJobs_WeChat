Page({

  /**
   * 页面的初始数据
   */
  data: {
    day:0,//天
    hour: 0,//时
    minute: 0,//分
    second: 0,//秒
    countDown: 1541540080,//活动倒计时时间，可以自定义，也可以从服务器获取，测试的时候自己手动改到比当前时间的时间戳大的数值就可以看
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    // 获取当前时间的时间戳
    var timestamp = Date.parse(new Date()) / 1000;
    console.log('timestamp', timestamp);
    // 剩余的倒计时
    var restTime = that.data.countDown - Date.parse(new Date()) / 1000;
    var interval = setInterval(function () {
      // 总秒数
      var second = restTime;

      // 天数位
      var day = Math.floor(second / 3600 / 24);
      var dayStr = day.toString();
      if (dayStr.length == 1) {
        dayStr = '0' + dayStr
      }

      // 小时位
      var hr = Math.floor((second - day * 3600 * 24) / 3600);
      var hrStr = hr.toString();
      if (hrStr.length == 1) {
        hrStr = '0' + hrStr
      }

      // 分钟位
      var min = Math.floor((second - day * 3600 * 24 - hr * 3600) / 60);
      var minStr = min.toString();
      if (minStr.length == 1) {
        minStr = '0' + minStr
      }

      // 秒位
      var sec = second - day * 3600 * 24 - hr * 3600 - min * 60;
      var secStr = sec.toString();
      if (secStr.length == 1) {
        secStr = '0' + secStr
      }

      that.setData({
        day: dayStr,
        hour: hrStr,
        minute: minStr,
        second: secStr,
      });

      // 自减
      restTime --;

      if (restTime < 0) {
        clearInterval(interval);
        wx.showToast({
          title: '活动已结束',
        });
        this.setData({
          day: '00',
          hour: '00',
          minute: '00',
          second: '00',
        });
      }
    }.bind(that), 1000);

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})