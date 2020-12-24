export default {
    bind: function (el, {value}) {
        function copy(e) {
                if(!value){
                  return
                }
                console.log('value',value)
              let textarea =   document.createElement('textarea')
              textarea.style.position = 'absolute'
              textarea.style.left = '-9999px'
              textarea.readOnly = 'readonly'
              textarea.value = el.value
              document.body.appendChild(textarea)
              textarea.select()
              let r = document.execCommand("Copy","false",null)
              console.log(r)
           
        }
        el.copy = copy
        document.addEventListener('click', el.copy)

    },
    componentUpdated(el,{val}){
        el.value = val
    },
    unbind(el) {
        document.removeEventListener(el._hide)
    }

}