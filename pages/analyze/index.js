// pages/analyze/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeList:[
      {
        icon:'../news/img/personal_sales.png',
        title:'个人销量',
        link:'/pages/sales/index',
        type:'nav'
      },
      {
        icon:'../news/img/departmental_sales.png',
        title:'部门销量',
        link:'',
        type:'nav'
      },
      {
        icon:'../news/img/company_sales.png',
        title:'公司销量',
        link:'',
        type:'nav'
      }
    ],
    internalList:[
      {
        icon:'',
        title:'',
        link:'',
        type:''
      },
      {
        icon:'',
        title:'',
        link:'',
        type:'nav'
      },
      {
        icon:'',
        title:'',
        link:'',
        type:'nav'
      }
    ],
    marketList:[
      {
        icon:'',
        title:'',
        link:'',
        type:'nav'
      },
      {
        icon:'',
        title:'',
        link:'',
        type:'nav'
      },
      {
        icon:'',
        title:'',
        link:'',
        type:'nav'
      }
    ],
    naviList:[
      {
        icon:'',
        title:'',
        link:'',
        type:'nav'
      },
      {
        icon:'',
        title:'',
        link:'',
        type:'nav'
      },
      {
        icon:'',
        title:'',
        link:'',
        type:'nav'
      }
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