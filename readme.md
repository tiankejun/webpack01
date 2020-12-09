// css 样式 与静态资源
// less|sass postcss(css扩展 压缩 兼容) 抽离css独立方案
// 样式 图片 字体
## 查看browserslist 设置
```
npx browserslist
<!-- 查看 市场使用率大于 0.5%，非IE 11 的 浏览器 --> 
npx browserslist '> 0.5%, not IE 11'
```
## browsers 配置 三种配置
- package.json
``` json
{
    "browserslist": [
        "last 2 version",
        "> 1%"
    ]
}
```

- `postcss.config.js`  导出一个对象
```javasrcipt
module.exports = {
    plugins: [
        require('autoprefixer')({
            overrideBrowserslist: ['last 2 versions', '>1%']
        })
    ]
}
```

- `.browserslistrc` 每个设置换一行
```
# Browsers that we support

last 2 version
> 1%
```