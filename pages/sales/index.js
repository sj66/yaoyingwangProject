// pages/sales/index.js
import uCharts from '../../components/u-charts/u-charts.min'
var _self;
var canvaColumn = null;
var canvaColumn1 = null;
var canvaColumn2 = null;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // tab切换 
    currentTab: 0, 
    currentTabs: 0,
    cWidth: '',
    cHeight: '',
    listData: [
      { "code": "1", "text": "顺德容桂温想群内科诊所", "type": "9865", "number": 6 },
      { "code": "2", "text": "广州南沙区榄核百信药店", "type": "8010", "number": 5 },
      { "code": "3", "text": "广州市番禺区石楼德顺堂药店", "type": "7652", "number": 2 },
      { "code": "4", "text": "佛山南海邹永康西医内科诊所", "type": "1232", "number": -2 },
      { "code": "5", "text": "广州嘉和堂药业有限公司沙溪分店", "type": "11123", "number": -7 }
    ],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    _self=this;
    this.cWidth = wx.getSystemInfoSync().windowWidth;
    this.cHeight = 500 / 750 * wx.getSystemInfoSync().windowWidth;
    this.getServerData();
    this.getServerData1();
    this.getServerData2()
  },
  // 销量导航栏切换
  swichNav: function (e) { 
    console.log(e); 
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
    console.log(e);
    this.setData({
      currentTab: e.detail.current, 
    })
  },
  //   这里 先暂时 应用 ucharts 里面提供的数据 调取他们的接口 
  // 总销量
  getServerData: function () {
    wx.request({
      url: 'https://jzh.hulukeji.cn/data.json',
      data: {
      },
      success: function (res) {
        let Column = { categories: [], series: [] };
        Column.categories = res.data.data.ColumnB.categories;
        Column.series = res.data.data.ColumnB.series;
        //自定义标签颜色和字体大小
        Column.series[1].textColor = 'red';
        Column.series[1].textSize = 11;
        _self.showColumn("canvasColumn", Column);
      },
      fail: () => {
        console.log("请点击右上角【详情】，启用不校验合法域名");
      },
    })
  },
  showColumn(canvasId, chartData) {
    canvaColumn = new uCharts({
      $this: _self,
      canvasId: canvasId,
      type: 'line',
      legend: true,
      fontSize: 11,
      background: '#FFFFFF',
      pixelRatio: 1,
      animation: true,
      categories: chartData.categories,
      series: chartData.series,
      xAxis: {
        disableGrid: true,
      },
      yAxis: {  
        //disabled:true
      },
      dataLabel: true,
      width: _self.cWidth ,
      height: _self.cHeight ,
      extra: {
        column: {
          type: 'group',
          width: _self.cWidth * 0.45 / chartData.categories.length
        }
      }
    });
  },
  // 单品销量
  getServerData1: function () {
    wx.request({
      url: 'https://jzh.hulukeji.cn/data.json',
      data: {
      },
      success: function (res) {
        let Column1 = { categories: [], series: [] };
        Column1.categories = res.data.data.Column.categories;
        Column1.series = res.data.data.Column.series;
        //自定义标签颜色和字体大小
        Column1.series[1].textColor = 'red';
        Column1.series[1].textSize = 11;
        _self.showColumn1("canvasColumn1", Column1);
      },
      fail: () => {
        console.log("请点击右上角【详情】，启用不校验合法域名");
      },
    })
  },
  showColumn1(canvasId, chartData) {
    canvaColumn1 = new uCharts({
      $this: _self,
      canvasId: canvasId,
      type: 'line',
      legend: true,
      fontSize: 11,
      background: '#FFFFFF',
      pixelRatio: 1,
      animation: true,
      categories: chartData.categories,
      series: chartData.series,
      xAxis: {
        disableGrid: true,
      },
      yAxis: {  
        //disabled:true
      },
      dataLabel: true,
      width: _self.cWidth ,
      height: _self.cHeight ,
      extra: {
        column1: {
          type: 'group',
          width: _self.cWidth * 0.45 / chartData.categories.length
        }
      }
    });
  },
  // 中药销量
  getServerData2: function () {
    wx.request({
      url: 'https://jzh.hulukeji.cn/data.json',
      data: {
      },
      success: function (res) {
        let Column2 = { categories: [], series: [] };
        Column2.categories = res.data.data.ColumnMeter.categories;
        Column2.series = res.data.data.ColumnMeter.series;
        //自定义标签颜色和字体大小
        Column2.series[1].textColor = 'red';
        Column2.series[1].textSize = 11;
        _self.showColumn2("canvasColumn2", Column2);
      },
      fail: () => {
        console.log("请点击右上角【详情】，启用不校验合法域名");
      },
    })
  },
  showColumn2(canvasId, chartData) {
    canvaColumn2 = new uCharts({
      $this: _self,
      canvasId: canvasId,
      type: 'line',
      legend: true,
      fontSize: 11,
      background: '#FFFFFF',
      pixelRatio: 1,
      animation: true,
      categories: chartData.categories,
      series: chartData.series,
      xAxis: {
        disableGrid: true,
      },
      yAxis: {  
        //disabled:true
      },
      dataLabel: true,
      width: _self.cWidth ,
      height: _self.cHeight ,
      extra: {
        column2: {
          type: 'group',
          width: _self.cWidth * 0.45 / chartData.categories.length
        }
      }
    });
  },
  // 日期导航栏切换
  swichNavs: function (e) { 
    console.log(e); 
    var that = this; 
    if (this.data.currentTabs === e.target.dataset.current) { 
      return false; 
    } else {
      that.setData({ 
      currentTabs: e.target.dataset.current, 
    }) 
  } 
  },
  swiperChanges: function (e) {
    console.log(e);
    this.setData({
      currentTabs: e.detail.current, 
    })
  }
})