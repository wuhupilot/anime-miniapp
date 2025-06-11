// pages/choose/choose.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    groups: [
      {
        title: '热门类型',
        tags: [
          { name: '热血番', selected: false },
          { name: '冒险奇幻', selected: false },
          { name: '异世界', selected: false, icon: '/images/world.png' },
          { name: '校园青春', selected: false }
        ]
      },
      {
        title: '题材风格',
        tags: [
          { name: '魔法/魔幻', selected: false, icon: '/images/magic.png' },
          { name: '悬疑推理', selected: false },
          { name: '耽美', selected: false },
          { name: '僵尸/恐怖', selected: false }
        ]
      },
      {
        title: '情感向',
        tags: [
          { name: '青梅竹马', selected: false, icon: '/images/horse.png' },
          { name: '傲娇系', selected: false },
          { name: '一见钟情', selected: false, icon: '/images/first.png' },
          { name: '慢热恋爱', selected: false },
          { name: '暗恋成真', selected: false }
        ]
      },
      {
        title: '动漫主题',
        tags: [
          { name: '成长励志', selected: false },
          { name: '美食番', selected: false, icon: '/images/food.png' },
          { name: '音乐/偶像', selected: false },
          { name: '体育运动', selected: false },
          { name: '策略智斗', selected: false }
        
        ]
      },
      {
        title: '经典系列',
        tags: [
          { name: '火影忍者', selected: false, icon: '/images/fire.png' },
          { name: '海贼王', selected: false },
          { name: '死神BLEACH', selected: false },
          { name: '新世纪福音战士', selected: false },
          { name: '进击的巨人', selected: false },
          { name: '名侦探柯南', selected: false }

        ]
      }
    ],
    selectedCount: 0
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  onTagTap(e) {
    const groupIdx = e.currentTarget.dataset.group;
    const tagIdx = e.currentTarget.dataset.tag;
    const groups = this.data.groups;
    const tag = groups[groupIdx].tags[tagIdx];
    tag.selected = !tag.selected;
    this.setData({
      groups,
      selectedCount: this.countSelected(groups)
    });
  },

  countSelected(groups) {
    let count = 0;
    groups.forEach(g => g.tags.forEach(t => { if (t.selected) count++; }));
    return count;
  },

  onSubmit() {
    // 可将已选标签上传或存储
    const selected = [];
    this.data.groups.forEach(g => g.tags.forEach(t => { if (t.selected) selected.push(t.name); }));
    wx.setStorageSync('userTags', selected); // 保存到本地
    wx.showToast({ title: `已选${selected.length}个`, icon: 'success' });
    // 跳转首页或其它页面
    setTimeout(() => {
      wx.switchTab({ url: '/pages/index/index' });
    }, 800);
  },

  onSkip() {
    wx.switchTab({ url: '/pages/index/index' });
  }
})