let Promise = require('./MyPromise')

let p = new Promise((resolve,reject)=>{
   setTimeout(()=>{
      resolve('hahhhah')

   },1000)

})
p.then((a)=>{
   console.log(a);
})
console.log('end');

