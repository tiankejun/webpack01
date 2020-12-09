// 不能是一个箭头函数
// 必须有返回值
module.exports = function  (source) {
    console.log(this.query) // options
    // return source.replace('hello', '你好') // 返回一个值
    const content = source.replace('你好', `你好 ${this.query.name}`)
    this.callback(null, content); // 返回多个值  
}