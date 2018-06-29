import { wxp } from '@minapp/core'

/*
 * 转换器助手函数模块
 */

const BASE_WIDTH = 750

/**
 * 将 rpx 根据当前设备转换为 px
 * @param {number} rpx
 */
export function rpx2px(rpx) {
  const width = wxp.getSystemInfoSync().windowWidth
  return width / BASE_WIDTH * rpx
}
