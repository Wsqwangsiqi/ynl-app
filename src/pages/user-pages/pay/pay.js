// 此文件是由模板文件 ".dtpl/page/$rawModuleName.js.dtpl" 生成的，你可以自行修改模板

import { pagify, MyPage, wxp } from 'base/'

@pagify()
export default class extends MyPage {
  pageName = 'user/pay'
  data = {
    price: '',
    type: ''
  }

  async onLoad(options) {
    // console.log(await wxp.getUserInfo())
    await this.setDataSmart({
      price: this.options.price,
      type: this.options.type
    })
    console.log(this.data.price)
    console.log(this.data.type)
  }

}
