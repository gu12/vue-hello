//装饰器
//高阶函数 函数参数是函数 返回一个函数

function fn(val) {
   console.log('一定的功能'+val);
}
Function.prototype.before = function(callback){
   console.log('这是fn.before执行');
   let self = this
   return function (val) {
            callback()
            self(val)
   }
}
let newFn = fn.before(function () {
   console.log('在函数之前执行');
})
newFn('test')
