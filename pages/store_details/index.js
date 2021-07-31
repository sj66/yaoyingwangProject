// pages/store_details/index.js

var idinfolist = [
  { "code": "车牌号码", "text": '' },
  { "code": "品牌型号", "text": '' },
  { "code": "车辆类型", "text": '' },
  { "code": "所有人", "text": ''},
  { "code": "使用性质", "text": ''},
  { "code": "检验有效期", "text": ''},
  { "code": "商业险有效期", "text": ''},
  { "code": "强制险有效期", "text": '' },
  { "code": "注册日期", "text": '' },
  { "code": "录入日期", "text": '' },
  { "code": "折旧时间至", "text": ''},
  { "code": "车辆造价", "text": ''},
  { "code": "每月折旧", "text": ''},
  { "code": "起始公里数", "text": ''},
  { "code": "公里数登记", "text": '' },
  { "code": "平均油耗", "text": '' },
  { "code": "加油日期", "text": '' },
  { "code": "加油登记", "text": ''},
  { "code": "使用负责人", "text": ''}
]
 
Page({
	data: {
    listData: idinfolist,   
    inputValue: '', //用于显示输入语句
    searchinput: '', //用户输入的查询语句
  }
})
