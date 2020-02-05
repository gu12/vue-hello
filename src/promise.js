

new Promise((resolve, reject) => {
     reject()
}).then(()=>{},()=>{
    console.log('q');
    // return new Promise((resolve, reject) =>{
    //     reject(333)
    // } )
}).then((a)=>{
    console.log('2333',a);
},(a)=>{
    console.log('33222222');
}).then(()=>{
    console.log(1);
},()=>{
    console.log(2);
}).then(()=>{
    console.log(3);
},()=>{
    console.log(4);
}).catch((err)=>{
    console.log('catch');
})