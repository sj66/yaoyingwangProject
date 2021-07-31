// pages/login/login.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    phone:'',
    password:''
  },
  // 获取输入账号
  phoneInput:function(e){
    this.setData({
      phone:e.detail.value
    });
  },
  // 获取输入密码
  passwordInput: function (e) {
    this.setData({ 
      password: e.detail.value 
    });
  },
  // 忘记密码
  onforget:function(){
    wx.navigateTo({
      url: '/pages/password/index',
    })
  },
  // 注册
  onregister:function(){
    wx.navigateTo({
      url: '/pages/register/index',
    })
  },
  // 登录
  login:function(){
    wx.request({
      url: 'https://yaoying.hulukeji.cn/api/wx_app/account_login.php', //接口地址
      data: {
        userName: this.data.phone,
        userPass: this.data.password
      },
      header: {
        'content-type': 'application/json' // 对数据进行 JSON 序列化
      },
      method:'POST',
      success (res) {
        // 获取token，并存储起来
        let token = res.data.token;
        //将token存到本地存储中
        wx.setStorageSync('userName',res.data.userName);
        wx.setStorageSync('account',res.data.account);
        wx.setStorageSync('token',token);
        if(res.data.status==1){
          wx.showToast({
            title: '登录成功',
            icon: 'success',
            duration: 2000,
            success:function(){
              setTimeout(function() {
                wx.switchTab({
                  url: '/pages/news/index',
                })
             }, 2000);
            }
          })
        }else{
          wx.showToast({
            title: res.data.info,
            icon: 'none',
            duration: 2000//持续的时间
          })
        }
      }
    })
  }
})