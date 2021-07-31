// pages/chart/index.js
var wxCharts = require('../../utils/wxcharts.js');
var app = getApp();
var daylineChart=null;
var yuelineChart=null;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(e){
    this.getMothElectro();
  },

  getMothElectro:function(){
    var windowWidth = 320;
    try {
     var res = wx.getSystemInfoSync();
     windowWidth = res.windowWidth;
    } catch (e) {
     console.error('getSystemInfoSync failed!');
    }
    yuelineChart = new wxCharts({ //当月用电折线图配置
     canvasId: 'yueEle',
     type: 'line',
     categories: ['1', '2', '3', '4', '5', '6','7', '8', '9', '10', '11', '12'], //categories X轴
     animation: true,
     // background: '#f5f5f5',
     series: [{
      name: '销量预测',
      //data: yuesimulationData.data,
      data: [1, 6, 9, 1, 0, 2, 9, 2, 8, 6, 0, 9],
      format: function (val, name) {
       return val.toFixed(2) + 'kWh';
      }
     }, {
      name: '任务预测',
      data: [0, 6, 2, 2, 7, 6, 2, 5, 8, 1, 8, 4],
      format: function (val, name) {
       return val.toFixed(2) + 'kWh';
      }
     },
     {
      name: '任务完成',
      data: [6, 4, 9, 7, 1, 4, 5, 1, 1, 8, 8, 6],
      format: function (val, name) {
       return val.toFixed(2) + 'kWh';
      }
     },
     {
      name: '奖金预测',
      data: [0, 4, 3, 3, 1, 7, 7, 7, 9, 9, 3, 3],
      format: function (val, name) {
       return val.toFixed(2) + 'kWh';
      }
     }],
     xAxis: {
      disableGrid: true
     },
     yAxis: {
      title: '历史数据(销量/收入)',
      format: function (val) {
        return val+'万元';
      //  return val.toFixed(2);
      },
      max: 20,
      min: 0
     },
     width: windowWidth,
     height: 200,
     dataLabel: false,
     dataPointShape: true,
     extra: {
      lineStyle: 'curve'
     }
    });
  },
})