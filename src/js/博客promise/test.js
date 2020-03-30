

let Promise = require('./promise')

let promise = new Promise((resolve,reject)=>{

    setTimeout(()=>{
            resolve('我是成功')
    },1000)
})

console.log(222)
promise.then((val)=>{
    console.log(val)

}).then(()=>{
    console.log(333)
   return new Promise(a=>{
       setTimeout(()=>{
           a()
           console.log(4444)
       },1000)
   })

}).then(()=>{
    console.log(555)
    

})