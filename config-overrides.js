/*
* 基于customize 和 react-app-rewired的定制化配置文件
* */

// 引入相关的方法
const {
    override,
    addLessLoader,/*引入less方法*/
    fixBabelImports,/*按需加载antd*/
    addDecoratorsLegacy
} = require('customize-cra')

const modifyVars = require('./modifyVars')

module.exports = override(

    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addDecoratorsLegacy(),
    //引入less
    addLessLoader({
        javascriptEnabled: true,
        modifyVars
    })
)
