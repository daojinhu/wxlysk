// // pages/register/register.js
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
  
//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {
  
//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {
  
//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {
  
//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {
  
//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {
  
//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {
  
//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {
  
//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {
  
//   }
// })
Page({
  data: {
    phone: '',
    password: '',
    confimePwd: ''
  },

  // 获取输入账号 
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },

  // 获取输入密码 
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  //获取确认密码
  confimePwdInput: function(e) {
    this.setData({
      confimePwd: e.datail.value
    })
  },

  //注册
  register: function () {
    if(this.data.phone.length == 0) {
      wx.showToast({
        title: '用户名不能为空！',
        icon: 'loading',
        duration: 1000
      });
      return;
    }
    if (this.data.password.length == 0) {
      wx.showToast({
        title: '密码不能为空！',
        icon: 'loading',
        duration: 1000
      });
      return;
    }
    if (this.data.confimePwd.length == 0) {
      wx.showToast({
        title: '确认密码不能为空！',
        icon: 'loading',
        duration: 1000
      });
      return;
    }
  }

  

})