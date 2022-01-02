// const path = require('path')
// const PrerenderSPAPlugin = require('prerender-spa-plugin')

// module.exports = {
//   pages: {
//     index: {
//       // エントリーポイント
//       entry: 'src/main.js',
//     },
//   },

//   // buildファイルの出力先
//   outputDir: 'public',
  // リロード時に404になるためプリレンダリングするように対処(この方法が最適ではないと思うが一旦これで対処。。)
  // https://www.ritolab.com/entry/182
  // "npm install prerender-spa-plugin"
  // configureWebpack: () => {
  //   return {
  //     plugins: [
  //       new PrerenderSPAPlugin({
  //         staticDir: path.join(__dirname, 'public'),
  //         routes:
  //           [
  //             '/category',
  //           ]
  //       })

  //     ]
  //   }
  // },
//}