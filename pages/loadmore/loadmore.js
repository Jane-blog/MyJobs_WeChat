var networking = require('../../utils/networking.js');
var util = require('../../utils/util.js');  

Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [], // 服务器数组，数组
    loading: false, //"上拉加载"的变量，默认false，隐藏  
    loaded: false, //“没有数据”的变量，默认false，隐藏 
    isLoading: true,  //第一次加载，设置true ,进入该界面时就开始加载
    pageIndex: 0, // 每次触发上拉事件，把pageIndex+5  默认为0
    userCode: "ZDWLJC",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取数据 
    this.gainMoreData() 
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
    let that = this;

    that.setData({
      isLoading: false, // 上拉触发后，不再是初始数据加载，按页码加载
      loading: true,  //把"上拉加载"的变量设为false，显示 
      pageIndex: that.data.pageIndex + 5

    })
    //获取数据 
    this.gainMoreData() 
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  /**
   * 获取数据
   */
  gainMoreData:function () {
    let that = this;
    let pageIndex = that.data.pageIndex;
    let userCode = that.data.userCode;
    console.log("pageIndex == ", pageIndex);
    util.showLoading();
    networking.gainData(userCode, pageIndex, function (data) {
      if (data.length != 0) { // 数组不为空
        console.log("数组不为空")
        var array = [];
        // 初始加载的时候不添加，第二次加载加上新的数据
        that.data.isLoading ? array = data : array = that.data.array.concat(data)
        for (var index in array) {
          var date = new Date(array[index].orderTime)
          var time = new Date(array[index].currentStatusTime)
          array[index].orderTime = util.changeDateStamp(date)
          array[index].currentStatusTime = util.changeTimeStamp(time)
        }
        if (that.data.isLoading) {
          console.log("isLoading=", that.data.isLoading)
          that.setData({
            array: array,
            // loading: true,  //把"上拉加载"的变量设为false，显示 
          })
        } else {
          console.log("isLoading=", that.data.isLoading)
          that.setData({
            array: array,
            loading: true,  //把"上拉加载"的变量设为false，显示 
            isLoading: false // 初始后都不是第一次上拉
          })
        }

      } else { // 数组为空
        console.log("数组为空")
        that.setData({
          loading: false,  //把"上拉加载"的变量设为true，隐藏
          loaded: true,  //把"上拉加载完成"的变量设为false，显示

        })
      }
      util.hideLoading();
    }, function (data) {
      util.progressTips(message)

    });
  }
})