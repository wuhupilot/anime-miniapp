// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    agreed: false
  },
  onLoad() {
    // 已登录自动跳转首页
    const userInfo = wx.getStorageSync('userInfo');
    if (userInfo) {
      wx.reLaunch({ url: '/pages/index/index' });
    }
  },
  onToggleAgree() {
    this.setData({ agreed: !this.data.agreed });
  },
  onLogin() {
    if (!this.data.agreed) {
      wx.showModal({
        title: '提示',
        content: '请先阅读并同意《用户协议》和《隐私政策》',
        showCancel: false
      });
      return;
    }
    wx.getUserProfile({
      desc: '用于完善会员资料',
      success: (res) => {
        wx.setStorageSync('userInfo', res.userInfo);
        wx.showToast({ title: '登录成功', icon: 'success' });
        setTimeout(() => {
          wx.redirectTo({ url: '/pages/choose/choose' });
        }, 500);
      },
      fail: () => {
        wx.showToast({ title: '登录失败', icon: 'none' });
      }
    });
  },
  showUserAgreement() {
    wx.showModal({
      title: '用户协议',
      content: '1. 本应用仅供学习和娱乐使用\n2. 用户应遵守相关法律法规\n3. 不得利用本应用进行违法活动\n4. 我们保留修改本协议的权利',
      showCancel: false,
      confirmText: '我已阅读'
    });
  },
  showPrivacyPolicy() {
    wx.showModal({
      title: '隐私政策',
      content: '1. 我们只收集必要的用户信息\n2. 您的个人信息将被安全存储\n3. 我们不会向第三方泄露您的信息',
      showCancel: false,
      confirmText: '我已阅读'
    });
  }
})
