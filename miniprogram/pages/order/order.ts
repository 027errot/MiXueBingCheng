// pages/order/order.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Height: '',
    tabList: [
      { name: '全部', type: 0 },
      { name: '历史', type: 1 },
      { name: '退单', type: 2 }
    ],
    activeTab: 0,
    allList: [{
      getWay: 0,
      storeName: '蜜雪冰城师大西门店',
      imgPath: '../../../../static/corridor.png',
      orderStatus: '已完成',
      totalCost: 4,
      totalNum: 1,
      orderTime: '2023-05-22 20:07:01'
    }],
    historyList: [],
    chargebackList: [
      {
        getWay: 0,
        storeName: '蜜雪冰城师大西门店',
        imgPath: '../../../../static/corridor.png',
        orderStatus: '已完成',
        totalCost: 4,
        totalNum: 1,
        orderTime: '2023-05-22 20:07:01'
      }, {
        getWay: 0,
        storeName: '蜜雪冰城师大西门店',
        imgPath: '../../../../static/corridor.png',
        orderStatus: '已完成',
        totalCost: 4,
        totalNum: 1,
        orderTime: '2023-05-22 20:07:01'
      }
    ]
  },
  changeTab(e: WechatMiniprogram.BaseEvent) {
    this.setData({
      activeTab: e.currentTarget.dataset.type
    })
    this.setHeight()
  },
  swiperTabChange(e: WechatMiniprogram.SwiperChange) {
    this.setData({
      activeTab: e.detail.current
    })
    this.setHeight()
  },
  setHeight() {
    let height: string
    let length = this.data.activeTab === 1 ? this.data.historyList.length : this.data.activeTab === 2 ? this.data.chargebackList.length : this.data.allList.length
    if (length < 3) length = 3.28
    height = 130*length + 'px'
    this.setData({
      Height: height
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
this.setHeight()
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