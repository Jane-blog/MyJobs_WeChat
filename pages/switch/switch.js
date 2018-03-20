var networking = require('../../utils/networking.js');
var util = require('../../utils/util.js');  

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 数据列表
    list:[

      {
        id:0,
        title:"36",
        stock:10
      },
      {
        id: 1,
        title: "37",
        stock: 0
      },
      {
        id: 2,
        title: "38",
        stock: 0
      },
      {
        id: 3,
        title: "39",
        stock: 10
      },
      {
        id: 4,
        title: "40",
        stock: 6
      },
      {
        id: 5,
        title: "41",
        stock: 10
      },
      {
        id: 6,
        title: "42",
        stock: 10
      },
      {
        id: 7,
        title: "43",
        stock: 10
      },
      {
        id: 8,
        title: "44",
        stock: 0
      },
    ],
    // 当前选中的号码
    current_tag:null,
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
   * 库存为0，不可选
   */
  clickedBtn: function (responseObject) {
    util.progressTips("补货中，请耐心等待")
    let that = this;
    var id = responseObject.currentTarget.dataset.id;  //获取自定义的ID值 
    console.log("current_tag", id)
    this.setData({
      current_tag: id,
    })
  },

  /**
   * 库存大于0，可选，选中变色
   */
  clickedAction: function (responseObject){
    let that = this;
    var id = responseObject.currentTarget.dataset.id;  //获取自定义的ID值 
    console.log("current_tag", id)
    this.setData({
      current_tag: id,
    })
  }

})