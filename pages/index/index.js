// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  data: {
    motto: 'Hello World',
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
    agreedToTerms: false,
    agreedToPrivacy: false,
    searchText: '',
    styleTags: [
      { name: '治愈', selected: false },
      { name: '热血', selected: false },
      { name: '搞笑', selected: false },
      { name: '选育', selected: false },
      { name: '悬疑', selected: false },
      { name: '冒险', selected: false }
    ],
    keywordTags: [
      { name: '玩家', selected: false },
      { name: '校园', selected: false },
      { name: '热血', selected: false },
      { name: '萌', selected: false }
    ],
    animeList: [
      {
        id: 1,
        title: '动漫名称',
        tags: ['芳苓', '校园', '热血'],
        score: 9.0,
        fav: false
      },
      {
        id: 2,
        title: '动漫名称',
        tags: ['芳苓', '校园', '热血'],
        score: 9.0,
        fav: false
      }
    ],
    animeListRaw: [], // 用于搜索和筛选的原始数据
    actions: [
      { name: '找动漫', icon: '/images/find.png' },
      { name: '动漫榜单', icon: '/images/rank.png' },
      { name: '即将上映', icon: '/images/coming.png' },
      { name: '动漫网站', icon: '/images/web.png' }
    ],
    activeTab: 0,
    movieList: [],
    movieListHot: [
      {
        id: 1,
        cover: '/images/movie1.jpg',
        title: '新世纪福音战士剧场版 Air/真心为你',
        rating: 3.5,
        score: 7.3,
        fav: false
      },
      {
        id: 2,
        cover: '/images/movie2.jpg',
        title: '博人传-火影次世代-',
        rating: 4,
        score: 7.8,
        fav: false
      },
      {
        id: 3,
        cover: '/images/movie3.jpg',
        title: '为美好的世界献上祝福！',
        rating: 0,
        score: '',
        fav: false
      }
    ],
    movieListDouban: [
      {
        id: 4,
        cover: '/images/movie4.jpg',
        title: '时间之旅',
        rating: 4.5,
        score: 8.5,
        fav: false
      }
    ],
    recommendList: [
      {
        title: '国内即将上映',
        desc: '近期有10部热门电影',
        img: '/images/coming-soon.jpg'
      },
      {
        title: '全球值得期待',
        desc: '近期有7部热门电影',
        img: '/images/global-hot.jpg'
      }
    ]
  },
  
  onLoad() {
    console.log('页面加载开始')
    // 页面加载时检查是否已有用户信息
    try {
      const userInfo = wx.getStorageSync('userInfo')
      if (userInfo) {
        this.setData({
          userInfo: userInfo,
          hasUserInfo: true
        })
        console.log('从本地存储获取到用户信息:', userInfo)
      } else {
        // 只有在未登录时才检查协议同意状态
        const agreedToTerms = wx.getStorageSync('agreedToTerms') || false
        const agreedToPrivacy = wx.getStorageSync('agreedToPrivacy') || false
        this.setData({
          agreedToTerms: agreedToTerms,
          agreedToPrivacy: agreedToPrivacy
        })
      }
    } catch (error) {
      console.error('获取本地存储失败:', error)
    }
    console.log('页面加载完成')
    // 备份原始数据
    this.setData({
      animeListRaw: JSON.parse(JSON.stringify(this.data.animeList))
    })
    this.setData({ movieList: this.data.movieListHot });
  },
  
  onShow() {
    console.log('页面显示')
  },
  
  onReady() {
    console.log('页面初次渲染完成')
  },
  
  // 下拉刷新
  onPullDownRefresh() {
    console.log('下拉刷新')
    wx.showToast({
      title: '刷新成功',
      icon: 'success'
    })
    setTimeout(() => {
      wx.stopPullDownRefresh()
    }, 1000)
  },
  
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail
    const { nickName } = this.data.userInfo
    this.setData({
      "userInfo.avatarUrl": avatarUrl,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  
  onInputChange(e) {
    const nickName = e.detail.value
    const { avatarUrl } = this.data.userInfo
    this.setData({
      "userInfo.nickName": nickName,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  
  getUserProfile(e) {
    console.log('开始获取用户信息')
    
    // 检查是否同意用户协议和隐私政策（仅在首次登录时）
    if (!this.data.agreedToTerms || !this.data.agreedToPrivacy) {
      wx.showModal({
        title: '提示',
        content: '请先阅读并同意《用户协议》和《隐私政策》',
        showCancel: false,
        confirmText: '我知道了'
      })
      return
    }
    
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log('获取用户信息成功:', res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        // 保存用户信息到本地存储
        wx.setStorageSync('userInfo', res.userInfo)
        // 登录成功后清除协议同意状态，因为不再需要显示
        this.setData({
          agreedToTerms: false,
          agreedToPrivacy: false
        })
        wx.showToast({
          title: '登录成功',
          icon: 'success'
        })
      },
      fail: (err) => {
        console.log('获取用户信息失败', err)
        wx.showToast({
          title: '获取用户信息失败',
          icon: 'none'
        })
      }
    })
  },
  
  // 用户协议和隐私政策相关方法
  toggleTermsAgreement() {
    const newValue = !this.data.agreedToTerms
    this.setData({
      agreedToTerms: newValue
    })
    wx.setStorageSync('agreedToTerms', newValue)
    console.log('用户协议同意状态:', newValue)
  },
  
  togglePrivacyAgreement() {
    const newValue = !this.data.agreedToPrivacy
    this.setData({
      agreedToPrivacy: newValue
    })
    wx.setStorageSync('agreedToPrivacy', newValue)
    console.log('隐私政策同意状态:', newValue)
  },
  
  showUserAgreement() {
    wx.navigateTo({
      url: '../detail/detail?type=userAgreement'
    })
  },
  
  showPrivacyPolicy() {
    wx.navigateTo({
      url: '../detail/detail?type=privacyPolicy'
    })
  },
  
  // 页面跳转功能
  goToRecommend() {
    console.log('跳转到推荐页面')
    wx.navigateTo({
      url: '../recommend/recommend'
    })
  },
  
  goToRank() {
    console.log('跳转到排行榜页面')
    wx.navigateTo({
      url: '../rank/rank'
    })
  },
  
  goToCommunity() {
    console.log('跳转到社区页面')
    wx.navigateTo({
      url: '../community/community'
    })
  },
  
  // 退出登录
  logout() {
    wx.showModal({
      title: '确认退出',
      content: '确定要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          // 清除用户信息
          wx.removeStorageSync('userInfo')
          this.setData({
            userInfo: {
              avatarUrl: defaultAvatarUrl,
              nickName: '',
            },
            hasUserInfo: false,
            agreedToTerms: false,
            agreedToPrivacy: false
          })
          wx.showToast({
            title: '已退出登录',
            icon: 'success'
          })
        }
      }
    })
  },
  
  // 搜索输入
  onSearchInput(e) {
    const value = e.detail.value.trim();
    this.setData({ searchText: value });
    this.filterAnimeList();
  },

  // 风格标签选择
  onSelectStyleTag(e) {
    const idx = e.currentTarget.dataset.index;
    const styleTags = this.data.styleTags.map((tag, i) => ({ ...tag, selected: i === idx ? !tag.selected : tag.selected }));
    this.setData({ styleTags });
    this.filterAnimeList();
  },

  // 关键字标签选择
  onSelectKeywordTag(e) {
    const idx = e.currentTarget.dataset.index;
    const keywordTags = this.data.keywordTags.map((tag, i) => ({ ...tag, selected: i === idx ? !tag.selected : tag.selected }));
    this.setData({ keywordTags });
    this.filterAnimeList();
  },

  // 收藏切换
  onToggleFav(e) {
    const idx = e.currentTarget.dataset.index;
    const movieList = this.data.movieList.slice();
    movieList[idx].fav = !movieList[idx].fav;
    this.setData({ movieList });
  },

  // 综合筛选
  filterAnimeList() {
    const { animeListRaw, searchText, styleTags, keywordTags } = this.data;
    let filtered = animeListRaw;
    // 搜索
    if (searchText) {
      filtered = filtered.filter(item => item.title.indexOf(searchText) !== -1);
    }
    // 风格标签
    const selectedStyle = styleTags.filter(t => t.selected).map(t => t.name);
    if (selectedStyle.length > 0) {
      filtered = filtered.filter(item => selectedStyle.some(tag => item.tags.includes(tag)));
    }
    // 关键字标签
    const selectedKeyword = keywordTags.filter(t => t.selected).map(t => t.name);
    if (selectedKeyword.length > 0) {
      filtered = filtered.filter(item => selectedKeyword.some(tag => item.tags.includes(tag)));
    }
    this.setData({ animeList: filtered });
  },

  onTabChange(e) {
    const idx = e.currentTarget.dataset.index;
    this.setData({
      activeTab: idx,
      movieList: idx == 0 ? this.data.movieListHot : this.data.movieListDouban
    });
  },
  onMoreTap(e) {
    const type = e.currentTarget.dataset.type;
    console.log(type);
    wx.navigateTo({
      url: `/pages/movieList/movieList?type=${type}`
    });
  },
  onRecommendMoreTap(e) {
    const type = e.currentTarget.dataset.type;
    wx.navigateTo({
      url: `/pages/movieList/movieList?type=${type}`
    });
  },
  onActionTap(e) {
    const idx = e.currentTarget.dataset.index;
    wx.showToast({ title: `点击了${this.data.actions[idx].name}`, icon: 'none' });
  }
})
