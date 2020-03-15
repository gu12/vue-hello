//观察者模式
function Observer() {
     this.state = '不开心'
     this.arr = []

}

Observer.prototype.attach = function (s) {
   this.arr.push(s)
}

Observer.prototype.setState = function (newState) {
   this.state = newState
   this.arr.forEach(fn => fn.update(this.state))
}

function Subject(name,target) {
   this.name = name
   this.target = target
}

Subject.prototype.update = function (newState) {
    console.log(this.name,newState);
}

let o = new Observer()
let s1 = new Subject('肖总',o)
let s2 = new Subject()
o.attach(s1)
o.setState('开心')


