const  clickOutside={ 
    inserted(el,bindings,vnode){

        function outside(e){
            if(e.target === el || el.contains(e.target)){
                return
            }
            bindings.value()
        }

        el.outside = outside
        document.addEventListener('click',outside)



    },

    unbind(el, binding) {
        // 解除事件监听
        document.removeEventListener("click", el.outside);
        delete el.outside;
      }

}

export default clickOutside
