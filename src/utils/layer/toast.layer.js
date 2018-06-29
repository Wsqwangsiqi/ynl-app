import { wxp } from '@minapp/core'

/*
 * Toast 模块
 * @Author: Cphayim
 * @Date: 2018-03-21 16:08:28
 * @Last Modified by: Cphayim
 * @Last Modified time: 2018-05-25 16:56:48
 */

/**
 * 显示等待
 * @params {string} text 显示文字 [default='加载中...']
 */
function loading(text = '加载中...') {
  wxp.showToast({
    title: text,
    icon: 'loading',
    duration: 60000,
    mask: true
  })
}
/**
 * 显示成功
 * @params {string} text 显示文字 [default='']
 */
function success(text = '', duration = 3000) {
  wxp.showToast({
    title: text,
    icon: 'success',
    duration,
    mask: false
  })
}
/**
 * 显示无图标
 * @params {string} text 显示文字 [default='']
 */
function show(text = '', duration = 3000) {
  wxp.showToast({
    title: text,
    icon: 'none',
    duration,
    mask: false
  })
}
/**
 * 隐藏
 */
function hide() {
  wxp.hideToast()
}

export const toast = {
  loading,
  success,
  show,
  hide
}
