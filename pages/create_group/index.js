//index.js
//获取应用实例
var app = getApp()    
Page({  
    data: {
    },
    //完成
    onComplete:function(){
        wx.navigateTo({
            url: '/pages/login/index',
        })
    }
}) 