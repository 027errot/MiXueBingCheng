// pages/order/components/orderList/orderList.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:[]
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toDetails(e: WechatMiniprogram.BaseEvent) {
      console.log('e', e);
      wx.navigateTo({
        url: `/pages/order/components/orderDetails/orderDetails`
      })
    },
  }
})
