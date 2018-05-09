var address = require('../../../utils/address.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    provinces: [],
    province_tag:0,
    citys: [],
    city_tag: 0,
    countys: [],
    county_tag: 0,
    value: [0, 0, 0]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // //获取省市区县数据
    // area.getAreaInfo(function (array) {
    //   areaInfo = array;
    //   console.log("areaInfo", areaInfo);
    //   //获取省份数据
    //   getProvinceData(that);
    // });

    // console.log("地址", provinces, citys, countys);
    // 默认联动显示北京
    var id = address.provinces[0].id
    this.setData({
      provinces: address.provinces,
      citys: address.citys[id],
      countys: address.areas[address.citys[id][0].id],
    })
    console.log("地址信息",this.data)
  
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
   * 选择省份
   */
  selectProvinceAction:function(e){
    let that = this;
    var provinces = this.data.provinces;
    var province_tag = this.data.province_tag;
    var citys = this.data.citys;
    var countys = this.data.countys;

    var province_id = e.currentTarget.dataset.id;

    if (province_tag != province_id){
      var city_id = provinces[province_id].id
      this.setData({
        province_tag: province_id,
        value: [province_id, 0, 0],
        citys: address.citys[city_id],
        countys: address.areas[address.citys[city_id][0].id],
      });
    }

    // getCityArray(0, that);
    // getCountyArray(0, 0, that);
    // index = [id,0,0];
  },

  /**
   * 选择城市
  */
  selectCityAction:function(e){
    let that = this;
    var city_id = e.currentTarget.dataset.id;
    var city_tag = this.data.city_tag;
    var citys = this.data.citys;
    var countys = this.data.countys;
    if (city_id != city_tag) {
      var county_id = citys[city_id].id
      this.setData({
        city_tag: city_id,
        // value: [provinceNum, cityNum, 0],
        countys: address.areas[citys[city_id].id],
      })
    }
    console.log("选择城市" + that.data.city_tag);

  },
  /**
   * 选择区县
  */
  selectCountyAction:function(e){
    let that = this;
    var id = e.currentTarget.dataset.id;
    this.setData({
      county_tag: id,
    });
    // 把用户地址编码存到本地
    wx.setStorageSync('regionId', that.data.countys[id].id);
    var pages = getCurrentPages()
    var prePage = pages[pages.length - 2]  //上一个页面
    prePage.setData({
      location: that.data.countys[id].name,
      regionId: that.data.countys[id].id
    })
    wx.navigateBack({
      delta: 1,
    })
    console.log("选择区县" + that.data.county_tag);
  }
})








