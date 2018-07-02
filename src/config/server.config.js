import { wxp } from '@minapp/core'

/*
 * 服务器相关配置

 */


// 是否为生产环境
const isProd = false

// 请求主机名
const host = isProd
  ? `` // 生产环境
  : `` // 测试环境

// extConfig 默认配置
const extDefault = isProd
  ? {  } // 生产环境
  : {  } // 测试环境

// 获取 extConfig
const extConfig = (() => {
  let eC = wxp.getExtConfigSync()
  return Object.keys(eC).length ? eC : extDefault
})()

// 响应错误码
const errorcode = {
  ERR_OK: 0, // ok
  ERR_AUTH: 40003 // 登录态过期
}

export default {
  host,
  errorcode,
  extConfig
}
