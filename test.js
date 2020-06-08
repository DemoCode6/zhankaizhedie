const dataList = [
  { 
    yh_title: '100元代金券',
    yh_time: '周一至周日10:30-18:00',
    yh_single: '单次可用1张',
    yh_money:'29.8',
    yh_discount:'3折',
    yh_limit:'今日限量',
    yh_sell:'半年售265',
  }, 
  { 
    yh_title: '100元代金券',
    yh_time: '周一至周日11:30-16:00',
    yh_single: '单次可用2张',
    yh_money:'59',
    yh_discount:'9折',
    yh_limit:'今日限量',
    yh_sell:'半年售265',
  }, 
  { 
    yh_title: '100元代金券',
    yh_time: '周一至周日11:30-16:00',
    yh_single: '单次可用2张',
    yh_money:'59',
    yh_discount:'9折',
    yh_limit:'今日限量',
    yh_sell:'半年售265',
  }, 
];
const width = getApp().globalData.width;

Page({
  data: {
     // 优惠券
     dataList: dataList,
     ischangeFold: true,
     active_text:'查看更多 ',
     active_text1:'收起',
     active_img:'/images/shangjiantou.png',
     active_img1:'/images/xiajiantou.png'
  },
  onShow: function () {
    
  },
  click:function(){
    this.setData({
      click: !this.data.click
    })
  },
  changeFold: function () {
    let _this = this;
    wx.createSelectorQuery().selectAll('.fold_text').boundingClientRect(data => {
      console.log('===', data);
      //获取屏幕显示区域的高度
      this.setData({
        ischangeFold: !_this.data.ischangeFold,
      });
      console.log(_this.data.btnHeight);
    }).exec()
  },
  closeChangeFold: function () {
    this.setData({
      ischangeFold: true,
      isbool: false,
    });
  },


})