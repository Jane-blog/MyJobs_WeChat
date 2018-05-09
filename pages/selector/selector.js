var address = require('../../utils/address.js')


Page({

  /**
   * 页面的初始数据
   */
  data: {
    regionId: '',
    location: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
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
    console.log("位置信息", this.data.regionId, this.data.location, );
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
    
  },

  /**
   * 三级联动地址选择
   */
  selector1Action:function(){
    wx.navigateTo({
      url: '/pages/selector/picker/picker',
    })
  },

  /**
   * 三级分选地址选择
   */
  selector2Action: function () {
    wx.navigateTo({
      url: '/pages/selector/city/city',
    })
  }

})