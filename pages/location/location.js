var bmap = require('../../libs/bmap-wx.min.js');
var wxMarkerData = [];
var util = require('../../utils/util.js');  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    location:'',
    weatherData:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    util.showLoading();
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: 'iXW1A0KigX7K5LBrhnq9GK2ETmnKGSGB'
    });
    // 发起weather请求 
    BMap.weather({
      success: function (data) {
        // console.log("获取位置天气成功：", data)
        var weatherData = data.currentWeather[0];
        weatherData = weatherData.currentCity + '\t' + weatherData.wind + '\n' + weatherData.weatherDesc + '\t' + weatherData.temperature;
        var location = data.currentWeather[0].currentCity;
        that.setData({
          weatherData: weatherData,
        });
        util.hideLoading();
      },
      fail: function (data) {
        console.log("获取位置天气失败：", data)
      }
    });

    // 发起regeocoding检索请求
    BMap.regeocoding({
      success: function (data) {
        // 返回数据内，已经包含经纬度
        var address = data.originalData.result.addressComponent;
        console.log("定位信息--province--city--district", data, address.province, address.city, address.district);

        that.setData({
          location: data.originalData.result.formatted_address,
        });


      }, fail: function (data) {
        console.log(data);
      }
    });
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