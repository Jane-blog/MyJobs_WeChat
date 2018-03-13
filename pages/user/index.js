Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({ // 先查询一下用户是否授权了
      success(res){
        console.log("ok", res)
        if (!res.authSetting['scope.userInfo']) {
          wx.authorize({
            scope: 'scope.userInfo',
            success(res) { // 用户已经同意小程序使用微信用户信息，后续调用 wx.getUserInfo 接口不会弹窗询问
              console.log("允许授权")
              wx.getUserInfo({
                success(res){
                  console.log("用户信息",res)
                },
                fail(res){

                }
              })
            },
            fail(res){
              wx.switchTab({
                url: '../loading/index',
              })
              console.log("拒绝授权")
            }
          })
        }
      },
      fail(res){
        console.log("no", res)
      }
    })
    
    // wx.getSetting({ // 可以通过 wx.getSetting 先查询一下用户是否授权了 
    //   success(res) {
    //     console.log("res == ", res)
    //     if (!res.authSetting['scope.userInfo']) { // 查看是否授权用户信息
    //       wx.authorize({   // 用户授权提示框
    //         scope: 'scope.userInfo',
    //         success(e) {  // 用户允许授权
    //           console.log("允许授权 =", e)
    //           wx.login({  // 调用登录api,获取用户信息
    //             success: function (res) {
    //               if (res.code) {
    //                 console.log('获取用户信息', res.code)

    //                 //发起网络请求
    //                 wx.request({
    //                   url: 'https://haolemai.com/login',
    //                   data: {
    //                     code: res.code
    //                   },
    //                   success(res){
    //                     console.log('后台返回的用户信息', res.code)

    //                   },
    //                   fail(res) {
    //                     console.log("报错 =", res.errMsg)
    //                   }
    //                 })

    //               } else {
    //                 console.log('获取用户登录态失败！' , res.errMsg)
    //               }
    //             }
    //           });
    //         },
    //         fail() {
    //           console.log("拒绝授权 =",e)
    //         }
    //       })  
    //     }
    //   },
    //   fail(res){
    //     console.log("res == ", res)
    //   }
    // })
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