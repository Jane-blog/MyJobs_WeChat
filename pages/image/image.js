Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*轮播图数据及其设置参数 */
    carouselImgUrls: [
      '../../images/icon_placeholder.png',
      '../../images/icon_placeholder.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    carouselImg_list:[
      {
        id:0,
        news:['TFBOYS','SHE'] //这里规定两条数据
      },
      {
        id: 1,
        news: ['王俊凯', '王源'] //这里规定两条数据
      },
      {
        id: 2,
        news: ['易烊', '千玺'] //这里规定两条数据
      },
    ]

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
   * 保存图片   
   */
  saveImageAction:function() {
    // 图片路径（网络路径url）
    let url = 'http://p29q0qqy4.bkt.clouddn.com/FqvgFxFDul-UgCjP1j6_38ya5eiW'
    // 方法一：
    wx.getImageInfo({
      src: url,
      success:function(res){
        wx.saveImageToPhotosAlbum({
          filePath: res.path,
          success: function (res){
            console.log('保存图片成功', res)

          },
          fail: function (res) {
            console.log('保存图片失败', res)
          }
        })
      },
      fail:function(res){
        console.log('获取图片失败', res)
      }
    });

    // 方法二
    // wx.downloadFile({
    //   url: url, 
    //   success: function (res) { 
    //     console.log(res)        
    //     wx.saveImageToPhotosAlbum({ 
    //       filePath: res.tempFilePath, 
    //       success: function (res) { 
    //         console.log('保存图片成功', res)
    //       }, 
    //       fail: function (res) { 
    //         console.log('保存图片失败', res)
    //       }
    //     }); 
    //   },
    //   fail: function (res) { 
    //     console.log('下载图片失败', res)
    //   }
    // })

  }

})