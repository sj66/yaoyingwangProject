// pages/promote/index.js
const util = require('../../utils/util');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // tab切换 
    currentTab: 0, 
    //这是页面需要的json
    list: [
      {
        batch_number: "国药准字Z43020639",
        big_pack_num: "200",
        company: "湖南嘉恒制药有限公司",
        goods_id: "41064",
        id: "7458",
        img: "https://cdn.hulukeji.cn/upload/20210529175917_649.jpg",
        mid_pack_num: "0",
        name: "好大夫 小儿化痰止咳颗粒",
        price: "10.80",
        prod_date: "2020-11-16",
        promote: [],
        promote_id: "0",
        qty: "5.000000000000000",
        retail_price: "22.00",
        specs: "5克*8袋",
        unit: "盒",
        user_status: 2,
        valid_date: "2022-11-15",
      },
      {
        batch_number: "H20140688",
        big_pack_num: "900",
        company: "高特制药有限公司.塞浦路斯",
        goods_id: "19222",
        id: "7457",
        img: "https://cdn.hulukeji.cn/upload/20210529171720_649.jpg",
        mid_pack_num: "100",
        name: "法地兰 克罗米芬 枸橼酸氯米芬片",
        price: "26.20",
        prod_date: "2019-06-01",
        promote: [],
        promote_id: "0",
        qty: "56.000000000000000",
        retail_price: "58.00",
        specs: "50mg*10s",
        unit: "盒",
        user_status: 2,
        valid_date: "2024-05-31",
      },
    ],	
    //这是查询需要的json
	  list2: [
      {
        batch_number: "国药准字Z43020639",
        big_pack_num: "200",
        company: "湖南嘉恒制药有限公司",
        goods_id: "41064",
        id: "7458",
        img: "https://cdn.hulukeji.cn/upload/20210529175917_649.jpg",
        mid_pack_num: "0",
        name: "好大夫 小儿化痰止咳颗粒",
        price: "10.80",
        prod_date: "2020-11-16",
        promote: [],
        promote_id: "0",
        qty: "5.000000000000000",
        retail_price: "22.00",
        specs: "5克*8袋",
        unit: "盒",
        user_status: 2,
        valid_date: "2022-11-15",
      },
      {
        batch_number: "H20140688",
        big_pack_num: "900",
        company: "高特制药有限公司.塞浦路斯",
        goods_id: "19222",
        id: "7457",
        img: "https://cdn.hulukeji.cn/upload/20210529171720_649.jpg",
        mid_pack_num: "100",
        name: "法地兰 克罗米芬 枸橼酸氯米芬片",
        price: "26.20",
        prod_date: "2019-06-01",
        promote: [],
        promote_id: "0",
        qty: "56.000000000000000",
        retail_price: "58.00",
        specs: "50mg*10s",
        unit: "盒",
        user_status: 2,
        valid_date: "2024-05-31",
      },
    ],
    // 日期筛选
    currentDate: util.getNowDate(new Date()),
    // 显示日期
    show: false,
    selectDate:[
      {
        "id": "1",
        "text": "1个月"
      }, 
      {
          "id": "2",
          "text": "2个月"
      },
      {
        "id": "3",
        "text": "3个月"
      },
      {
        "id": "4",
        "text": "4个月"
      },
      {
        "id": "5",
        "text": "5个月"
      }, 
      {
          "id": "6",
          "text": "6个月"
      },
      {
        "id": "7",
        "text": "7个月"
      },
      {
        "id": "8",
        "text": "8个月"
      },
      {
        "id": "9",
        "text": "9个月"
      }, 
      {
          "id": "10",
          "text": "10个月"
      },
      {
        "id": "11",
        "text": "11个月"
      },
      {
        "id": "12",
        "text": "12个月"
      }
    ],
    selectTime:[
      {
        "id": "1",
        "text": "00:00"
      }, 
      {
          "id": "2",
          "text": "01:00"
      },
      {
        "id": "3",
        "text": "02:00"
      }, 
      {
        "id": "4",
        "text": "03:00"
      },
      {
        "id": "5",
        "text": "04:00"
      }, 
      {
          "id": "6",
          "text": "05:00"
      },
      {
        "id": "7",
        "text": "06:00"
      }, 
      {
        "id": "8",
        "text": "07:00"
      },
      {
        "id": "9",
        "text": "08:00"
      }, 
      {
          "id": "10",
          "text": "09:00"
      },
      {
        "id": "11",
        "text": "10:00"
      }, 
      {
        "id": "12",
        "text": "11:00"
      },
      {
        "id": "13",
        "text": "12:00"
      }, 
      {
          "id": "14",
          "text": "13:00"
      },
      {
        "id": "15",
        "text": "14:00"
      }, 
      {
        "id": "16",
        "text": "15:00"
      },
      {
        "id": "17",
        "text": "16:00"
      }, 
      {
          "id": "18",
          "text": "17:00"
      },
      {
        "id": "19",
        "text": "18:00"
      }, 
      {
        "id": "20",
        "text": "19:00"
      },
      {
        "id": "21",
        "text": "20:00"
      }, 
      {
          "id": "22",
          "text": "21:00"
      },
      {
        "id": "23",
        "text": "22:00"
      }, 
      {
        "id": "24",
        "text": "23:00"
      }
    ],
    selectArray: [
      {
        "id": "3",
        "text": "3天",
        "value": 3
      }, 
      {
          "id": "4",
          "text": "4天",
          "value": 4
      },
      {
        "id": "5",
        "text": "5天",
        "value": 5
      }, 
      {
          "id": "6",
          "text": "6天",
          "value": 6
      },
      {
        "id": "7",
        "text": "7天",
        "value": 7
      }, 
      {
          "id": "8",
          "text": "8天",
          "value": 8
      }
    ],
    numberList:[
      { "data_name": "1", "state": 0 },
      { "data_name": "2", "state": 0 },
      { "data_name": "3", "state": 0 },
      { "data_name": "4", "state": 0 },
      { "data_name": "5", "state": 0 },
      { "data_name": "6", "state": 0 },
      { "data_name": "7", "state": 0 },
      { "data_name": "8", "state": 0 },
      { "data_name": "9", "state": 0 },
      { "data_name": "10", "state": 0 },
      { "data_name": "11", "state": 0 },
      { "data_name": "12", "state": 0 },
      { "data_name": "13", "state": 0 },
      { "data_name": "14", "state": 0 },
      { "data_name": "15", "state": 0 },
      { "data_name": "16", "state": 0 },
      { "data_name": "17", "state": 0 },
      { "data_name": "18", "state": 0 },
      { "data_name": "19", "state": 0 },
      { "data_name": "20", "state": 0 },
      { "data_name": "21", "state": 0 },
      { "data_name": "22", "state": 0 },
      { "data_name": "23", "state": 0 },
      { "data_name": "24", "state": 0 },
      { "data_name": "25", "state": 0 },
      { "data_name": "26", "state": 0 },
      { "data_name": "27", "state": 0 },
      { "data_name": "28", "state": 0 },
      { "data_name": "29", "state": 0 },
      { "data_name": "30", "state": 0 },
      { "data_name": "31", "state": 0 }
    ],
    times: "12:00",
    frequency: 5, // 频率
    dateIndex: 11, // 默认频率下标
    timeIndex: 8, // 默认频率下标
    frequencyIndex: 2, // 默认频率下标
    start: 0, // 当前日期选中的下标
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.selectArray[this.data.frequencyIndex].text)
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
  // 搜索
  query(e){
    var list = this.data.list2;		//先把第二条json存起来
    var list2 = [];		//定义一个数组
    //循环去取数据
    for(var i=0;i<list.length;i++){
      var string = list[i].name;
      //查询json里的name是否包含搜索的关键词，如果有就把他装进list2数组
      if(string.indexOf(e.detail.value) >= 0){
        list2.push(list[i]);
      }
    }
    //到这里list2就已经是你查出的数据
    //如果输入的关键词为空就加载list数据，不是空就加载list2数据
    if(e.detail.value == ""){
      //加载全部
      this.setData({
        list: list
      })
    } else {
      this.setData({
        list: list2
      })
    }
  },
  // 日期筛选
  bindDateChange: function(e) {
    this.setData({
      currentDate: e.detail.value
    })
  },
  // 点击商品详情
  onGoodsDetail:function(e){
    wx.navigateTo({
      url: '/pages/goods_detail/index?img='+e.currentTarget.dataset.img+'&gid='+e.currentTarget.dataset.gid+'&price='+e.currentTarget.dataset.price+'&retail='+e.currentTarget.dataset.retail+'&name='+e.currentTarget.dataset.name+'&specs='+e.currentTarget.dataset.specs+'&company='+e.currentTarget.dataset.company+'&mid='+e.currentTarget.dataset.mid+'&big='+e.currentTarget.dataset.big+'&start='+e.currentTarget.dataset.start+'&end='+e.currentTarget.dataset.end+'&batch='+e.currentTarget.dataset.batch+'&unit='+e.currentTarget.dataset.unit
    })
  },
  // 设置推送时间
  onDisplay() {
    this.setData({ 
      show: true 
    });
  },
  onClosePopup() {
    this.setData({ 
      show: false 
    });
  },
  // 时间
  bindTimeChange: function (e) {
    this.setData({
      times: e.detail.value
    })
  },
  // 频率
  getDate:function(e){
    let res = this.data.selectArray[e.detail.id] 
    this.setData({
      frequency: res.value,
      frequencyIndex: e.detail.id
    })
    this.setDateState()
  },
  onNumberLi:function(e){
    let index = e.currentTarget.dataset.key;
    this.setData({
      start: index
    })
    // 频率已经选着
    // if (this.data.frequency) {
    //   this.setDateState()
    // } else {
      if (this.data.numberList[index].state == 2) {
        this.data.numberList[index].state = 0;
      } else if (this.data.numberList[index].state == 0) {
        this.data.numberList[index].state = 2;
      }
      this.setData({
        numberList: this.data.numberList,
      });
    // }
  },
  setDateState: function () {
    // 遍历日期表
    let start = this.data.start; // 获取点击的值下标
    this.data.numberList.forEach((item, index) => {
      if ( (index - start) % (this.data.frequency + 1) == 0) {
        item.state = 2
      } else {
        item.state = 0
      }
    })
    this.setData({
      numberList: this.data.numberList,
    });
  },
  onTrue(){
    this.setData({ 
      show: false 
    });
  },
  // 新增
  onAdd:function(){
    wx.navigateTo({
      url: '/pages/goods_list/index'
    })
  },
})