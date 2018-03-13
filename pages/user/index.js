

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

    /**
     * 微信提供授权的公共方法
     */
    // wx.getSetting({ // 先查询一下用户是否授权了
    //   success(res){
    //     console.log("ok", res)
    //     if (!res.authSetting['scope.userInfo']) {
    //       wx.authorize({
    //         scope: 'scope.userInfo',
    //         success(res) { // 用户已经同意小程序使用微信用户信息，后续调用 wx.getUserInfo 接口不会弹窗询问
    //           console.log("允许授权")
    //           wx.getUserInfo({
    //             success(res){
    //               console.log("用户信息",res)
    //             },
    //             fail(res){

    //             }
    //           })
    //         },
    //         fail(res){ // 拒绝授权后跳转首页
    //           wx.switchTab({
    //             url: '../loading/index',
    //           })
    //           console.log("拒绝授权")
    //         }
    //       })
    //     }else {

    //     }
    //   },
    //   fail(res){
    //     console.log("no", res)
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
    
    /**
    * 私人定制授权方法
    */
    var isAuthorize = wx.getStorageSync("isAuthorize")//初始时，未存任何数据为空字符串
    console.log("isAuthorize", isAuthorize, typeof (isAuthorize))

    if (isAuthorize.length == 0) { // 第一次启动询问是否授权
      wx.getSetting({ // 先查询一下用户是否授权了
        success(res) {
          console.log("ok", res)
          if (!res.authSetting['scope.userInfo']) {
            wx.authorize({
              scope: 'scope.userInfo',
              success(res) { // 用户已经同意小程序使用微信用户信息，后续调用 wx.getUserInfo 接口不会弹窗询问
                console.log("允许授权")
                wx.getUserInfo({
                  success(res) {
                    console.log("用户信息", res)
                  },
                  fail(res) {

                  }
                })
              },
              fail(res) { // 拒绝授权后跳转首页
                wx.setStorageSync('isAuthorize', "false")
                wx.switchTab({
                  url: '../loading/index',
                })
                console.log("拒绝授权")
              }
            })
          } else {

          }
        },
        fail(res) {
          console.log("no", res)
        }
      })
    }else { // 第一次启动询问是否授权
      var user = false;
      if (!user ){// 用户未登录
        wx.openSetting({
          success(res) {
            if (!res.authSetting['scope.userInfo']) {
              wx.authorize({
                scope: 'scope.userInfo',
                success(res) {
                  wx.checkSession({
                    success(res) {
                    },
                    fail(res) {
                      //登录态过期,重新登录
                      wx.login({
                        // 登陆后存贮用户信息,
                        success(res){
                          wx: wx.navigateBack({
                            delta: 1,
                          })
                        }
                      })
                    }
                  })
                },
                false(res) {

                }
              })
            }
          },
          fail(res) {

          }
        })
      }
    }

    // if (!isAuthorize && authorize.length==0) { // 拒绝授权了，需要重新授权
     
      
    // } else { // 未拒绝
    //   console.log("第二次进入")

    // }
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