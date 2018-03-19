var networking = require('../../utils/networking.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userCode: "ZDWLJC",
    array: [], // 服务器数组，数组
    header_list: [
      {
        title: "接单",
        hidden:"0" // 初始默认0默认状态 1选择状态
      },
      {
        title: "调度",
        hidden: "0" // 初始默认0默认状态 1选择状态
      },
      {
        title: "在途",
        hidden: "0" // 初始默认0默认状态 1选择状态
      },
      {
        title: "交车",
        hidden: "0" // 初始默认0默认状态 1选择状态
      },
    ],
    /** 下拉刷新，下拉加载参数 */
    pageIndex: 0, // 每次触发下拉事件pageIndex=0，上拉事件pageIndex+5 默认为0
    loading: false, // "上拉加载"的变量，默认false，隐藏 
    loaded: false, //“没有数据”的变量，默认false，隐藏 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取初始化数据 
    this.gainLoadingListData()
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
    console.log("下拉刷新")
    let that = this;
    that.setData({
      pageIndex: 0, // 每次触发下拉事件pageIndex=0
    })
    that.gainLoadingListData()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("上拉加载")
    let that = this;
    that.setData({
      loading: true,  //把"上拉加载"的变量设为false，显示 
      pageIndex: that.data.pageIndex + 5

    })
    // 上拉获取更多数据
    this.gainMoreLoadingListData() 
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  /**
   * 初始化数据或是下拉刷新数据
   */
  gainLoadingListData:function() {
    let that = this;
    let pageIndex = that.data.pageIndex;
    let userCode = that.data.userCode;
    console.log("pageIndex == ", pageIndex);
    networking.gainData(userCode, pageIndex, function (data) {
      wx.stopPullDownRefresh(); // 数据请求成功后，停止刷新
      var array = data;
      that.setData({
        array: array,
      })
    }, function (message) {
      console.log("message=", message)
    })
  },

  /**
   * 上拉获取更多数据
   */
  gainMoreLoadingListData: function () {
    let that = this;
    let pageIndex = that.data.pageIndex;
    let userCode = that.data.userCode;
    console.log("pageIndex == ", pageIndex);
    networking.gainData(userCode, pageIndex, function (data) {
      if (data.length != 0) { // 数组不为空
        var array = that.data.array.concat(data);
        for (var index in array) {
          var date = new Date(array[index].orderTime)
          var y = date.getFullYear();
          var m = (date.getMonth() + 1);
          var d = date.getDate();
          var h = date.getHours();
          var mm = date.getMinutes();
          m = m > 9 ? m : '0' + m;
          d = d > 9 ? d : '0' + d;
          // h = h > 9 ? h : '0' + h;
          // mm = mm > 9 ? mm : '0' + mm;
          var dateStr = [y, m, d,].join('-');
          // var timeStr = [h, mm].join(':')
          // var format = dateStr + " " + timeStr;
          var format = dateStr
          array[index].orderTime = format;
        }
        that.setData({
          array: array,
          loading: true,  //把"上拉加载"的变量设为false，显示 
        })
      } else { // 数组为空
        that.setData({
          loading: false,  //把"上拉加载"的变量设为true，隐藏
          loaded: true,  //把"上拉加载完成"的变量设为false，显示

        })
      }

    }, function (message) {
      console.log("message=", message)
    })
  },

})