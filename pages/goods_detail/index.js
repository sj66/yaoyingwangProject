// pages/goods_detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // tab切换 
    currentTab: 0,// 分享弹窗
    shareShow:false,
    y_menus:[
      {title:"生成商业海报",icon:"../news/img/poster.png"},
      {title:"生成终端海报",icon:"../news/img/terminal.png"}
    ],
    maskHidden:true,
    showPoster:false,//海报
    imgs: '', // 分享封面
    scene:'',//分享二维码
    context: null, // canvas
    data:{
      batch: '',
      big: '',
      company: '',
      end: '',
      gid: '',
      img: '',
      mid: '',
      name: '',
      price: '',
      retail: '',
      specs: '',
      start: '',
      unit: ''
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var img=options.img;
    var goods_id=options.gid;
    var price=options.price;
    var price=options.price.split(".");
    var priceLeft=price[0];
    var priceRight=price[1];
    var retail_price=options.retail;
    var name=options.name;
    var specs=options.specs;
    var company=options.company;
    var unit=options.unit;
    var mid_pack_num=options.mid;
    var big_pack_num=options.big;
    var prod_date=options.start;
    var valid_date=options.end;
    var batch_number=options.batch;
    this.setData({
      data:options,
      img: img,
      goods_id:goods_id,
      price:options.price,
      priceLeft:priceLeft,
      priceRight:priceRight,
      retail_price:retail_price,
      name:name,
      specs:specs,
      company:company,
      unit:unit,
      mid_pack_num:mid_pack_num,
      big_pack_num:big_pack_num,
      prod_date:prod_date,
      valid_date:valid_date,
      batch_number:batch_number,
    })
    // 此处获取设备的宽高。canvas绘制的图片以次宽高为准
    var _this = this;
    wx.getSystemInfo({
      success: function(res) {
        _this.setData({
          windowW: 500,
          windowH: 930,
        })
      },
    })
  },
  onReady: function() {
    var context = wx.createCanvasContext("mycanvas");
    this.setData({
      context: context
    })
  },
  // 导航栏切换
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
  // 显示分享弹窗
  onShare(){
    this.setData({
      shareShow:true
    })
  },
  onClose(){
    this.setData({
      shareShow:false
    })
  },
  // 分享给朋友
  onShareAppMessage:function(res) {
    if (res.from == 'button') {
        console.log(res.target, res)
    }
    return {
      title:this.data.data.name,
      path:'/pages/goods_detail/index',//这里是被分享的人点击进来之后的页面
      imageUrl: this.data.data.img//这里是图片的路径
    }
  },
  // 显示海报
  onPoster: function(e) {
    var indf=e.currentTarget.dataset.indd;
    this.setData({
      maskHidden:false,
      showPoster:true
    })
    wx.showToast({
        title: '图片生成中...',
        icon: 'loading',
        duration: 2000
    });
    if(indf==0){
      this.createNewTerminal();//生成商品海报
    }else{
      this.createNewImg();// 生成终端海报
    }
  },
  // 关闭海报弹窗
  closeCanvas(){
    this.setData({
      showPoster:false,
      maskHidden:true,
      shareShow:false
    })
  },
  // 生成海报
  //将分享标题绘制到canvas的固定
  setContent: function(context) {
    if(!this.data.data.share_title){
      return;
    }
    var content = this.data.data.share_title;//这是要绘制的文本
    var chr = content.split("");//这个方法是将一个字符串分割成字符串数组
    var temp = "";
    var row = [];
    context.setFontSize(24);
    context.setFillStyle("#000000");
    for (var a = 0; a < chr.length; a++) {
      if (context.measureText(temp).width < 460) {
        temp += chr[a];
      }
      else {
        a--; //这里添加了a-- 是为了防止字符丢失，效果图中有对比
        row.push(temp);
        temp = "";
      }
    }
    row.push(temp); 
 
    //如果数组长度大于2 则截取前两个
    if (row.length > 2) {
      var rowCut = row.slice(0, 2);
      var rowPart = rowCut[1];
      var test = "";
      var empty = [];
      for (var a = 0; a < rowPart.length; a++) {
        if (context.measureText(test).width < 460) {
          test += rowPart[a];
        }
        else {
          break;
        }
      }
      empty.push(test);
      var group = empty[0] + "..."//这里只显示两行，超出的用...表示
      rowCut.splice(1, 1, group);
      row = rowCut;
    }else{
      context.fillText(content, 20, 50, 460);// row[b],x轴,y轴+行高,300
      return;
    }
    for (var b = 0; b < row.length; b++) {
      context.fillText(row[b], 20, 30 + b * 30, 460);// row[b],x轴,y轴+行高,300
    }
  },
  //将商品id绘制到canvas的固定（终端）
  setId: function(context) {
    var Id = this.data.data.gid;
    context.setFontSize(24);
    context.setFillStyle("#000000");
    if(!this.data.data.share_title){
      context.fillText(Id, 20, 428);
    }else{
      context.fillText(Id, 20, 508);
    }
    context.stroke();
  },
  //将商品id绘制到canvas的固定（商业）
  setIdTitle: function(context) {
    var idTitle = "编   号：";
    context.setFontSize(24);
    context.setFillStyle("#737373");
    if(!this.data.data.share_title){
      context.fillText(idTitle, 20, 438);
    }else{
      context.fillText(idTitle, 20, 508);
    }
    context.stroke();
  },
  setIdContent: function(context) {
    var idContent = this.data.data.gid;
    context.setFontSize(24);
    context.setFillStyle("#000000");
    if(!this.data.data.share_title){
      context.fillText(idContent, 110, 438);
    }else{
      context.fillText(idContent, 110, 508);
    }
    context.stroke();
  },
  //将商品名绘制到canvas的固定(终端)
  setName: function(context) {
    var name = this.data.data.name;
    var chr = name.split("");//这个方法是将一个字符串分割成字符串数组
    var temp = "";
    var row = [];
    context.setFontSize(24);
    context.setFillStyle("#000000");
    for (var a = 0; a < chr.length; a++) {
      if (context.measureText(temp).width < 280) {
        temp += chr[a];
      }
      else {
        a--; //这里添加了a-- 是为了防止字符丢失，效果图中有对比
        row.push(temp);
        temp = "";
      }
    }
    row.push(temp); 
    let contents = '' // 绘制的文字
    if (row.length > 1) {
      // 长度大于1
      contents = row[0] + '...'
    } else {
      contents = row[0]
    }
    if(!this.data.data.share_title){
      context.fillText(contents, 20, 458 , 280);// row[b],x轴,y轴+行高,300
    }else{
      context.fillText(contents, 20, 538 , 280);// row[b],x轴,y轴+行高,300
    }
  },
  //将商品名绘制到canvas的固定(商业)
  setNameTitle: function(context) {
    var nameTitle = "名   称：";
    context.setFontSize(24);
    context.setFillStyle("#737373");
    if(!this.data.data.share_title){
      context.fillText(nameTitle, 20, 473);
    }else{
      context.fillText(nameTitle, 20, 543);
    }
    context.stroke();
  },
  setNameContent: function(context) {
    var nameContent = this.data.data.name;
    context.setFontSize(24);
    context.setFillStyle("#000000");
    if(!this.data.data.share_title){
      context.fillText(nameContent, 110, 473);
    }else{
      context.fillText(nameContent, 110, 543);
    }
    context.stroke();
  },
  //将规格绘制到canvas的固定(终端)
  setSpecs: function(context) {
    var specs =this.data.data.specs;
    var chr = specs.split("");//这个方法是将一个字符串分割成字符串数组
    var temp = "";
    var row = [];
    context.setFontSize(24);
    context.setFillStyle("#000000");
    for (var a = 0; a < chr.length; a++) {
      if (context.measureText(temp).width < 280) {
        temp += chr[a];
      }
      else {
        a--; //这里添加了a-- 是为了防止字符丢失，效果图中有对比
        row.push(temp);
        temp = "";
      }
    }
    row.push(temp); 
    let contents = '' // 绘制的文字
    if (row.length > 1) {
      // 长度大于1
      contents = row[0] + '...'
    } else {
      contents = row[0]
    }
    if(!this.data.data.share_title){
      context.fillText(contents, 20, 492);
    }else{
      context.fillText(contents, 20, 572);
    }
    // context.stroke();
  },
  //将规格绘制到canvas的固定(商业)
  setSpecsTitle: function(context) {
    var specsTitle = "规   格：";
    context.setFontSize(24);
    context.setFillStyle("#737373");
    if(!this.data.data.share_title){
      context.fillText(specsTitle, 20, 507);
    }else{
      context.fillText(specsTitle, 20, 577);
    }
    context.stroke();
  },
  setSpecsContent: function(context) {
    var specsContent = this.data.data.specs;
    context.setFontSize(24);
    context.setFillStyle("#000000");
    if(!this.data.data.share_title){
      context.fillText(specsContent, 110, 512);
    }else{
      context.fillText(specsContent, 110, 582);
    }
    context.stroke();
  },
  //将厂家绘制到canvas的固定(终端)
  setCompany: function(context) {
    var company =this.data.data.company;
    var chr = company.split("");//这个方法是将一个字符串分割成字符串数组
    var temp = "";
    var row = [];
    context.setFontSize(24);
    context.setFillStyle("#000000");
    for (var a = 0; a < chr.length; a++) {
      if (context.measureText(temp).width < 280) {
        temp += chr[a];
      }
      else {
        a--; //这里添加了a-- 是为了防止字符丢失，效果图中有对比
        row.push(temp);
        temp = "";
      }
    }
    row.push(temp); 
    let contents = '' // 绘制的文字
    if (row.length > 1) {
      // 长度大于1
      contents = row[0] + '...'
    } else {
      contents = row[0]
    }
    if(!this.data.data.share_title){
      context.fillText(contents, 20, 528 , 280);// row[b],x轴,y轴+行高,300
    }else{
      context.fillText(contents, 20, 606 , 280);// row[b],x轴,y轴+行高,300
    }
  },
  //将厂家绘制到canvas的固定(商业)
  setCompanyTitle: function(context) {
    var companyTitle = "厂   家：";
    context.setFontSize(24);
    context.setFillStyle("#737373");
    if(!this.data.data.share_title){
      context.fillText(companyTitle, 20, 550);
    }else{
      context.fillText(companyTitle, 20, 620);
    }
    context.stroke();
  },
  setCompanyContent: function(context) {
    var companyContent = this.data.data.company;
    var chr = companyContent.split("");//这个方法是将一个字符串分割成字符串数组
    var temp = "";
    var row = [];
    context.setFontSize(24);
    context.setFillStyle("#000000");
    for (var a = 0; a < chr.length; a++) {
      if (context.measureText(temp).width < 360) {
        temp += chr[a];
      }
      else {
        a--; //这里添加了a-- 是为了防止字符丢失，效果图中有对比
        row.push(temp);
        temp = "";
      }
    }
    row.push(temp); 
    let contents = '' // 绘制的文字
    if (row.length > 1) {
      // 长度大于1
      contents = row[0] + '...'
    } else {
      contents = row[0]
    }
    if(!this.data.data.share_title){
      context.fillText(contents, 110, 550 , 360);// row[b],x轴,y轴+行高,300
    }else{
      context.fillText(contents, 110, 620 , 360);// row[b],x轴,y轴+行高,300
    }
  },
  // 将中包装数和大包装数绘制到canvas的固定（终端）
  setMidNum:function(context){
    var midNum = "中包装：" + this.data.data.mid;
    context.setFontSize(24);
    context.setFillStyle("#000000");
    if(!this.data.data.share_title){
      context.fillText(midNum, 20, 565);
    }else{
      context.fillText(midNum, 20, 640);
    }
    context.stroke();
  },
  setBigNum:function(context){
    var bigNum = "大包装：" + this.data.data.big;
    context.setFontSize(24);
    context.setFillStyle("#000000");
    if(!this.data.data.share_title){
      context.fillText(bigNum, 160, 565);
    }else{
      context.fillText(bigNum, 160, 640);
    }
    context.stroke();
  },
  //将中包装数绘制到canvas的固定(商业)
  setMidNumTitle: function(context) {
    var midNumTitle = "中包装：";
    context.setFontSize(24);
    context.setFillStyle("#737373");
    if(!this.data.data.share_title){
      context.fillText(midNumTitle, 20, 590);
    }else{
      context.fillText(midNumTitle, 20, 660);
    }
    context.stroke();
  },
  setMidNumContent: function(context) {
    var midNumContent = this.data.data.mid;
    context.setFontSize(24);
    context.setFillStyle("#000000");
    if(!this.data.data.share_title){
      context.fillText(midNumContent, 110, 590);
    }else{
      context.fillText(midNumContent, 110, 660);
    }
    context.stroke();
  },
  //将大包装数绘制到canvas的固定(商业)
  setBigNumTitle: function(context) {
    var bigNumTitle = "大包装：";
    context.setFontSize(24);
    context.setFillStyle("#737373");
    if(!this.data.data.share_title){
      context.fillText(bigNumTitle, 20, 630);
    }else{
      context.fillText(bigNumTitle, 20, 700);
    }
    context.stroke();
  },
  setBigNumContent: function(context) {
    var bigNumContent = this.data.data.big;
    context.setFontSize(24);
    context.setFillStyle("#000000");
    if(!this.data.data.share_title){
      context.fillText(bigNumContent, 110, 630);
    }else{
      context.fillText(bigNumContent, 110, 700);
    }
    context.stroke();
  },
  // 将活动剩余绘制到canvas的固定
  setLave:function(context){
    var lave = "活动结束日期";
    context.setFontSize(20);
    context.setFillStyle("#ffffff");
    if(!this.data.data.share_title){
      context.fillText(lave, 352, 452);
    }else{
      context.fillText(lave, 352, 532);
    }
    context.stroke();
  },
  //将标题绘制到canvas固定
  setTitle: function (context) {
    var title = "家之和商城"
    context.setFillStyle("#000000"); //填充背景颜色
    context.font = 'normal bold 26px sans-serif';//设置字体加粗
   if(!this.data.data.share_title){
      context.fillText(title, 20, 780);
    }else{
      context.fillText(title, 20, 850);
    }
    context.stroke();
  },
  //将说明绘制到canvas固定
  setDetails: function(context){
    var details = "识别二维码下单，获取更多优惠！"//这是要绘制的文本
    context.setFillStyle("#484a3d"); //填充背景颜色
    context.font = 'normal normal 24px sans-serif';//设置字体
    if(!this.data.data.share_title){
      context.fillText(details, 20, 830);
    }else{
      context.fillText(details, 20, 890);
    }
    context.stroke();
  },
  // 将联系我们绘制到canvas固定
  setCallMe: function(context) {
    var callMe = "联系我们";
    // context.setFontSize(20);
    context.setFillStyle("#737373");
    context.font = 'normal bold 20px sans-serif';
    if(!this.data.data.share_title){
      context.fillText(callMe, 20, 680);
    }else{
      context.fillText(callMe, 20, 740);
    }
    context.stroke();
  },
  // 将广东粤东绘制到canvas绘制
  setEastName: function(context) {
    var eastName = "广东粤东";
    // context.setFontSize(20);
    context.setFillStyle("#737373");
    context.font = 'normal normal 20px sans-serif';
    if(!this.data.data.share_title){
      context.fillText(eastName, 20, 710);
    }else{
      context.fillText(eastName, 20, 770);
    }
    context.stroke();
  },
  setEastPhone: function(context) {
    var eastPhone = "手机：";
    context.setFontSize(20);
    context.setFillStyle("#737373");
    if(!this.data.data.share_title){
      context.fillText(eastPhone, 110, 710);
    }else{
      context.fillText(eastPhone, 110, 770);
    }
    context.stroke();
  },
  setEastNumber: function(context) {
    var eastNumber = "186 2000 0370";
    context.setFontSize(20);
    context.setFillStyle("#000000");
    if(!this.data.data.share_title){
      context.fillText(eastNumber, 160, 710);
    }else{
      context.fillText(eastNumber, 160, 770);
    }
    context.stroke();
  },
  setEastQQ: function(context) {
    var eastQQ = "QQ ：";
    context.setFontSize(20);
    context.setFillStyle("#737373");
    if(!this.data.data.share_title){
      context.fillText(eastQQ, 315, 710);
    }else{
      context.fillText(eastQQ, 315, 770);
    }
    context.stroke();
  },
  setEastNum: function(context) {
    var eastNum = "96981 3300";
    context.setFontSize(20);
    context.setFillStyle("#000000");
    if(!this.data.data.share_title){
      context.fillText(eastNum, 365, 710);
    }else{
      context.fillText(eastNum, 365, 770);
    }
    context.stroke();
  },
  // 将广东粤西绘制到canvas绘制
  setWeatName: function(context) {
    var weatName = "广东粤西";
    // context.setFontSize(20);
    context.setFillStyle("#737373");
    context.font = 'normal normal 20px sans-serif';
    if(!this.data.data.share_title){
      context.fillText(weatName, 20, 740);
    }else{
      context.fillText(weatName, 20, 800);
    }
    context.stroke();
  },
  setWeatPhone: function(context) {
    var weatPhone = "手机：";
    context.setFontSize(20);
    context.setFillStyle("#737373");
    if(!this.data.data.share_title){
      context.fillText(weatPhone, 110, 740);
    }else{
      context.fillText(weatPhone, 110, 800);
    }
    context.stroke();
  },
  setWeatNumber: function(context) {
    var weatNumber = "186 2000 1091";
    context.setFontSize(20);
    context.setFillStyle("#000000");
    if(!this.data.data.share_title){
      context.fillText(weatNumber, 160, 740);
    }else{
      context.fillText(weatNumber, 160, 800);
    }
    context.stroke();
  },
  setWeatQQ: function(context) {
    var weatQQ = "QQ ：";
    context.setFontSize(20);
    context.setFillStyle("#737373");
    if(!this.data.data.share_title){
      context.fillText(weatQQ, 315, 740);
    }else{
      context.fillText(weatQQ, 315, 800);
    }
    context.stroke();
  },
  setWeatNum: function(context) {
    var weatNum = "96980 2233";
    context.setFontSize(20);
    context.setFillStyle("#000000");
    if(!this.data.data.share_title){
      context.fillText(weatNum, 365, 740);
    }else{
      context.fillText(weatNum, 365, 800);
    }
    context.stroke();
  },
  // 将全国内勤绘制到canvas绘制
  setBackName: function(context) {
    var backName = "全国内勤";
    // context.setFontSize(20);
    context.setFillStyle("#737373");
    context.font = 'normal normal 20px sans-serif';
    if(!this.data.data.share_title){
      context.fillText(backName, 20, 770);
    }else{
      context.fillText(backName, 20, 830);
    }
    context.stroke();
  },
  setBackPhone: function(context) {
    var backPhone = "手机：";
    context.setFontSize(20);
    context.setFillStyle("#737373");
    if(!this.data.data.share_title){
      context.fillText(backPhone, 110, 770);
    }else{
      context.fillText(backPhone, 110, 830);
    }
    context.stroke();
  },
  setBackNumber: function(context) {
    var backNumber = "186 2000 0630";
    context.setFontSize(20);
    context.setFillStyle("#000000");
    if(!this.data.data.share_title){
      context.fillText(backNumber, 160, 770);
    }else{
      context.fillText(backNumber, 160, 830);
    }
    context.stroke();
  },
  setBackQQ: function(context) {
    var backQQ = "QQ ：";
    context.setFontSize(20);
    context.setFillStyle("#737373");
    if(!this.data.data.share_title){
      context.fillText(backQQ, 315, 770);
    }else{
      context.fillText(backQQ, 315, 830);
    }
    context.stroke();
  },
  setBackNum: function(context) {
    var backNum = "96983 2233";
    context.setFontSize(20);
    context.setFillStyle("#000000");
    if(!this.data.data.share_title){
      context.fillText(backNum, 365, 770);
    }else{
      context.fillText(backNum, 365, 830);
    }
    context.stroke();
  },
  // 将公司名称绘制到canvas固定
  setCompanyName: function(context) {
    var companyName = "公司名称：广东家之和药业有限公司";
    context.setFontSize(18);
    context.setFillStyle("#000000");
    if(!this.data.data.share_title){
      context.fillText(companyName, 80, 820);
    }else{
      context.fillText(companyName, 80, 880);
    }
    context.stroke();
  },
  // 将公司地址绘制到canvas固定
  setCompanyAddress: function(context) {
    var companyAddress = "联系地址：广州市番禺区石基镇市莲路永善村段6号";
    context.setFontSize(18);
    context.setFillStyle("#000000");
    if(!this.data.data.share_title){
      context.fillText(companyAddress, 80, 850);
    }else{
      context.fillText(companyAddress, 80, 910);
    }
    context.stroke();
  },
  getImgInfo: function (url) {
    return new Promise((resolve, reject) => {
      if (this.data.imgs) {
        resolve(this.data.imgs)
      } else {
        // 获取图片信息 （配置downloadFile 合法域名 不然是获取不到资源的）
        wx.getImageInfo({
          src: url,//服务器返回的图片地址
          success: (res) => {
            this.setData({
              imgs: res.path,
            })
            resolve(res.path)
          },
          fail: function (res) {}
        });
      }
    })
  },
  getQrcodeInfo: function (url) {
    return new Promise((resolve, reject) => {
      if (this.data.scene) {
        resolve(this.data.scene)
      } else {
        // 获取图片信息 （配置downloadFile 合法域名 不然是获取不到资源的）
        wx.getImageInfo({
          src: url,//服务器返回的图片地址
          success: (res) => {
            this.setData({
              scene: res.path,
            })
            resolve(res.path)
          },
          fail: function (res) {}
        });
      }
    })
  },
  //将canvas转换为图片保存到本地，然后将图片路径传给image图片的src >>>终端海报
  createNewImg: async function() {
    console.log('999',this.data)
    var _this = this;
    var context = this.data.context
    context.setFillStyle('#FFF')
    context.fillRect(0, 0, this.data.windowW, this.data.windowH)
    // 无促销信息（产品背景颜色）
    if(!this.data.data.share_title){
      // 绘制产品背景颜色
      context.setFillStyle('#f9f9f9');
      context.fillRect(0, 0, 500,722);// x轴位置、y轴位置、宽度、高度
    }else{
      // 绘制产品背景颜色
      context.setFillStyle('#f9f9f9');
      context.fillRect(0, 0, 500,790);// x轴位置、y轴位置、宽度、高度
    }
    let imgs = await this.getImgInfo(this.data.data.img)
    let scene ="../news/img/qrcode.png";  //这里放你的本地图片路径，或者网络图片缓存在本地的路径
    if(!this.data.data.share_title){
      context.drawImage(imgs, 0, 0, 500, 400);  //这里是商品图片（测试）
    }else{
      context.drawImage(imgs, 0, 80, 500, 400);  //这里是商品图片（测试）
    }
    this.setContent(context);
    this.setId(context);
    this.setName(context);
    this.setSpecs(context);
    this.setCompany(context);
    this.setMidNum(context);
    this.setBigNum(context);
    this.setLave(context);
    this.setTitle(context);
    this.setDetails(context);
    if(!this.data.data.share_title){
      context.drawImage(scene, 380, 750, 100, 100);//这里是二维码图片 x轴位置、y轴位置、宽度、高度
    }else{
      context.drawImage(scene, 380, 810, 100, 100);//这里是二维码图片 x轴位置、y轴位置、宽度、高度
    }
    // context.draw(_this.getImg())
    context.draw(true,setTimeout(function(){
      wx.hideToast()
      _this.getImg()
    },1000));
  },
  //将canvas转换为图片保存到本地，然后将图片路径传给image图片的src >>>商品海报
  createNewTerminal: async function() {
    var _this = this;
    var context = this.data.context
    context.setFillStyle('#FFF')
    context.fillRect(0, 0, this.data.windowW, this.data.windowH)
    let imgs = await this.getImgInfo(this.data.data.img)
    var logo = "../news/img/bg.png";  //这里放你的本地图片路径，或者网络图片缓存在本地的路径
    if(!this.data.data.share_title){
      context.drawImage(imgs, 0, 0, 500, 400);  //这里是商品图片（测试）
    }else{
      // 绘制分享标题背景颜色
      context.setFillStyle('#f2f2f2');
      context.fillRect(0, 0, 500,80);// x轴位置、y轴位置、宽度、高度
      context.drawImage(imgs, 0, 80, 500, 400);  //这里是商品图片（测试）
    }
    this.setContent(context);
    this.setIdTitle(context);
    this.setIdContent(context);
    this.setNameTitle(context);
    this.setNameContent(context);
    this.setSpecsTitle(context);
    this.setSpecsContent(context);
    this.setCompanyTitle(context);
    this.setCompanyContent(context);
    this.setMidNumTitle(context);
    this.setMidNumContent(context);
    this.setBigNumTitle(context);
    this.setBigNumContent(context);
    if(!this.data.data.share_title){
      // 绘制联系我们背景颜色
      context.setFillStyle('#f2f2f2');
      context.fillRect(0, 650, 500,135);// x轴位置、y轴位置、宽度、高度
    }else{
      // 绘制联系我们背景颜色
      context.setFillStyle('#f2f2f2');
      context.fillRect(0, 710, 500,135);// x轴位置、y轴位置、宽度、高度
    }
    this.setCallMe(context);
    // 将广东粤东绘制到canvas绘制
    this.setEastName(context);
    this.setEastPhone(context);
    this.setEastNumber(context);
    this.setEastQQ(context);
    this.setEastNum(context);
    // 将广东粤西绘制到canvas绘制
    this.setWeatName(context);
    this.setWeatPhone(context);
    this.setWeatNumber(context);
    this.setWeatQQ(context);
    this.setWeatNum(context);
    // 全国内勤
    this.setBackName(context);
    this.setBackPhone(context);
    this.setBackNumber(context);
    this.setBackQQ(context);
    this.setBackNum(context);
    // 公司名称
    this.setCompanyName(context);
    // 公司地址
    this.setCompanyAddress(context);
    if(!this.data.data.share_title){
      context.drawImage(logo, 15, 800, 50, 50);//这里是二维码图片 x轴位置、y轴位置、宽度、高度
    }else{
      context.drawImage(logo, 15, 860, 50, 50);//这里是二维码图片 x轴位置、y轴位置、宽度、高度
    }
    // context.draw(_this.getImg())
    context.draw(true,setTimeout(function(){
      wx.hideToast()
      _this.getImg()
    },1000));
  },
  //将生成好的图片保存到本地 
  // tip: 在 draw 回调里调用canvasToTempFilePath方法才能保证图片导出成功。
  getImg() {
    var _this = this;
    wx.canvasToTempFilePath({
        canvasId: 'mycanvas',
        success: function success(res) {
            _this.setData({
                imagePath: res.tempFilePath,
            });   
        }
    });
  },
  //点击图片进行预览，长按保存分享图片
  previewImg: function(e) {
    var img = this.data.imagePath
    wx.previewImage({
        current:img, // 当前显示图片的http链接
        urls: [img] // 需要预览的图片http链接列表
    })
  },
  // 点击保存图片按钮
  saveCanvasImg(){
    // 将商品分享图片保存到本地
    wx.saveImageToPhotosAlbum({
      filePath: this.data.imagePath,
      success: function (data) {
        wx.hideLoading()
        wx.showModal({
          title: '提示',
          content: '您的二维码已保存到相册，赶快识别二维码添加小易进行咨询吧',
          showCancel: false,
        })
      },
      fail: function (err) {
        if (err.errMsg === "saveImageToPhotosAlbum:fail:auth denied" || err.errMsg === "saveImageToPhotosAlbum:fail auth deny" || err.errMsg === "saveImageToPhotosAlbum:fail authorize no response") {
          // 这边微信做过调整，必须要在按钮中触发，因此需要在弹框回调中进行调用
          wx.showModal({
            title: '提示',
            content: '需要您授权保存相册',
            showCancel: false,
            success: modalSuccess => {
              wx.openSetting({
                success(settingdata) {
                  console.log("settingdata", settingdata)
                  if (settingdata.authSetting['scope.writePhotosAlbum']) {
                    wx.showModal({
                      title: '提示',
                      content: '获取权限成功,再次点击图片即可保存',
                      showCancel: false,
                    })
                  } else {
                    wx.showModal({
                      title: '提示',
                      content: '获取权限失败，将无法保存到相册哦~',
                      showCancel: false,
                    })
                  }
                },
                fail(failData) {
                  console.log("failData", failData)
                },
                complete(finishData) {
                  console.log("finishData", finishData)
                }
              })
            }
          })
        }
      },
      complete(res) {
        wx.hideLoading()
      }
    })
  },
})
 