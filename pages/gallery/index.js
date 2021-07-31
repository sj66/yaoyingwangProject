// pages/gallery/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: [
      {
        url:'',
        icon:'../news/img/banner1.png'
      },
      {
        url:'',
        icon:'../news/img/banner2.png'
      },
      {
        url:'',
        icon:'../news/img/banner3.png'
      }
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    typeList:[
      {
        url:'',
        icon:'../news/img/advertising.png',
        title:'广告',
      },
      {
        url:'',
        icon:'../news/img/grouping.png',
        title:'分组',
      },
      {
        url:'',
        icon:'../news/img/favorites.png',
        title:'收藏',
      },
      {
        url:'',
        icon:'../news/img/download.png',
        title:'下载',
      }
    ],
    serviceList:[
      {
        icon:'../news/img/banner3.png',
        title:'图库'
      },
      {
        icon:'../news/img/banner3.png',
        title:'图库'
      },
      {
        icon:'../news/img/banner3.png',
        title:'图库'
      },
      {
        icon:'../news/img/banner3.png',
        title:'图库'
      },
      {
        icon:'../news/img/banner3.png',
        title:'图库'
      },
      {
        icon:'../news/img/banner3.png',
        title:'图库'
      },
      {
        icon:'../news/img/banner3.png',
        title:'图库'
      },
      {
        icon:'../news/img/banner3.png',
        title:'图库'
      },
      {
        icon:'../news/img/banner3.png',
        title:'图库'
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