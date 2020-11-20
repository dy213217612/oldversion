var app = getApp()
 
Page({
 
data: {
 
  username: '',
  pwd: '',
 checkboxValue:true,
userInfo: {}

 
},
// 协议判断
checkboxChange() {

  var tis = this.data.checkboxValue
  console.log(tis)
  this.setData({
    checkboxValue:!tis
  })
},
 
onLoad: function () {
 
var that = this
 
},
 
// 获取输入账号
 
inputname: function (e) {
 
this.setData({
 
username: e.detail.value
 
})
 
},

// 获取输入密码
 
inputpwd: function (e) {
 
this.setData({
 
pwd: e.detail.value
 
})
 
},

// 登录
login: function () {
  if(this.data.checkboxValue==false){
    wx.showToast({
   
      title: '请阅读用户协议',
       
      icon: 'none',
       
      duration: 2000
       
      })
  }
  else if (this.data.username.length == 0 || this.data.pwd.length == 0) {
 
wx.showToast({
 
title: '用户名和密码不能为空',
 
icon: 'none',
 
duration: 2000
 
})
 
}else {
  var that = this;
  wx.request({
    url: "https://studapi.hzyplus.com/goude/shop/shopLogin",  //请求的URL
      method: 'POST',                                        //提交方式
      header: { 'content-type': 'application/x-www-form-urlencoded' }, //设置请求的
      data:{
        'username': that.data.username,
        'pwd': parseInt(that.data.pwd) ,

      },
      success:function(res){
        var resData = res.data;
        console.log("sjjjjj:",resData);
        if(resData.code == 0){
          wx.showToast({
            title: '登录成功',
            icon: 'success',
            duration: 2000,
            success:function(){
              wx.redirectTo({
          url: '../mobile/mobile'
         })
            }
          })
        }else{
          wx.showToast({
 
            title: '登录失败',
             
            icon: 'none',
             
            duration: 2000
             
            })
        }
      }
  })
// 这里修改成跳转的页面
 

 
}
}

})