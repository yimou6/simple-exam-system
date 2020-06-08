const mongoose = require('mongoose')
module.exports = mongoose.model('Teachers', mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  // 姓名
  name: String,
  // 考场号
  examNo: String,
  // 监考码
  pwd: String
}))
