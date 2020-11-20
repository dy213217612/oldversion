Page({
  /**
   * 页面的初始数据
   */
  data: {
    // IMG_URL: constant.IMG_URL,
    spec_arr: [{ version: '', istock: '', ismoney: ''}]
  },
  chooseimg(e){
    let idx=e.currentTarget.id;
    this.setData({
      ['spec_arr[' + idx + '].toggle']: true
    })
  },
 
  onLoad: function (e) {
    let prepage = getCurrentPages()[getCurrentPages().length - 2];
    let spec_arr = prepage.data.spec_arr;
    console.log(spec_arr)
 
    // spec_arr.forEach(function(item,i){
    //   if (item.picurl) {
    //     if (item.picurl[0]) {
    //       item.toggle = true;
    //       //贵公司的图片服务器地址
    //       let isi = item.picurl[0].indexOf('http://xxxx') && item.picurl[0].indexOf('http://http://xxxx1');
    //       if (isi == -1) {
    //         item.picurl[0] = 'http://xxxx/' + item.picurl;
    //       }
    //     } else {
    //       item.toggle = false;
    //     }
    //   }
      
    // })
    // console.log(spec_arr)
    // this.setData({
    //   spec_arr: spec_arr != '' ? spec_arr : this.data.spec_arr
    // })
  },
 
  // 添加
  add() {
    let that=this;
    let spec_arr=this.data.spec_arr;
    let num;
    num = spec_arr.length;
    that.setData({
      ['spec_arr[' + num +']']: {}
    })
    console.log(this.data.spec_arr)
 
  },
  // 删除
  del(e) {
    let that = this;
    let idx=e.currentTarget.id;
    this.setData({
      ['spec_arr['+idx+']']: 0
    })
    console.log(this.data.spec_arr)
  },
  uppic(fun, spec_arr) {
    let that = this;
    let all_l = spec_arr.length;
    
    spec_arr.forEach(function (item, i) {
      if(item.toggle){
        //注意这里是一个图片上传的自定义组件，在本博客小程序图片上传中有介绍可以移步去看
        that.selectComponent("#logopic" + i).upload(function (data) {
          console.log(data)
          item.picurl = data;
          console.log('all_lpic', all_l)
          all_l = all_l - 1;
          if (all_l == 0) {
            typeof fun == "function" && fun(spec_arr);
          }
        })
      } else {
        console.log('all_l', all_l)
        all_l = all_l - 1;
        if (all_l == 0) {
          typeof fun == "function" && fun(spec_arr);
        }
      } 
      
    })
    
  },
  // 提交
  complete(e) {
    let that=this;
    let val=e.detail.value;
    let spec_arr = this.data.spec_arr;
    let is_all = 1;
 
    let newspec_arr=[];
    spec_arr.forEach(function (item, i){
      if (item != 0){
        item.version = val['version' + i];
        item.istock = val['istock' + i];
        item.ismoney = val['ismoney' + i];
        if (is_all != 0) {
           if (item.version == '' || item.istock == '' || item.ismoney == '') {
              is_all = 0;
              wx.showModal({
                title: '提示',
                content: '请补全商品属性',
                showCancel: false,
                success: function (res) {}
              })
            }
        }
        newspec_arr.push(item);
      }
    })
    console.log(newspec_arr)
    
    if (is_all == 0) {
      return;
    }
    
    let prepage = getCurrentPages()[getCurrentPages().length - 2];
 
    if (newspec_arr.length>0){
      that.uppic(function (data) {
        console.log(data);
        let isdata=[];
        data.forEach(function(item,i){
          if(item!=0){
            isdata.push(item);
          }
        })
        prepage.setData({
          spec_arr: isdata
        })
        wx.navigateBack({
          delta: 1
        })
 
      }, spec_arr)
 
    }else{
      prepage.setData({
        spec_arr: []
      })
      wx.navigateBack({
        delta: 1
      })
    }
       
  }
})