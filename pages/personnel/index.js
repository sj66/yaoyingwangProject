// pages/personnel/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeList:[
      {
        icon:'../news/img/personal_sales.png',
        coding: '00001',
        name: '张三',
        sex: '男',
        department: '广东家之和药业有限公司',
        workingStatus: '在职',
        time: '20年9月15日',
        identityNumber: '450722198709034627',
        education: '本科',
        specialty: '西药临床',
        phone: '18277764512'
      },
      {
        icon:'../news/img/personal_sales.png',
        coding: '00002',
        name: '李玲',
        sex: '女',
        department: '广东正康药业有限公司',
        workingStatus: '离职',
        time: '20年9月03日',
        identityNumber: '450722199909034638',
        education: '专科',
        specialty: '计算机',
        phone: '15247764666'
      },
      {
        icon:'../news/img/personal_sales.png',
        coding: '00003',
        name:'王丽',
        sex: '男',
        department: '广东仁和堂药业有限公司',
        workingStatus: '在职',
        time: '20年8月15日',
        identityNumber: '445722198709034777',
        education: '高中',
        specialty: '行政',
        phone: '18277764444'
      },
      {
        icon:'../news/img/personal_sales.png',
        coding: '00004',
        name: '张晓',
        sex: '女',
        department: '广东张晓药业有限公司',
        workingStatus: '在职',
        time: '20年6月6日',
        identityNumber: '450722200009034627',
        education: '本科',
        specialty: '设计',
        phone: '18277766666'
      },
      {
        icon:'../news/img/personal_sales.png',
        coding: '00006',
        name: '小海',
        sex: '男',
        department: '广东海洋药业有限公司',
        workingStatus: '在职',
        time: '20年5月15日',
        identityNumber: '455222199709034627',
        education: '本科',
        specialty: '临床',
        phone: '18266668888'
      },
      {
        icon:'../news/img/personal_sales.png',
        coding: '00005',
        name:'林旭',
        sex: '男',
        department: '广东林旭药业有限公司',
        workingStatus: '在职',
        time: '20年5月15日',
        identityNumber: '455222199709034627',
        education: '本科',
        specialty: '护士',
        phone: '18266664512'
      }
    ],
    typeList2:[
      {
        icon:'../news/img/personal_sales.png',
        coding: '00001',
        name: '张三',
        sex: '男',
        department: '广东家之和药业有限公司',
        workingStatus: '在职',
        time: '20年9月15日',
        identityNumber: '450722198709034627',
        education: '本科',
        specialty: '西药临床',
        phone: '18277764512'
      },
      {
        icon:'../news/img/personal_sales.png',
        coding: '00002',
        name: '李玲',
        sex: '女',
        department: '广东正康药业有限公司',
        workingStatus: '离职',
        time: '20年9月03日',
        identityNumber: '450722199909034638',
        education: '专科',
        specialty: '计算机',
        phone: '15247764666'
      },
      {
        icon:'../news/img/personal_sales.png',
        coding: '00003',
        name:'王丽',
        sex: '男',
        department: '广东仁和堂药业有限公司',
        workingStatus: '在职',
        time: '20年8月15日',
        identityNumber: '445722198709034777',
        education: '高中',
        specialty: '行政',
        phone: '18277764444'
      },
      {
        icon:'../news/img/personal_sales.png',
        coding: '00004',
        name: '张晓',
        sex: '女',
        department: '广东张晓药业有限公司',
        workingStatus: '在职',
        time: '20年6月6日',
        identityNumber: '450722200009034627',
        education: '本科',
        specialty: '设计',
        phone: '18277766666'
      },
      {
        icon:'../news/img/personal_sales.png',
        coding: '00006',
        name: '小海',
        sex: '男',
        department: '广东海洋药业有限公司',
        workingStatus: '在职',
        time: '20年5月15日',
        identityNumber: '455222199709034627',
        education: '本科',
        specialty: '临床',
        phone: '18266668888'
      },
      {
        icon:'../news/img/personal_sales.png',
        coding: '00005',
        name:'林旭',
        sex: '男',
        department: '广东林旭药业有限公司',
        workingStatus: '在职',
        time: '20年5月15日',
        identityNumber: '455222199709034627',
        education: '本科',
        specialty: '护士',
        phone: '18266664512'
      }
    ],
    coding: '',
    name: '',
    sex: '',
    department: '',
    workingStatus: '',
    time: '',
    identityNumber: '',
    education: '',
    specialty: '',
    phone: ''
  },
  // 搜索
  query(e){
    var typeList = this.data.typeList2;		//先把第二条json存起来
    var typeList2 = [];		//定义一个数组
    //循环去取数据
    for(var i=0;i<typeList.length;i++){
      var string = typeList[i].name;
      //查询json里的name是否包含搜索的关键词，如果有就把他装进list2数组
      if(string.indexOf(e.detail.value) >= 0){
        typeList2.push(typeList[i]);
      }
    }
    //到这里list2就已经是你查出的数据
    //如果输入的关键词为空就加载list数据，不是空就加载list2数据
    if(e.detail.value == ""){
      //加载全部
      this.setData({
        typeList: typeList
      })
    } else {
      this.setData({
        typeList: typeList2
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
  onAddInfo(){
    this.data.typeList.unshift({
      coding: this.data.coding,
      name: this.data.name,
      sex: this.data.sex,
      department: this.data.department,
      workingStatus: this.data.workingStatus,
      time: this.data.time,
      identityNumber: this.data.identityNumber,
      education: this.data.education,
      specialty: this.data.specialty,
      phone: this.data.phone,
    })
    this.setData({
      typeList:this.data.typeList,
      typeList2:this.data.typeList,
      show:false,
      coding: '',
      name: '',
      sex: '',
      department: '',
      workingStatus: '',
      time: '',
      identityNumber: '',
      education: '',
      specialty: '',
      phone: ''
    })
  },
  // 点击商品详情
  onPersonnelDetail:function(e){
    wx.navigateTo({
      url: '/pages/personnel_details/index?coding='+e.currentTarget.dataset.coding+'&name='+e.currentTarget.dataset.name+'&sex='+e.currentTarget.dataset.sex+'&department='+e.currentTarget.dataset.department+'&workingStatus='+e.currentTarget.dataset.workingstatus+'&time='+e.currentTarget.dataset.time+'&identityNumber='+e.currentTarget.dataset.identitynumber+'&education='+e.currentTarget.dataset.education+'&specialty='+e.currentTarget.dataset.specialty+'&phone='+e.currentTarget.dataset.phone
    })
  },
})