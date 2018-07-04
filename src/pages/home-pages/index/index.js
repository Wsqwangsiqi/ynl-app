// 此文件是由模板文件 ".dtpl/page/$rawModuleName.js.dtpl" 生成的，你可以自行修改模板

import { pagify, MyPage, wxp } from 'base/'
import { getPageConfig } from 'utils/helper';

@pagify()
export default class extends MyPage {
  pageName = 'home/index'

  data = {
    userList: {},
    eleList: [
      { price: '50元', type: '包季' },
      { price: '1元', type: '2小时/次' },
      { price: '20元', type: '包月' },
      { price: '2元', type: '充满' }
    ],
    activeIndex: -1
  }

  async onLoad() {
    await this.getUserInfo()
  }

  choseType(e) {
    const price = e.currentTarget.dataset.price
    const type = e.currentTarget.dataset.type
    this.setDataSmart({
      activeIndex: e.currentTarget.dataset.index
    })
    wxp.navigateTo({
      url: `${getPageConfig('user/pay').url}?type=${type}&price=${price}`
    })
  }

  async getUserInfo() {
    let res = wxp.getStorageSync('userinfo')
    this.setDataSmart({
      userList: res.userInfo
    })
  }

  call(e) {
    const phone = e.currentTarget.dataset.phone
    wxp.makePhoneCall({
      phoneNumber: phone
    })
  }
}
