// let f = function () {
//    return new Promise(((resolve, reject) => {
//       setTimeout(()=>{
//          resolve()
//       },1000)
//
//    }))
// }
// f().then(()=>{
//    console.log(1)
// }).then(()=>{
//    console.log(2);
// }).then(()=>{
//    console.log(3);
//    return new Promise((resolve,reject)=>{
//       reject()
//    })
// }).then(()=>{
//    console.log(5);
// },()=>{
//    console.log(6);
// })
//
//

let promisesi = new Promise((resolve,reject) => {
   reject('也')
})
let p = Promise.resolve(promisesi)

p.then(data => {
   console.log(data);
}).catch(e=>
   console.log(e)
)
