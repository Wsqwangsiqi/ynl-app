// 此文件是由模板文件 ".dtpl/page/$rawModuleName.js.dtpl" 生成的，你可以自行修改模板

import { pagify, MyPage, wxp } from 'base/'
import { getPageConfig } from 'utils/helper'
import { modal, toast } from 'utils/layer'

@pagify()
export default class extends MyPage {
  pageName = 'home/author'
  data = {
    canIUse: false
  }

  async onLoad() {
    // 获取用户信息
    let setting = await wxp.getSetting()
    if (setting.authSetting['scope.userInfo']) {
      // 已经授权
      this.setDataSmart({
        canIUse: false
      })
    } else {
      console.log('没有获取到 userInfo，因为没有授权过')
      this.setDataSmart({
        canIUse: true
      })
    }
  }

  bindGetUserInfo(e) {
    // 用户点击了授权
    if (e.detail.errMsg === 'getUserInfo:ok') {
      wxp.setStorageSync('userinfo', e.detail)
      wxp.switchTab({
        url: `${getPageConfig('home/index').url}`
      })
    } else {
      toast.show('请允许授权以便为你提供更好的服务', 2000)
    }
  }
}
