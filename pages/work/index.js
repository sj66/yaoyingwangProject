// pages/work/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeList:[
      {
        icon:'../news/img/business.png',
        title:'管理企业',
        link:'',
        type:'nav'
      },
      {
        icon:'../news/img/add_app.png',
        title:'添加应用',
        link:'',
        type:'nav'
      },
      {
        icon:'../news/img/home_service.png',
        title:'上门服务',
        link:'',
        type:'nav'
      }
    ],
    internalList:[
      {
        icon:'../news/img/clock_in.png',
        title:'打卡',
        link:'',
        type:'nav'
      },
      {
        icon:'../news/img/review.png',
        title:'审批',
        link:'',
        type:'nav'
      },
      {
        icon:'../news/img/report.png',
        title:'汇报',
        link:'/pages/report/index',
        type:'nav'
      },
      {
        icon:'../news/img/announcement.png',
        title:'公告',
        link:'',
        type:'nav'
      },
      {
        icon:'../news/img/activity.png',
        title:'活动',
        link:'/pages/activity/index',
        type:'nav'
      },
    ],
    marketList:[
      {
        icon:'../news/img/statistical_analysis.png',
        title:'统计分析',
        link:'/pages/analyze/index',
        type:'nav'
      },
      {
        icon:'../news/img/promote.png',
        title:'今日推广',
        link:'/pages/promote/index',
        type:'nav'
      }
    ],
    naviList:[
      {
        icon:'../news/img/data.png',
        title:'资料管理',
        link:'/pages/datas/index',
        type:'nav'
      },
      {
        icon:'../news/img/purchase.png',
        title:'采购管理',
        link:'/pages/purchase/index',
        type:'nav'
      },
      {
        icon:'../news/img/store.png',
        title:'储运管理',
        link:'/pages/store/index',
        type:'nav'
      },
      {
        icon:'../news/img/sell.png',
        title:'销售管理',
        link:'/pages/sell/index',
        type:'nav'
      },
      {
        icon:'../news/img/personnel.png',
        title:'人事行政',
        link:'/pages/administrative/index',
        type:'nav'
      },
      {
        icon:'../news/img/finance.png',
        title:'财务管理',
        link:'/pages/finance/index',
        type:'nav'
      },
      {
        icon:'../news/img/quality.png',
        title:'质量管理',
        link:'',
        type:'nav'
      },
      {
        icon:'../news/img/retail.png',
        title:'连锁管理',
        link:'/pages/retail/index',
        type:'nav'
      },
      {
        icon:'../news/img/produce.png',
        title:'生产管理',
        link:'',
        type:'nav'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})