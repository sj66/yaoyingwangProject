// pages/sign/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // tab切换 
    currentTab: 0, 
    listData: [
      { date: "2021-07-01", courierCompany: "圆通", dealer: "前台",recipient:"张三",number:"1102134127370",signer:"张三" },
      { date: "2021-07-01", courierCompany: "申通", dealer: "前台",recipient:"李四",number:"1101444447370",signer:"李四" },
      { date: "2021-07-01", courierCompany: "中通", dealer: "前台",recipient:"王五",number:"1101222347370",signer:"王五" },
      { date: "2021-07-01", courierCompany: "韵达", dealer: "前台",recipient:"思思",number:"1109994347370",signer:"思思" },
      { date: "2021-07-01", courierCompany: "顺丰", dealer: "前台",recipient:"刘思",number:"1101114347370",signer:"刘思" },
    ],
    listData1: [
      { date: "2021-07-01", courierCompany: "圆通", dealer: "前台",recipient:"张三",number:"1102134127370",signer:"张三" },
      { date: "2021-07-01", courierCompany: "申通", dealer: "前台",recipient:"李四",number:"1101444447370",signer:"李四" },
      { date: "2021-07-01", courierCompany: "中通", dealer: "前台",recipient:"王五",number:"1101222347370",signer:"王五" },
      { date: "2021-07-01", courierCompany: "韵达", dealer: "前台",recipient:"思思",number:"1109994347370",signer:"思思" },
      { date: "2021-07-01", courierCompany: "顺丰", dealer: "前台",recipient:"刘思",number:"1101114347370",signer:"刘思" },
    ],
    listData2: [
      { date: "2021-07-01", courierCompany: "圆通", dealer: "前台",recipient:"张三",number:"1102134127370",signer:"张三" },
      { date: "2021-07-01", courierCompany: "申通", dealer: "前台",recipient:"李四",number:"1101444447370",signer:"李四" },
      { date: "2021-07-01", courierCompany: "中通", dealer: "前台",recipient:"王五",number:"1101222347370",signer:"王五" },
      { date: "2021-07-01", courierCompany: "韵达", dealer: "前台",recipient:"思思",number:"1109994347370",signer:"思思" },
      { date: "2021-07-01", courierCompany: "顺丰", dealer: "前台",recipient:"刘思",number:"1101114347370",signer:"刘思" },
    ],
    courierCompany: '',
    number: '',
    recipient: '',
    date: '',
    dealer: '',
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let ActableDate = wx.getStorageSync('listData') || [];
    if (ActableDate.length == 0) {
      wx.setStorageSync('listData', this.listData);
    }
    if (ActableDate.length != 0) {
        this.listData = wx.getStorageSync('listData') || [];
    }
  },
  // 快递签收 搜索
  query(e){
    var listData = this.data.listData1;		//先把第二条json存起来
    var listData1 = [];		//定义一个数组
    //循环去取数据
    for(var i=0;i<listData.length;i++){
      var string = listData[i].courierCompany;
      if(string.indexOf(e.detail.value) >= 0){
        listData1.push(listData[i]);
      }
    }
    if(e.detail.value == ""){
      this.setData({
        listData: listData
      })
    } else {
      this.setData({
        listData: listData1
      })
    }
  },
  // 文件签收 搜索
  query1(e){
    var listData = this.data.listData2;		//先把第二条json存起来
    var listData2 = [];		//定义一个数组
    //循环去取数据
    for(var i=0;i<listData.length;i++){
      var string = listData[i].number;
      if(string.indexOf(e.detail.value) >= 0){
        listData2.push(listData[i]);
      }
    }
    if(e.detail.value == ""){
      this.setData({
        listData: listData
      })
    } else {
      this.setData({
        listData: listData2
      })
    }
  },
  // 添加数据
  onAddData:function(e){
    this.setData({
      show:true,
    })
  },
  closePopup(){
    this.setData({
      show:false
    })
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
  // 弹窗 添加信息
  onAddInfo(){
    this.data.listData.unshift({
      courierCompany: this.data.courierCompany,
      number: this.data.number,
      recipient: this.data.recipient,
      date: this.data.date,
      dealer: this.data.dealer,
    })
    wx.setStorageSync('listData', this.data.listData);
    this.setData({
      listData:this.data.listData,
      show:false,
      courierCompany: '',
      number: '',
      recipient: '',
      date: '',
      dealer: ''
    })
  }
})