//index.js
//获取应用实例
var app = getApp()    
Page({  
    quit:function(){  
        wx.navigateBack({ 
            changed: true 
        });
    }  
}) 