// 此文件是由模板文件 ".dtpl/page/$rawModuleName.js.dtpl" 生成的，你可以自行修改模板

import {pagify, MyPage, wxp} from 'base/'

@pagify()
export default class extends MyPage {
  pageName = 'code/code'

  data = {

  }

  async onLoad(options) {
    wxp.scanCode().then(()=>{
      console.log('123')
    })
  }

    /**
   * 初始化页面
   * 重写父类的 _init()
   * 异步调用栈 onLoad -> _origin -> _init
   */
  async _init(){

  }
}
