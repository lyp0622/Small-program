//index.js
var util = require('../../utils/util.js')

Page({
  data: {
 
  }, 
  
  bindDateChange: function (e) {
    var time = util.formatDate(new Date())
    console.log('1', time)
    console.log('picker发送选择改变，携带值为', e.detail.value)
    console.log('555',e)
    var lyp = time
    console.log('666',lyp)
    this.setData({
      lyp:lyp,
      time: time,
      date: e.detail.value,
      years: e.detail.value.split('-')[0],
      month: e.detail.value.split('-')[1]
    })
  }
})

