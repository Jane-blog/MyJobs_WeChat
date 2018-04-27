var networking = require('../../utils/networking.js');
var util = require('../../utils/util.js');  

Page({

  /**
   * 页面的初始数据
   */
  data: {
    modalHidden: true,
  },


  modalConfirm: function (e) {
    let that = this;
    console.log("确定")
    wx.openSetting({
      success(res){
        console.log("授权情况", res);
        if (res.authSetting["scope.userInfo"] && res.authSetting["scope.userLocation"] ) {
          console.log("授权用户信息了");
          that.setData({
            modalHidden: true
          })
        }else{
          console.log("还是拒绝授权用户信息了");
          that.setData({
            modalHidden: false
          })
        }
      },fail(res){
        console.log("重新授权失败了", res);
        that.setData({
          modalHidden: false
        })
      }
    })

  },
  modalCancel: function (e) {
    console.log("取消")
    this.setData({
      modalHidden: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    // 可以通过 wx.getSetting 先查询一下用户是否授权了
    wx.getSetting({
      success(res) {
        console.log("查看授权情况", res);
        if (!res.authSetting['scope.userInfo']) {
          console.log("用户信息授权");
          wx.authorize({
            scope: 'scope.userInfo',
            success(res) {
              console.log("授权成功",res)
              util.progressTips(res.errMsg)
            },fail(res){
              console.log("授权失败", res)
              util.progressTips(res.errMsg)
              that.setData({
                modalHidden: false
              })

            }
          })
        } 
        if (!res.authSetting['scope.userLocation']) {
          console.log("地理位置授权");
            wx.authorize({
              scope: 'scope.userLocation',
              success(res) {
                console.log("授权成功", res)
                util.progressTips(res.errMsg)
              }, fail(res) {
                console.log("授权失败", res)
                util.progressTips(res.errMsg)
                that.setData({
                  modalHidden: false
                })

              }
            })
        }
      }
    })

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