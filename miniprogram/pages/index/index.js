//index.js
const app = getApp()

Page({
  data: {

  },

  onLoad: function() {
   
  },
  toDiary() {
    wx.navigateTo({
      url: '../Diary/Diary'
    })
  }
})
