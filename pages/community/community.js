// pages/community/community.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rankList: [
      {
        id: 1,
        cover: '/images/cover1.jpg',
        title: '鬼灭之刃 柱训练篇',
        topTag: '日本动漫TOP1',
        score: 9.1,
        type: '动漫',
        year: '2025',
        tags: '日本 / 热血 战斗 / ufotable',
        desc: '呼吸法再进化，炭治郎迎来最终考验',
        hot: '98.3万',
        want: false,
        isNew: false,
        hashtags: ['鬼灭之刃燃爆', '柱的训练太狠了']
      },
      {
        id: 2,
        cover: '/images/cover2.jpg',
        title: '我推的孩子 第二季',
        score: '',
        type: '动漫',
        year: '2025',
        tags: '日本 / 剧情 偶像 / 赤坂明',
        desc: '',
        hot: '92.7万',
        want: false,
        isNew: true,
        hashtags: ['星野爱回归？']
      },
      {
        id: 3,
        cover: '/images/cover3.jpg',
        title: '镇魂街 第三季',
        score: 8.3,
        type: '动漫',
        year: '2025',
        tags: '中国大陆 / 热血 灵异 / 原创国漫',
        desc: '兄弟情与守护之战再度上演',
        hot: '76.4万',
        want: false,
        isNew: false,
        hashtags: ['国产热血天花板', '曹焱兵帅炸']
      },
      {
        id: 4,
        cover: '/images/cover4.jpg',
        title: '天官赐福 第二季',
        score: '',
        type: '动漫',
        year: '2025',
        tags: '中国大陆 / 奇幻 耽美 / 墨香铜臭',
        desc: '谢怜与花城再续前缘',
        hot: '68.9万',
        want: false,
        isNew: false,
        hashtags: ['花怜是真的']
      },
      {
        id: 5,
        cover: '/images/cover5.jpg',
        title: '咒术回战 第三季',
        topTag: '日本动漫TOP2',
        score: 8.9,
        type: '动漫',
        year: '2025',
        tags: '日本 / 超能力 战斗 / MAPPA',
        desc: '',
        hot: '61.1万',
        want: false,
        isNew: false,
        hashtags: ['五条悟回来了？']
      },
      {
        id: 6,
    cover: '/images/cover6.jpg',
    title: '狐妖小红娘 月红篇',
    score: '',
    type: '动漫',
    year: '2025',
    tags: '中国大陆 / 爱情 奇幻 / 国风',
    desc: '',
    hot: '59.2万',
    want: false,
    isNew: true,
    hashtags: ['涂山红红太美了']
      }
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
  onWant(e) {
    const idx = e.currentTarget.dataset.index;
    const rankList = this.data.rankList.slice();
    rankList[idx].want = !rankList[idx].want;
    this.setData({ rankList });
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})