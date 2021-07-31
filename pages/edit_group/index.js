//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    grouplist:[
      {
        pic:'/pages/news/img/logo.png',
        company:'广东家之和有限公司',
        title:'广东家之和有限公司广东家之和有限公司',
      },
      {
        pic:'/pages/news/img/logo.png',
        company:'广州葫芦娃科技有限公司',
        title:'广州葫芦娃科技有限公司广州葫芦娃科技有限公司',
      },
      {
        pic:'/pages/news/img/logo.png',
        company:'广州白云山药业有限公司',
        title:'广州白云山药业有限公司广州白云山药业有限公司',
      }
    ]
  },
  // 创建企业
  onCreate:function(){
    wx.navigateTo({
      url: '/pages/create_group/index',
    })
  },
})
