
Component({
  properties: {
   
      name:String,
    place: String,
    expla:String
    
    
    //简写
   /* 
   phone: {
    type: String, //类型,目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
    value: '', //初始值
    observer: function(newVal, oldVal) {}
   }
   */
  },
  attached: function() {
   console.log(this.properties.expla); //控制台打印:"400-010-9797"
  },
  //...
 })