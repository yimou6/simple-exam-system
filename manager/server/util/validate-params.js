/**
 * 验证参数
 * name: 参数名称
 * type: 参数类型 string array object number boolean
 * required: 是否必须，默认为必须
 * @param validate {array} 验证规则
 * @param params {object} 参数
 */
module.exports = function (validate, params) {

  for (let i = 0; i < validate.length; i++) {
    // 验证是否存在
    if (validate[i].required) {
      if (!params.hasOwnProperty(validate[i].name)) {
        return false
      }
    }

    // 验证类型
    let validateType = {
      string: '[object String]',
      boolean: '[object Boolean]',
      number: '[object Number]',
      array: '[object Array]',
      object: '[object Object]',
    }

    return Object.prototype.toString.call(params[validate[i].name]) === validateType[validate[i].type];
  }
}
