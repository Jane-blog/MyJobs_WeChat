Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id:"load",
        name:"下拉刷新，上拉加载",
        page: "loading"
      },
      {
        id: "load",
        name: "上拉加载,获取更多",
        page: "loadmore"
      },
      {
         id: "switch",
        name: "组件切换时改变样式",
        page: "switch"
      },
      {
        id: "tooltip",
        name: "提示框",
        page: "tooltip"
      },
      {
        id: "scancode",
        name: "扫码",
        page: "scancode"
      },
      {
        id: "selector",
        name: "选择器",
        page: "selector"
      },
      {
        id: "location",
        name: "定位",
        page: "location"
      },
      {
        id: "timer",
        name: "计时器",
        page: "timer"
      }
      ,
      {
        id: "image",
        name: "图片",
        page: "image"
      }
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
    
  }
})