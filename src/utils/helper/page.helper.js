/**
 * 页面助手函数
 */
import { config } from 'config'
import { obj2QueryStr } from 'utils/helper/string.helper'

const { pageMap } = config

// 默认页,当传入的 pageName 未找到时，返回这个页面名的页面配置对象
const DEFAULT_PAGE_NAME = 'home/index'

// 当可选项没有在 pageMap 中配置时，用于提供默认值
const DEFAULT_PAGE_CONFIG = {
  needAuth: false, // 页面不需要授权
  shareType: 'self' // 分享跳转到自身
}

/**
 * 获取页面配置
 * @param {string} pageName
 */
export const getPageConfig = (pageName) => {
  if (typeof pageName !== 'string') {
    throw TypeError('getPageConfig: 必须传入一个 string 类型的 pageName 参数')
  }
  let page = pageMap[pageName]
  console.log(page);


  // 如果没有找到页面，返回
  if (!page) {
    page = pageMap[DEFAULT_PAGE_NAME]
    // 警告
    console.warn(`getPageConfig: 没有找到 ${pageName} 页面, 返回了 ${DEFAULT_PAGE_NAME} 页面`)
  }

  const resultConfig = Object.assign({}, DEFAULT_PAGE_CONFIG, page)
  console.log(resultConfig);

  // resultConfig.shareUrl = (() => { // 分享页面地址
  //   let shareUrl
  //   switch (resultConfig.shareType) {
  //     case 'custom': // 自定义分享地址
  //       if (!resultConfig.shareUrl) {
  //         throw ReferenceError(`getPageConfig: ${pageName}.shareType 配置了 'custom'，但没有设置 shareUrl`)
  //       }
  //       shareUrl = resultConfig.shareUrl
  //       break;
  //     case 'index': // 默认页地址
  //       shareUrl = pageMap[DEFAULT_PAGE_NAME].url
  //       break;
  //     default:
  //       // TODO 返回当前页
  //       shareUrl = getCurPageUrl()
  //       break;
  //   }
  //   return shareUrl
  // })()

  return resultConfig
}

/**
  * 获取当前页面 url(带参数)
  * @returns
  */
export const getCurPageUrl = () => {
  const pages = getCurrentPages() //eslint-disable-line
  if (pages.length > 0) {
    const curPage = pages[pages.length - 1]
    const { route, options } = curPage
    const queryStr = obj2QueryStr(options)
    return `/${route}${(queryStr ? `?${queryStr}` : '')}`
  } else {
    return getPageConfig(DEFAULT_PAGE_NAME).url
  }
}
