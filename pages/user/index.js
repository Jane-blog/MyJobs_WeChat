var util = require('../../utils/util.js');  
var interval = null //倒计时函数

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: '', 
    authcode: '',
    time: '获取验证码', //倒计时 
    currentTime: 60,//限制60s
    isClick:false,//获取验证码按钮，默认允许点击
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
    
  },

  /**
   * 用户名和密码 
   * */
  usernameInput: function (event) {
    // console.log("username==",event.detail.value)
    this.setData({ username: event.detail.value })
  },

  passwordInput: function (event) {
    // console.log("password==", event.detail.value)
    this.setData({ password: event.detail.value })
  },

  authcodeInput: function (event) {
    // console.log("password==", event.detail.value)
    this.setData({ authcode: event.detail.value })
  },

  /**
   * 获取验证码
   */
  gainAuthCodeAction:function(){
    let that = this;
    /*第一步：验证手机号码*/
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;// 判断手机号码的正则
    if (that.data.username.length == 0) {
      util.progressTips('手机号码不能为空')
      return;
    }

    if (that.data.username.length < 11) {
      util.progressTips('手机号码长度有误！')
      return;
    }

    if (!myreg.test(that.data.username)) {
      util.progressTips('错误的手机号码！')
      return;
    }
    /*第二步：设置计时器*/
    // 先禁止获取验证码按钮的点击
    that.setData({
      isClick: true,
    })
    // 60s倒计时 setInterval功能用于循环，常常用于播放动画，或者时间显示
    var currentTime = that.data.currentTime;
    interval = setInterval(function(){
      currentTime--;//减
      that.setData({
        time: currentTime + '秒后获取'
      })
      if (currentTime <= 0) {
        clearInterval(interval)
        that.setData({
          time: '获取验证码',
          currentTime: 60,
          isClick: false
        })
      }
    },1000);
    /*第三步：请求验证码接口，并记录服务器返回的验证码用于判断，这里服务器也可能不返回验证码，那验证码的判断交给后台*/
    // wx.request({})
  },

  /**
   * 登录
   */
  loginBtnClick: function () {
    let that = this;
    // 判断账户、密码、验证码
    // wx.request({})
  }
})