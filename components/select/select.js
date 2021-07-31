// Componet/Componet.js
Component({
/**
 * 组件的属性列表
 */
    lifetimes: {
        attached: function() {
            if (this.properties.propIndex || this.properties.propIndex == 0) {
                let propArray = this.properties.propArray || []
                let nowText = propArray[this.properties.propIndex].text
                this.setData({
                    nowText:nowText,
                })
                let nowDate = {
                    id: this.properties.propIndex,
                    text:nowText
                }
                this.triggerEvent('myget', nowDate);
            }
        }
    },
  properties: {
      propArray:{
          type:Array,
      },
      propIndex: {
        type: Number,
      }
  },
/**
 * 组件的初始数据
 */
  data: {
      selectShow:false,//初始option不显示
      nowText:"请选择",//初始内容
      animationData:{}//右边箭头的动画
  },
/**
 * 组件的方法列表
 */
  methods: {
　　　//option的显示与否
      selectToggle:function(){
          var nowShow=this.data.selectShow;//获取当前option显示的状态
          //创建动画
          var animation = wx.createAnimation({
              timingFunction:"ease"
          })
          this.animation=animation;
          if(nowShow){
              animation.rotate(0).step();
              this.setData({
                  animationData: animation.export()
              })
          }else{
              animation.rotate(180).step();                
              this.setData({
                  animationData: animation.export()
              })
          }
          this.setData({
              selectShow: !nowShow
          })
      },
      //设置内容
      setText:function(e){
          var nowData = this.properties.propArray;//当前option的数据是引入组件的页面传过来的，所以这里获取数据只有通过this.properties
          var nowIdx = e.target.dataset.index;//当前点击的索引
          var nowText = nowData[nowIdx].text;//当前点击的内容
          var nowDate={
              id:nowIdx,
              text:nowText
          }
        //   在对组件进行封装时 在当前页面想要获取组件中的某一状态，需要使用到this.triggerEvent(' ',{},{}),第一个参数是自定义事件名称，这个名称是在页面调用组件时bind的名称，第二个对象就可以将想要的属性拿到
          this.triggerEvent('myget', nowDate);
          //再次执行动画，注意这里一定，一定，一定是this.animation来使用动画
          this.animation.rotate(0).step();
          this.setData({
              selectShow: false,
              nowText:nowText,
              animationData: this.animation.export()
          })
      }
  }
})