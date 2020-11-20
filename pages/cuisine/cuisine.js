// pages/cuisine/cuisine.js
Page({

  /**
   * 页面的初始数据
   */
  data:{
    dad:[
      {
        shopid:'',
        catname:'',
        sortnum:''
      }
    ],
    //初始化数组
     addPrice: [{
          Price_Name: "",
          NumLimit: "",
         
        }],
       
    },
  
    //  生命周期函数--监听页面加载
    onReady:function(){
      //  let that = this
     
     },
    /**新增** */
      addNewPrice: function() {
        wx.request({
          url: 'https://studapi.hzyplus.com/goude/shop/shopAddItem?shopid=100&catname=111&sortnum=1',
          method:'POST',
          data:{
            shopid:"100",
            catname:'111',
            sortnum:'1',
          },
          success:function(res){
            console.log(res)
           
          },
          fail:function(err){
            console.log(err)
          }
        })
        let newArray = {
          Price_Name: "",
          NumLimit: "",
 
        }
        this.setData({
          addPrice: this.data.addPrice.concat(newArray)
        })
    },
     
    /****删除*/
      deletePrice: function(e) {
        let that = this
        let index = e.target.dataset.index //数组下标
        let arrayLength = that.data.addPrice.length //数组长度
        let newArray = []
        if (arrayLength > 1) {
          //数组长度>1 才能删除
          for (let i = 0; i < arrayLength; i++) {
            if (i !== index) {
              newArray.push(that.data.addPrice[i])
            }
          }
          that.setData({
            addPrice: newArray
          })
        } else {
          wx.showToast({
            icon: 'none',
            title: '必须设置一个分类',
          })
        }
      },
     
     
    /**获取输入框信息**/
      setInputValue: function(e) {
        let index = e.target.dataset.index //数组下标
        let tag = e.target.dataset.tag  //字段名称
        let array = this.data.addPrice;
        let dad = e.detail.value
        // let array = this.data.addPrice;
      
        if(dad ===""){
            wx.showToast({
              title: '值不能为空',
            })
        }else{
          array[index][tag] = e.detail.value  //赋值
        }
        this.setData({
          addPrice: array,
          dad
        })
        console.log(dad)
      },
})