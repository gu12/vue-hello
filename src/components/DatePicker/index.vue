<template>
    <div v-click-outside>
        <input type="text" :value="formatDate">
        <div class="pannel" v-if="isVisible">
            <div class="pannel-nav">
                <span>&lt;</span>
                <span>&lt;&lt;</span>
                <span>xxx年</span>
                <span>xxx月</span>
                <span>&gt;&gt;</span>
                <span>&gt;</span>
            </div>
            <div class="pannel-content">
                <div class="days">
                    <div v-for="i in 6 " :key="i">
                        <span class="cell" v-for="j in 7" :key="j" :class="[{notCurrentMonth:!isCurrentMonth(visibeDays[(i-1)*7+(j-1)])}]">
                                {{visibeDays[(i-1)*7+(j-1)].getDate()}}
                        </span>
                    </div>
                </div>
            </div>
            <div class="pannel-footer">
                今天
            </div>
        </div>
    </div>
</template>

<script>
    import * as utils from '../../utils/date'
    export default {
        name: "index",
        props:{
            value:{
                type:Date,
                default:()=> new Date()
            }
        },
        directives:{
            clickOutside:{
                bind(el,bindings,vnode){
                    //把事件绑定到DOCUMENT上
                    let handler = (e)=>{
                        if(el.contains(e.target)){
                            console.log('包含');
                            if(!vnode.context.isVisible){
                                vnode.context.focus()
                            }
                        }else{
                            if(vnode.context.isVisible){
                                vnode.context.blur()
                            }

                            console.log('bu包含');

                        }
                        console.log(e.target);
                    }
                    el.handler = handler
                    document.addEventListener('click',handler)

                },
                unbind(el){
                    //???
                    document.removeEventListener('click',el.handler)
                }
            }
        },
        data(){
            return{
                isVisible:false   //控制面板是否可见
            }
        },
        mounted() {
            console.log(this.visibeDays)
        },
        computed:{
            visibeDays(){
                //先获取当前是周几 循环42天
                let {year,month} = utils.getYearMonthDay(this.value)
                console.log(year, month);
                //获取当前月份的第一天
                let currentFirstday = utils.getDate(year,month-1,1)
                //获取是周几
                let week = currentFirstday.getDay()

                //获取开始日期
               let startDay =  currentFirstday - week * 60 * 60 * 1000 * 24
                console.log(startDay,week);
                //循环42天
                let arr = []
                for (let i = 0; i < 42; i++) {
                    arr.push(new Date(startDay + i * 60 * 60 * 1000 * 24))
                }
                return arr



            },
            formatDate(){
                let {year,month,day} = utils.getYearMonthDay(this.value)
                return `${year}-${month}-${day}`
            }
        },
        methods:{
            focus(){
                this.isVisible = true
            },
            blur(){
                this.isVisible = false
            },
            isCurrentMonth(date){
                //年 月 相同即为当月
                let {year,month} = utils.getYearMonthDay(this.value)
                let {year:y,month:m} = utils.getYearMonthDay(date)
                return year === y && month === m
            }
        }
    }
</script>

<style lang="scss" scoped>
    .pannel{
        width: 32*7px;
        position: absolute;
        background: #fff;
        box-shadow: 2px 2px 2px orange,-2px -2px 2px orange;
        .pannel-nav{
            display: flex;
            justify-content: space-around;
            height: 30px;
        }
        .pannel-content{
            .cell{
                display: inline-flex;
                justify-content: center;
                align-items: center;
                width: 32px;
                height: 32px;
            }

        }
        .pannel-footer{
            height: 30px;
            text-align: center;

        }
    }
    .notCurrentMonth{
        color: red;
    }

</style>