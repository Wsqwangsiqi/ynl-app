/*
 * 字符串操作助手函数
 */

/**
 * 对象转为查询字符串
 * @function obj2QueryStr
 * @params {Object} data
 * @return string
 * @example
 * ```javascript
 * obj2QueryStr({name:'Cphayim', age: 18})
 * // => 'name=Cphayim&age=18'
 * ```
 */
export function obj2QueryStr(data) {
  let str = ''
  if (!data) return str
  const keys = Object.keys(data)
  for (let key of keys) {
    str += `${key}=${data[key].toString()}&`
  }
  return str.slice(0, -1)
}

/**
 * 去掉首尾空格
 * @function trim
 * @export
 * @param {any} str
 * @returns
 */
export function trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, '')
}

/**
 * 删除不支持的子串
 * @function delNosupport
 * @param {string} str
 * @returns
 */
export function delNosupport(str) {
  return str.replace(/translateZ\(\s*[^)]+\)/ig, '')
}
