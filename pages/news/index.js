//index.js
//获取应用实例
const app = getApp();
Page({
  data: {
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
    ]	
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
  // 点击商品详情
  onGoodsDetail:function(e){
    wx.navigateTo({
      url: '/pages/goods_detail/index?img='+e.currentTarget.dataset.img+'&gid='+e.currentTarget.dataset.gid+'&price='+e.currentTarget.dataset.price+'&retail='+e.currentTarget.dataset.retail+'&name='+e.currentTarget.dataset.name+'&specs='+e.currentTarget.dataset.specs+'&company='+e.currentTarget.dataset.company+'&mid='+e.currentTarget.dataset.mid+'&big='+e.currentTarget.dataset.big+'&start='+e.currentTarget.dataset.start+'&end='+e.currentTarget.dataset.end+'&batch='+e.currentTarget.dataset.batch+'&unit='+e.currentTarget.dataset.unit
    })
  },
  swipe_close(e){
    const { position, instance } = e.detail;
    switch (position) {
      case 'left':
      case 'cell':
        instance.close();
        break;
      case 'right':
        instance.close();
        app.dialog.confirm({
          content:'确定删除吗？',
          confirmCallback:function(){
            that.delGoods(e.currentTarget.dataset.x);
          }
        });
        break;
    }
  }
})
