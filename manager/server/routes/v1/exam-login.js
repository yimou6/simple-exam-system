const validateParams = require('../../util/validate-params')
const Teacher = require('../../model/teacher')
const paramsType = [
  {
    name: 'examNo',
    type: 'string'
  },
  {
    name: 'pwd',
    type: 'string'
  }
]
module.exports = function (req, res, next) {
  if (validateParams(paramsType, req.body)) {
    console.log(req.body)
    Teacher.findOne(req.body, function (err, doc) {
      console.log('err', err)
      console.log('doc', doc)
      if (err) {
        res.json({code: 1, message: 'login fail!'})
      } else {
        res.json({code: 0, data: doc, message: 'login success!'})
      }
    })
  } else {
    res.json({ code: 1, message: '参数错误!' })
  }
}
