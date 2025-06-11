Page({
  data: {
    userInfo: {},
    userTags: []
  },
  onLoad() {
    // 获取微信用户信息
    const userInfo = wx.getStorageSync('userInfo') || {};
    // 获取已选标签
    const userTags = wx.getStorageSync('userTags') || [];
    this.setData({ userInfo, userTags });
  },
  onGoFav() {
    wx.showToast({ title: '我的收藏功能待开发', icon: 'none' });
  },
  onGoComment() {
    wx.showToast({ title: '我的评论功能待开发', icon: 'none' });
  },
  onGoSetting() {
    wx.showToast({ title: '设置功能待开发', icon: 'none' });
  },
  onLogout() {
    wx.showModal({
      title: '确认退出',
      content: '确定要退出登录并清除所有数据吗？',
      success: (res) => {
        if (res.confirm) {
          wx.clearStorageSync();
          wx.reLaunch({ url: '/pages/logs/logs' });
        }
      }
    });
  }
});