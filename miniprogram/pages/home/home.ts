// pages/home/home.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getWayList: [{
      type: 0,
      tip: '下单免排队',
      imgPath: '../../static/home.png'
    },
    {
      type: 1,
      tip: '甜蜜送到家',
      imgPath: '../../static/corridor.png'
    }],
    activityList: [
      {
        title: '隐藏新喝法',
        imagePath: '../../static/corridor.png',
        url: 'URL(隐藏新喝法)'
      },
      {
        title: '领10元券包',
        imagePath: '../../static/home.png',
        url: 'URL(领10元券包)'
      },
      {
        title: '0元兑好物',
        imagePath: '../../static/corridor.png',
        url: 'URL(0元兑好物)'
      }
    ]
  },
  toMine() {
    wx.switchTab({
      url: `/pages/mine/mine`
    })
  },
  toResidue() {
    wx.navigateTo({
      url: `/pages/residue/residue`
    })
  },
  toCoupon() {
    wx.navigateTo({
      url: `/pages/coupon/coupon`
    })
  },
  toGetWay(e: WechatMiniprogram.BaseEvent) {
    if (e.currentTarget.dataset.type) {
      wx.navigateTo({
        url: `/pages/address/address`
      })
    } else wx.switchTab({
      url: `/pages/indent/indent`
    })
  },
  collage() {
    console.log('出来个弹窗选取货方式');
  },
  toLink(e: WechatMiniprogram.BaseEvent) {
    console.log('e', e.currentTarget.dataset.item.url);
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