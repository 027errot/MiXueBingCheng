// pages/order/components/orderDetails/orderDetails.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoList: [{
      label: '下单时间',
      value: '2320-05-31 17：20:01'
    },{
      label: '订单编号',
      value: '1290873198273918273'
    },{
      label: '取餐号码',
      value: '1524'
    },{
      label: '备注',
      value: '无'
    }]
  },
  toOrder() {
    wx.switchTab({
      url: `/pages/indent/indent`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})