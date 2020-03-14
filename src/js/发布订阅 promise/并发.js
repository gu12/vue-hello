//并发
let fs = require('fs')

function after(times,callback){
   let result = {}
   return function (key,data) {
      result[key] = data
      if(--times === 0){
         callback(result)
      }

   }
}
let newFn = after(2,function (result) {
   console.log(result);
})
fs.readFile('./name.txt','utf-8',function (err,data) {
   console.log(err);
   console.log(data);
   newFn('name',data)

})

fs.readFile('./age.txt','utf-8',function (err,data) {
   console.log(err);
   console.log(data);
   newFn('age',data)


})
