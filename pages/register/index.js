//index.js
//获取应用实例
var app = getApp()    
Page({  
    data: {
        phone:'',
        number:'',
        password:'',
        minute: 60,
        yanStatus: false,
    },
    // 获取手机号码
    phoneInput:function(e){
        this.setData({
            phone:e.detail.value
        });
    },
    // 获取验证码
    phoneNumber:function(e){
        this.setData({
            number:e.detail.value
        });
    },
    // 获取密码
    phonePassword: function (e) {
        this.setData({ 
            password: e.detail.value 
        });
    },
    //发送验证码
    onNumber:function(){
        var that = this
        this.minute = setInterval(function() {//倒计时
          var minute = that.data.minute;
          minute--;
          that.setData({
            minute: minute,
            yanStatus: true,
          })
          if (minute == 0) {
            clearInterval(that.minute);
            that.setData({
              minute: 60,
              yanStatus: false,
            })
          }
        }, 1000)//一秒执行一次
        wx.request({
            url: 'https://yaoying.hulukeji.cn/api/wx_app/register_sendSms.php', //接口地址
            data: {
                phone: this.data.phone,
            },
            header: {
            'content-type': 'application/json' // 对数据进行 JSON 序列化
            },
            method:'POST',
            success (res) {
                console.log(res.data)
                if(res.data.status == 0){
                    console.log(res.data.info)
                    wx.showToast({
                        title: res.data.info,
                        icon: 'none',
                        duration: 2000//持续的时间
                    })
                }
            }
        })
    },
    //注册
    onRegister:function(){
        wx.request({
            url: 'https://yaoying.hulukeji.cn/api/wx_app/register.php', //接口地址
            data: {
                userName: this.data.phone,
                userPass: this.data.password,
                smsCode:this.data.number
            },
            header: {
            'content-type': 'application/json' // 对数据进行 JSON 序列化
            },
            method:'POST',
            success (res) {
                if(res.data.status === 1){
                    wx.navigateTo({
                      url: '/pages/edit_group/index',
                    })
                }else{
                    wx.showToast({
                        title: res.data.info,
                        icon: 'none',
                        duration: 2000//持续的时间
                    })
                }
            }
        })
    }
}) 