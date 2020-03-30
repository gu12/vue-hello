function Promise(executor) {
   //在内部定义一个状态
   let self = this
   self.status = 'pending'
   self.value = null
   self.reason = null
   self.onResolveCallbacks = [] //存放成功回调
   self.onRejectCallbacks = [] //存放失败回调
   function resolve(value) {
      if(self.status === 'pending'){
         self.value = value
         self.status = 'resolved'
         self.onResolveCallbacks.forEach(fn => fn())
      }
   }
   function reject(reason) {
      if(self.status === 'pending'){
         self.status = 'rejected'
         self.reason = reason
         self.onRejectCallbacks.forEach(fn => fn())
      }
   }
   executor(resolve,reject)
}
Promise.prototype.then = function(onFulfilled,onReject){
   let self = this
   if(self.status === 'resolved'){
      onFulfilled(self.value)
   }
   if(self.status === 'rejected'){
      onReject(self.reason)
   }
   if(self.status === 'pending'){
      self.onResolveCallbacks.push(function () {
         onFulfilled(self.value)
      })
      self.onRejectCallbacks.push(function () {
         onReject(self.reason)
      })

   }

}
let p = new Promise((resolve,reject)=>{
   setTimeout(()=>{

      resolve('hahhhah')

   },1000)

})
p.then((a)=>{
   console.log(a);
})
console.log('end');

module.exports = Promise
