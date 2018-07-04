/******************************************************************
MIT License http://www.opensource.org/licenses/mit-license.php
Author Mora <qiuzhongleiabc@126.com> (https://github.com/qiu8310)
*******************************************************************/

import { appify, wxp, MyApp } from 'base/'
import { getPageConfig } from 'utils/helper';

@appify({ pages: require('./app.cjson?pages'), tabBarList: require('./app.cjson?tabBar.list') })
export default class extends MyApp {
  async onLaunch() {
    // 登录
    // let { code } = await wxp.login()
    // console.log('微信 code %o', code) // 发送 code 到后台换取 openId, sessionKey, unionId
    // wxp.setStorageSync('code', code)
    // 获取用户信息
    let setting = await wxp.getSetting()
    if (setting.authSetting['scope.userInfo']) {
      // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
      // 可以将 getUserInfo 返回的对象发送给后台解码出 unionId
      let res = await wxp.getUserInfo()
      wxp.switchTab({
        url: `${getPageConfig('home/index').url}`
      })
    } else {
      console.log('没有获取到 userInfo，因为没有授权过')
    }
  }
}
