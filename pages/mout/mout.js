// pages/order/order.js
Page({
 
    /**
    * 页面的初始数据
    */
//    swiprt切换栏数据
    data: {
    currtab: 0,
    swipertab: [{ name: '已完成', index: 0 }, { name: '待发货', index: 1 }, { name: '已发货', index: 2 },{ name: '全部', index: 3 }],
    },
     
    /**
    * 生命周期函数--监听页面加载
    */
    onLoad: function (options) {
          let that = this
    wx.request({
      url: 'https://studapi.hzyplus.com/goude/shop/shopItemlist',
      data:{
        shopid: "100",
        itemlist:[]
      },
      method:"GET",    //POST提交方式，后台也应该是POST函数   //请求头header
      success:function(res){  //#es是接收后台返回给前台的数据 
          console.log(res);
          that.setData({
            itemlist: res.data.itemlist,
          })
        
      },
      fail:(err)=>{
        console.log(err);
      }
    })
    },
    /**
    * 生命周期函数--监听页面初次渲染完成
    */
    onReady: function () {
    // 获取设备信息页面渲染完成
    this.getDeviceInfo()
    this.orderShow()
    },
    // 获取设备信息最大高度和宽度
    getDeviceInfo: function () {
    let that = this
    wx.getSystemInfo({
    success: function (res) {
    that.setData({
    deviceW: res.windowWidth,
    deviceH: res.windowHeight
    })
    }
    })
    },
     
    /**
    * @Explain：选项卡点击切换 切换获取数据
    */
    tabSwitch: function (e) {
    var that = this
    if (this.data.currtab === e.target.dataset.current) {
    return false
    } else {
    that.setData({
    currtab: e.target.dataset.current
    })
    }
    },
    //  获取订单目录里面的详细信息 设置详情
    tabChange: function (e) {
    this.setData({ currtab: e.detail.current })
    this.orderShow()
    },
    //  设置目录目标函数
    orderShow: function () {
    let that = this
    switch (this.data.currtab) {
    case 0:
    that.alreadyShow()
    break
    case 1:
    that.waitPayShow()
    break
    case 2:
    that.lostShow()
    break 
    case 3:
    that.nextShow()
    break 
    }
    },
    alreadyShow: function(){
    this.setData({
    alreadyOrder: [{ name: "你吃大火锅", state: "交易成功", time: "2020-09-30 14:00-16:00", status: "已结束", url: "https://s1.ax1x.com/2020/11/10/BqkEJ1.jpg", money: "132" }, { name: "你吃大炸鸡(圆明园店)", state: "交易成功", time: "2020-10-12 18:00-20:00", status: "已完成", url: "https://s1.ax1x.com/2020/11/10/BqkGWt.jpg", money: "205" }]
    })
    },
     
    waitPayShow:function(){
    this.setData({
    waitPayOrder: [{ name: "你吃大炸鸡(圆明园店)", state: "待发货", time: "2020-10-14 14:00-16:00", status: "未开始", url: "https://s1.ax1x.com/2020/11/10/BqkGWt.jpg", money: "186" }],
    })
    },
     
    lostShow: function () {
    this.setData({
    lostOrder: [{ name: "你吃大火锅", state: "已发货", time: "2020-10-4 10:00-12:00", status: "已发货", url: "https://s1.ax1x.com/2020/11/10/BqkEJ1.jpg", money: "122" }],
    })
    },
    nextShow:function(){
        this.setData({
            alreadyOrder: [{ name: "你吃大火锅", state: "交易成功", time: "2020-09-30 14:00-16:00", status: "已结束", url: "https://s1.ax1x.com/2020/11/10/BqkEJ1.jpg", money: "132" }, { name: "你吃大炸鸡(圆明园店)", state: "交易成功", time: "2020-10-12 18:00-20:00", status: "已完成", url: "https://s1.ax1x.com/2020/11/10/BqkGWt.jpg", money: "205" }],
            waitPayOrder: [{ name: "你吃大炸鸡(圆明园店)", state: "待发货", time: "2020-10-14 14:00-16:00", status: "未开始", url: "https://s1.ax1x.com/2020/11/10/BqkGWt.jpg", money: "186" }],
            lostOrder: [{ name: "你吃大火锅", state: "已发货", time: "2020-10-4 10:00-12:00", status: "已发货", url: "https://s1.ax1x.com/2020/11/10/BqkEJ1.jpg", money: "122" }],
        })
    },
     
    /**
    * 生命周期函数--监听页面显示
    */
    onShow: function () {
     
    },
     
    /**
    * 生命周期函数--监听页面隐藏
    */
    onHide: function () {
     
    },
     
    /**
    * 生命周期函数--监听页面卸载
    */
    onUnload: function () {
     
    },
     
    /**
    * 页面相关事件处理函数--监听用户下拉动作
    */
    onPullDownRefresh: function () {
     
    },
     
    /**
    * 页面上拉触底事件的处理函数
    */
    onReachBottom: function () {
     
    },
     
    /**
    * 用户点击右上角分享
    */
    onShareAppMessage: function () {
     
    }
    })
    