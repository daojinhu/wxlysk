Page({
  data: {
    phone: '',
    password: ''
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

  // 登录 
  login: function () {
    var phone = this.data.phone;
    var password = this.data.password;

    if (this.data.phone.length == 0) {
      wx.showToast({
        title: '用户名不能为空',
        icon: 'loading',
        duration: 1000
      });
      return;
    }
    if (this.data.password.length == 0) {
      wx.showToast({
        title: '密码不能为空',
        icon: 'loading',
        duration: 1000
      });
      return;
    }
    if (phone != 'admin' || password != 123) {
      wx.showToast({
        title: '',
      })
    }
      // 这里修改成跳转的页面 
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 2000
      })
  },

  //跳转到注册界面
  register: function() {
    wx.navigateTo({
      url: '../register/register',
    })
  }


})