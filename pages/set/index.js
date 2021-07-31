//index.js
//获取应用实例
var app = getApp()    
Page({  
    onmodify:function(){
        wx.navigateTo({
          url: '/pages/password/index',
        })
    },
    quit:function(){  
        wx.reLaunch({
          url: '/pages/login/index',
        })
    }  
}) 