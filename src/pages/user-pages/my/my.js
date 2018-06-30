// 此文件是由模板文件 ".dtpl/page/$rawModuleName.js.dtpl" 生成的，你可以自行修改模板

import {pagify, MyPage, wxp} from 'base/'
import { toast, modal } from 'utils/layer';
import { getPageConfig } from 'utils/helper';

@pagify()
export default class extends MyPage {
  pageName = 'user/my'

  data = {
    userList:{
      Id:'微信Id',
      img:'https://api.vtrois.com/image/180'
    }
  }

  async onLoad(options) {

  }

  changeName(){
  }
}
