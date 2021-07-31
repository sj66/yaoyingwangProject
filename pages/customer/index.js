// pages/customer/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // tab切换 
    currentTab: 0, 
    tableData: [
      {
          coding: '29211',
          abbreviation: '西安杨森制药',
          full: '西安杨森制药有限公司',
          way: '批发',
          range: ['鼻咽喉科', '内科', '外科', '口腔科']
      },
      {
          coding: '29222',
          abbreviation: '广州白云山',
          full: '广州白云山制药有限公司',
          way: '零售',
          range: ['鼻咽喉科', '内科', '外科', '口腔科']
      },
      {
          coding: '29233',
          abbreviation: '福建古田药业',
          full: '福建古田药业有限公司',
          way: '批发、零售',
          range: ['鼻咽喉科', '内科', '外科', '口腔科']
      },
      {
          coding: '29244',
          abbreviation: '华北制药',
          full: '华北制药股份有效公司',
          way: '批发',
          range: ['鼻咽喉科', '内科', '外科', '口腔科']
      },
      {
          coding: '29255',
          abbreviation: '华润三九',
          full: '华润三九医药股份有限公司',
          way: '零售',
          range: ['鼻咽喉科', '内科', '外科', '口腔科']
      },
      {
          coding: '29266',
          abbreviation: '国药集团',
          full: '国药集团容生制药有限公司',
          way: '零售、批发',
          range: ['鼻咽喉科', '内科', '外科', '口腔科']
      },
      {
          coding: '29277',
          abbreviation: '华南药业',
          full: '广东华南药业集团有限公司',
          way: '零售',
          range: ['鼻咽喉科', '内科', '外科', '口腔科']
      }
    ],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  // 导航栏切换
  swichNav: function (e) {  
    var that = this; 
    if (this.data.currentTab === e.target.dataset.current) { 
      return false; 
    } else {
      that.setData({ 
      currentTab: e.target.dataset.current, 
    }) 
  } 
  },
  swiperChange: function (e) {
    this.setData({
      currentTab: e.detail.current, 
    })
  },
})