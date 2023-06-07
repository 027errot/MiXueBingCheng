// pages/indent/indent.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isFold: true,
    totalCoat: 0,
    swiperList: [
      { imgPath: '../../static/home.png' },
      { imgPath: '../../static/home.png' },
      { imgPath: '../../static/home.png' },
    ],
    beverageList: [{
      category: '新品来袭',
      categoryId: 1,
      categoryImg: '../../static/corridor.png',
      list: [{
        name: '菠萝雪梨',
        price: 7,
        describe: '雪梨雪梨，清爽夏季',
        imgPath: '../../static/home.png'
      },{
        name: '草莓雪梨',
        price: 7,
        describe: '雪梨雪梨，清爽夏季',
        imgPath: '../../static/home.png'
      },{
        name: '菠萝甜心橙',
        price: 7,
        describe: '菠萝甜心橙，阳光夏威夷',
        imgPath: '../../static/home.png'
      },{
        name:  '百香芒芒',
        price: 7,
        describe: '雪王好芒，芒果好香',
        imgPath: '../../static/home.png'
      }]
    },{
      category: '爆款推荐',
      categoryId: 2,
      categoryImg: '../../static/corridor.png',
      list: [{
        name: '雪王大圣代',
        price: 6,
        describe: '雪梨雪梨，清爽夏季',
        imgPath: '../../static/home.png'
      },{
        name: '棒打鲜橙',
        price: 6,
        describe: '雪梨雪梨，清爽夏季',
        imgPath: '../../static/home.png'
      },{
        name: '芋圆葡萄',
        price: 8,
        describe: '菠萝甜心橙，阳光夏威夷',
        imgPath: '../../static/home.png'
      },{
        name:  '黑芝麻冰淇淋',
        price: 2,
        describe: '雪王好芒，芒果好香',
        imgPath: '../../static/home.png'
      }]
    },{
      category: '原味冰淇淋',
      categoryId: 3,
      categoryImg: '../../static/corridor.png',
      list: [{
        name: '冰淇淋搅搅杯（草莓啵啵杯）',
        price: 7,
        describe: '雪梨雪梨，清爽夏季',
        imgPath: '../../static/home.png'
      },{
        name: '冰淇淋搅搅杯（杨枝甘露芋圆）',
        price: 7,
        describe: '雪梨雪梨，清爽夏季',
        imgPath: '../../static/home.png'
      },{
        name: '冰淇淋搅搅杯（杨枝甘露珍珠）',
        price: 7,
        describe: '菠萝甜心橙，阳光夏威夷',
        imgPath: '../../static/home.png'
      },{
        name:  '雪王雪顶咖啡',
        price: 7,
        describe: '雪王好芒，芒果好香',
        imgPath: '../../static/home.png'
      }]
    }],
    cateHeight: 27, // 一个类型标题的高度
    goodHeight: 82, // 一个商品的高度
    scrollTop: 0,
    currentCategoryId: 1,
    currentId: 0,
    heightList: [150],
    shoppingList: [{}]
  },
  showCoupon() {
    this.setData({
      isFold: !this.data.isFold
    })
  },
  navChange(e: WechatMiniprogram.BaseEvent) {
    this.data.currentCategoryId = e.currentTarget.dataset.item.categoryId
    let categoryNum: number = 0
    let goodNum: number = 0
    this.data.beverageList.map((item, index) => {
      if (item.categoryId === this.data.currentCategoryId) {
        categoryNum = index
      } else if (item.categoryId < this.data.currentCategoryId) {
        // 这里能这么写是因为categoryId直接等于index，所以不用再查看分类的先后顺序
        goodNum += item.list.length
      }
    })
    this.setData({
      currentCategoryId: e.currentTarget.dataset.item.categoryId,
      scrollTop: 150 + categoryNum * this.data.cateHeight + goodNum * this.data.goodHeight
    })
    // 跳转
  },
  scrollTo(e: WechatMiniprogram.ScrollViewDragging){
    const scrollTop: number = e.detail.scrollTop //当前滚动的距离
    let categoryId: number  // 当前分类id
    this.data.heightList.map((item, index) => {
      if (scrollTop < item && index && scrollTop > this.data.heightList[index-1]) {
        categoryId = this.data.beverageList[index-1].categoryId
        this.setData({
          currentCategoryId: categoryId
        })
      }
    })
  },
  // 加入购物车&&商品数量+1
  add(e: WechatMiniprogram.BaseEvent) {
    console.log('e', e.currentTarget.dataset.item)
    let list: {}[] = this.data.shoppingList
    list.push(e.currentTarget.dataset.item)
    this.setData({
      shoppingList: [...list]
    })
    console.log('shoppingList', this.data.shoppingList);
  },
  // 结算
  settlement() {},

  /**
   * 生命周期函数--监听页面加载2
   */
  onLoad() {
    let height: number = 150
    let heightList: number[] = [150]
    this.data.beverageList.map((item) => {
      height += this.data.cateHeight + item.list.length * this.data.goodHeight
      heightList.push(height)
    })
    this.setData({
      heightList: heightList
    })
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