const clickOutside = {
    inserted: function (el, binding) {
        function hide(e) {
            if (el === e.target || el.contains(e.target)) {
                return
            }
            binding.value()
        }
        el._hide = hide
        document.addEventListener('click', el._hide)

    },
    unbind(el) {
        document.removeEventListener(el._hide)
    }
}

export default clickOutside