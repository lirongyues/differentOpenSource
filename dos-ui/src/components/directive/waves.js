import Vue from 'vue'
Vue.directive('waves', {
  bind(el, binding) {
     el.addEventListener('click', function(e){
       let x = e.clientX - e.target.offsetLeft
       let y = e.clientY - e.target.offsetTop
       let ripple = document.createElement('span')
       ripple.classList.add('span')
       ripple.style.width = ripple.style.height = Math.max(this.offsetWidth,this.offsetHeight)*2+ 'px'
       ripple.style.left = x+'px'
       ripple.style.top = y+'px'
       this.appendChild(ripple)
       setTimeout(function(){
         ripple.remove()
       },500)
     }, false)
  }
});
