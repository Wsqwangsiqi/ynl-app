/*
 * 页面相关配置
 * 外部通过 utils/helper 模块的 getPage(pageName) 方法安全访问该对象
 */

/* 格式
{
  "页面名" : { // 中文注释
    url: string, // 格式为 `/${app.json中的路径}`
    needAuth: boolean, // 页面是否需要小程序用户授权，未配置默认为 false [目前除认证模块以外的页面全部要求授权]
    allowShare: boolean 是否允许分享转发页面
  }
}
*/
export default {
  /**
   * home 首页模块
   */
  'home/index': {
    url: '/pages/home-pages/index/index'
  },
  'home/undone': {
    url: '/pages/home-pages/undone/undone'
  },
  'home/author': {
    url: '/pages/home-pages/author/author'
  },
  /**
   * code 扫码模块
   */
  'code/code': {
    url: '/pages/code-pages/code/code'
  },
  /**
   * user 用户模块
   */
  'user/my': {
    url: '/pages/user-pages/my/my'
  },
  'user/order': {
    url: '/pages/user-pages/order-list/order-list'
  },
  // 充电记录
  'user/charging': {
    url: '/pages/user-pages/charging-record/charging-record'
  },
  'user/pay': {
    url: '/pages/user-pages/pay/pay'
  },

}
