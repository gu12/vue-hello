import outSide from './outside'
import copy from './copy'

let directives = {
    outSide,
    copy
}

export default {
    install(Vue){
        Object.keys(directives).forEach((key)=>{
            Vue.directive(key, directives[key])
        })
    }
}