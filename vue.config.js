module.exports = {
  pages: {
    login: {
      // page 的入口
      entry: "src/pages/login/login.js",
      // 模板来源
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "ITS登陆",
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["chunk-vendors", "chunk-common", "index"]
    },
    registered: {
      entry: "src/pages/registered/registered.js",
      template: "public/registered.html",
      filename: "registered.html",
      title: "ITS账号注册",
      chunks: ["chunk-vendors", "chunk-common", "registered"]
    },
    administrator: {
      entry: "src/pages/administrator/administrator.js",
      template: "public/administrator.html",
      filename: "administrator.html",
      title: "ITS账号管理界面",
      chunks: ["chunk-vendors", "chunk-common", "administrator"]
    },
    workorder: {
      entry: "src/pages/workorder/workorder.js",
      template: "public/workorder.html",
      filename: "workorder.html",
      title: "ITS工单",
      chunks: ["chunk-vendors", "chunk-common", "workorder"]
    },
    /* 当使用只有入口的字符串格式时，
    模板会被推导为 `public/index.html`
    并且如果找不到的话，就回退到 `public/index.html`。
    输出文件名会被推导为 `index.html`。 */
    index: {
      entry: "src/pages/login/login.js",
      template: "public/index.html",
      filename: "index.html",
      title: "ITS登陆"
    }
  },
  // 基本路径
  publicPath: "./",
  // 输出文件目录
  outputDir: "./tracking",
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // eslint-loader 是否在保存的时候检查 安装@vue/cli-plugin-eslint有效
  lintOnSave: false,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === "darwin",
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: null, // 设置代理
    before: () => {}
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
};
