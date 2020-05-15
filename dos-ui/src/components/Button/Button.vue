<template>
    <button
        @click="clickBtn"
        :class="classBtn"
        :disabled="isDisabled" id="btn">
         <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'Button',
    display: 'Button按钮',
    data() {
        return {
            preCls: 'dos-btn',
            is_click: false,
            timer: '',
            rippleActive: true,
        }
    },
    props: {
        color:{
          type: String,
          default: 'normal'
        },
        ripple: {
          type: Boolean,
          default: false,
        },
        isDisabled: Boolean,
        shape: {
            type: String,
            default: 'rectangle',//'circle'圆角, 'rectangle'直角
        },
        type: {
            type: String,
            default: 'default',//['default',success', 'warning', 'error', 'info']
            validator(value) {
                let types = ['default','success', 'warning', 'error', 'info']
                return types.includes(value) || !value
            }
        },
        size: {
            type: String,
            default: 'medium',//['large', 'medium', 'small']
        }
    },
    computed: {
        classBtn() {
            let {preCls, type, size, shape,ripple} = this
            console.log(this.type)
            let className = [
                `${preCls}`,
                {
                    [`${preCls}-${type}`]: !!type,
                    [`${preCls}-${size}`]: !!size,
                    [`${preCls}-${shape}`]: !!shape,
                    [`${preCls}-ripple`]: !!ripple
                },
            ]
            console.log('------------')
            console.log(className)
             console.log('------------')
            return className
        }
    },
    methods: {
        clickBtn() {
           if(this.is_click){
              return false;
            }
            this.is_click=true;
            setTimeout(()=>{
              this.is_click=false;
            },2000)
        },
        riiple(){
         //清除上次没有执行的动画

        }
    },
}
</script>
