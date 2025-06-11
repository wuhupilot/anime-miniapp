// pages/rank/rank.js
Page({
  

  /**
   * 页面的初始数据
   */
  data: {
    userTags: [],
    animeList: [
     
      {
        id: 1,
        cover: '/images/your-name.jpg',
        title: '你的名字',
        year: 2016,
        rating: 8.6,
        tags: ['日本', '动画', '爱情'],
        summary: '一对陌生男女因神秘力量互换身体，展开奇妙故事。'
      },
      {
        id: 2,
        cover: '/images/spirited-away.jpg',
        title: '千与千寻',
        year: 2001,
        rating: 9.3,
        tags: ['奇幻', '宫崎骏', '经典'],
        summary: '少女千寻闯入神秘世界，开启成长冒险旅程。'
      },
      {
        id: 3,
        cover: '/images/demon-slayer.jpg',
        title: '鬼灭之刃 剧场版 无限列车篇',
        year: 2020,
        rating: 8.5,
        tags: ['热血', '战斗', '感人'],
        summary: '炭治郎一行人踏上无限列车，与强大敌人展开激战。'
      },
      {
        id: 4,
        cover: '/images/evangelion.jpg',
        title: '新世纪福音战士：终',
        year: 2021,
        rating: 8.9,
        tags: ['科幻', '机战', '心理'],
        summary: '碇真嗣在终极战役中面临选择，走向自我救赎。'
      },
      {
        id: 5,
        cover: '/images/wolf-children.jpg',
        title: '狼的孩子雨和雪',
        year: 2012,
        rating: 8.8,
        tags: ['亲情', '成长', '治愈'],
        summary: '一位母亲独自抚养半人半狼的孩子，温情动人。'
      }
    ]
    

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const userTags = wx.getStorageSync('userTags') || [];
    this.setData({ userTags });
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