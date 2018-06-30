// 此文件是由模板文件 ".dtpl/page/$rawModuleName.js.dtpl" 生成的，你可以自行修改模板

import { pagify, MyPage, wxp } from 'base/'

@pagify()
export default class extends MyPage {
  pageName = 'home/index'

  data = {
    userList: {
      Id: '微信Id',
      img: 'https://api.vtrois.com/image/180'
    },
    eleList: [
      { price: '50元', type: '包季' },
      { price: '1元', type: '2小时/次' },
      { price: '20元', type: '包月' },
      { price: '2元', type: '充满' },
    ],
    activeIndex: -1
  }

  async onLoad(options) {
    console.log(await wxp.getUserInfo())
  }

  choseType(e) {
    this.setDataSmart({
      activeIndex:e.currentTarget.dataset.index
    })
  }
  /**
 * 初始化页面
 * 重写父类的 _init()
 * 异步调用栈 onLoad -> _origin -> _init
 */
  async _init() {

  }
}
