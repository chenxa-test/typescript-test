/** ===============================================
 *
 * 创建人：
 * 创建时间：2019/8/12 23:41
 * 创建说明：配置识别vue项目中的@等等路径别名解析的方法
 *
 * 修改人：
 * 修改时间：
 * 修改说明：
 *
 * Copyright (c) 2019, Eastcom Technologies Co. Ltd.(杭州东方通信软件技术有限公司广州分公司). All Rights Reserved.
 *
 * This file contains proprietary information of Eastcom Technologies Co. Ltd. Copying or
 * reproduction without prior written approval is prohibited.
 =============================================== **/

'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  context: path.resolve(__dirname, './'),
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
      '_c': resolve('src/components')
    }
  }
}
