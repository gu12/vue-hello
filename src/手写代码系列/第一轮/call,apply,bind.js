function fn1(params) {
    console.log(this)
}

function fn2(params) {
    console.log(2)
}

Function.prototype.call2 = function (context) {
    console.log(this)
    context = context?Object(context) : window
    context.fn = this

    var args = []
    for(var i = 0;i<arguments.length;i++){
        args.push('arguments['+i+']')
    }
    var result = eval('context.fn('+args+')')
    delete context.fn
    return result

}

Function.prototype.apply2 = function (context,args) {
    context = context?Object(context) : window
    context.fn = this
    if(!args){
        return  context.fn()
    }
  
    var result = eval('context.fn('+args+')')
    delete context.fn
    return result

}


Function.prototype.bind2 = function(context){
     var that = this
     let arg1 = [].slice.call(arguments,1)
    return function(){
        return that.apply(context,)
    }

}

var foo = {
    name: '小猫'
};

var window2 = {
    name: '小狗'
}

function bar(age) {
    console.log('我家养了一只'+this.name+'它'+age+'岁了');
}

let bindFn = bar.bind(window2)
bindFn()

