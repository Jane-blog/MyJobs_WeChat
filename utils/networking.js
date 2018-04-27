
function gainData(userCode, pageIndex, success, fail) {
  wx.request({
    url: "",//接口地址  
    method: 'POST',
    data: {
      userCode: userCode,
      offset: pageIndex
    },
    header: {
      'content-type': 'application/json'
    },
    success: function (res) {
      if (res.data.status == 0) {
        success(res.data.data)
      } else {
        success(res.data.message)
      }

    },
    fail: function (res) {
      fail(res.data.message);
    }
  })
}

module.exports = {
  gainData: gainData
}