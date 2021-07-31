//pages/administrative/index.wxss
//获取应用实例
const app = getApp()
Page({
  data: { 
    naviList:[
      {
        icon:'../news/img/business_agreement.png',
        title:'合同协议',
        link:'/pages/contract/index',
      },
      {
        icon:'../news/img/labor_contract.png',
        title:'资产管理',
        link:'',
      },
      {
        icon:'../news/img/sign.png',
        title:'制度流程',
        link:'',
      },
      {
        link:'/pages/sign/index',
        icon:'../news/img/sign.png',
        title:'签收',
      },
      {
        link:'/pages/meal/index',
        icon:'../news/img/meal.png',
        title:'餐标',
      },
    ],
  }, 
})
   
