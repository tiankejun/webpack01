module.exports = function  (source) {
    console.log(this.query) // options
    // return source.replace('hello', '你好') // 返回一个值
    // this.callback(null, content); // 返回多个值
    const callback = this.async() // 异步逻辑
    setTimeout(() => {
        let content = source.replace('hello', '你好')
        callback(null, content) 
    }, 2000)    
}