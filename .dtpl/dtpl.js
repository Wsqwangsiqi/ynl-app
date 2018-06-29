// var path = require('path')

// module.exports = function(source) {
//   return {
//     templates: [
//       {
//         // 当在 pages 目录下新建一个文件夹时，向这个文件夹内注入 .dtpl/page 下的文件
//         matches: function() {
//           return source.isDirectory && /pages/.test(source.basicData.dirPath)
//         },
//         // return source.isDirectory && /pages/.test(source.basicData.dirPath);
//         name: './page',
//         inject: function() {
//           let { rawModuleName, dirName, dirPath } = source.basicData
//           let page = [dirName, rawModuleName, rawModuleName].join('/')

//           // 向 app.cjson 中注入内容
//           let appJson = path.resolve(dirPath, '..', 'app.cjson')

//           return [{ file: appJson, data: { page: '"' + page + '",' }, tags: 'loose', append: true }]
//         }
//       },
//       {
//         // 当在 components 目录下新建一个文件夹时，向这个文件夹内注入 .dtpl/component 下的文件
//         matches: function() {
//           return source.isDirectory && /^components?$/.test(source.basicData.dirName)
//         },
//         name: './component/'
//       }
//     ],
//     globalData: {
//       dollar: '$',
//       style: 'scss'
//     }
//   }
// }

var path = require('path');
module.exports = (source) => {
  return {
    templates: [
      {
        name: './page/',
        matches() {
          return source.isDirectory && /pages[\\\/].+-pages$/.test(source.basicData.dirPath);
        },
        inject() {
          const { rawModuleName, dirName, dirPath, rootPath } = source.basicData
          let relativeSrcPath = dirPath.match(/pages[\\\/].+-pages?$/)[0]
          // windows 兼容处理
          relativeSrcPath = relativeSrcPath.replace('\\', '/')
          const page = [relativeSrcPath, rawModuleName, rawModuleName].join('/')
          const appJson = path.join(rootPath, 'src', 'app.cjson')
          return [
            { file: appJson, data: { page: "\"" + page + "\"," }, tags: 'loose', append: true }
          ]
        }
      },
      {
        name: './component/',
        matches() {
          return source.isDirectory && /^(common|biz|icon)?$/.test(source.basicData.dirName);
        }
      }
    ],
    globalData: {
      dollar: '$',
      style: 'scss'
    }
  }
}
