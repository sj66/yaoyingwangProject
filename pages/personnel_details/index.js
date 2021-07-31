// pages/personnel_details/index.js
Page({
	data: { 
    inputValue: '', //用于显示输入语句
    searchinput: '', //用户输入的查询语句
  },
  onLoad: function (options) {
    var coding=options.coding;
    var name=options.name;
    var sex=options.sex;
    var department=options.department;
    var workingStatus=options.workingStatus;
    var time=options.time;
    var identityNumber=options.identityNumber;
    var education=options.education;
    var specialty=options.specialty;
    var phone=options.phone
    this.setData({
      coding: coding,
      name:name,
      sex:sex,
      department:department,
      workingStatus:workingStatus,
      time:time,
      identityNumber:identityNumber,
      education:education,
      specialty:specialty,
      phone:phone
    })
  }
})
