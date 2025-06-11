// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: 'anime', // 默认显示动漫详情
    pageTitle: '动漫详情'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('页面参数:', options)
    
    if (options.type) {
      this.setData({
        type: options.type
      })
      
      // 设置页面标题
      if (options.type === 'userAgreement') {
        this.setData({
          pageTitle: '用户协议'
        })
        wx.setNavigationBarTitle({
          title: '用户协议'
        })
      } else if (options.type === 'privacyPolicy') {
        this.setData({
          pageTitle: '隐私政策'
        })
        wx.setNavigationBarTitle({
          title: '隐私政策'
        })
      }
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log('页面初次渲染完成')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log('页面显示')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log('页面隐藏')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log('页面卸载')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    console.log('下拉刷新')
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log('触底加载')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return {
      title: this.data.pageTitle,
      path: '/pages/detail/detail'
    }
  }
})