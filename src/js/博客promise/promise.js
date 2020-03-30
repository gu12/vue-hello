function Promise(excutor){
    //pending 等待态 fulfilled 成功态 失败态 rejected
    this.status = 'pending'
    this.value = undefined
    this.reason = undefined
    let self = this
    self.onResolveCallbacks = []
    self.onRejectedCallbacks = []

    function resolve(value){
        self.value = value
        //只有在等待态的时候才能更改
        if(self.status === 'pending'){  
            self.status = 'fulfilled'
            self.onResolveCallbacks.forEach(fn=>fn())
        }
    }
    function reject(reason){
        self.reason = reason
        if(self.status === 'pending'){
            self.status = 'rejected'
            self.onRejectedCallbacks.forEach(fn=>fn())
        }
    }

    try{
        excutor(resolve,reject)
    }catch(e){
        reject(e)
    }
}

function resolvePromise(promise2,x,resolve,reject){
    //对x进行判断 如果是一个普通值 直接resolve
    if(promise2 === x){
        return reject(new TypeError('不能return自己'))
    }
    if(x!==null && (typeof x === 'object' || typeof x === 'function')){
        try{
            let then = x.then
            if(typeof then === 'function'){
                then.call(x,y=>{
                    resolve(y)
                },r=>{
                    reject(r)
                })
            }else{
                resolve(x)
            }

        }catch(e){

        }
    }else{
        resolve(x)
    }
}


Promise.prototype.then = function(onfulfilled,onrejected){
        let self = this
        let promise2 = new Promise(function(resolve,reject){
            if(self.status === 'fulfilled'){
                setTimeout(()=>{
                    try{
                        let x =  onfulfilled(self.value)
                        resolvePromise(promise2,x,resolve,reject)                         

                    }catch(e){
                            reject(e)
                    }
                })
            }
            if(self.status === 'rejected'){
                setTimeout(()=>{
                    try{
                        let x =  onrejected(self.reason)
                        resolvePromise(promise2,x,resolve,reject)                         
                    }catch(e){
                        reject(e)
                    }
                })
            }
            if(self.status === 'pending'){
                self.onResolveCallbacks.push(function(){
                    setTimeout(()=>{
                        try{
                            let x =  onfulfilled(self.value)
                            resolvePromise(promise2,x,resolve,reject)                         
    
                        }catch(e){
                            reject(e)
                        }
                    })
                })
                self.onRejectedCallbacks.push(function(){
                    setTimeout(()=>{
                        try{
                            let x =  onrejected(self.reason)
                            resolvePromise(promise2,x,resolve,reject)                         
                        }catch(e){
                            reject(e)
                            
                        }
                    })
                })
            }
        })
        return promise2
     
}

module.exports  = Promise