// 此文件是由模板文件 ".dtpl/page/$rawModuleName.js.dtpl" 生成的，你可以自行修改模板

import {pagify, MyPage, wxp} from 'base/'
import { toast, modal } from 'utils/layer';

@pagify()
export default class extends MyPage {
  data = {

  }

  async onLoad(options) {

  }


  changeName(){
     wxp.switchTab({
       url:'../../code-pages/code/code'
     })
  }
}
