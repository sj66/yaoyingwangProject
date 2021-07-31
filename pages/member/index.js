//index.js
//获取应用实例
const app = getApp()

Page({
  data: {},
  onLoad: function () {
  },
  onShow: function () {
    try {
      var token=wx.getStorageSync('token');
      if(token){
        this.setData({
          isLogin:true,
          userName:wx.getStorageSync('userName'),
          account:wx.getStorageSync('account')
        });
        this.getInfo();
      }else{
        this.setData({
          isLogin:false,
          userName:'',
          account:''
        })
      }
    } catch (error) {
      
    }
  }
})
