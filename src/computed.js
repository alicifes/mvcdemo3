import $ from "jquery";
import Model from "../base/Model.js";
import View from "../base/View.js";


const eventBus = $({})
//数据相关的放在m,m有四个方法
const m =new Model({
    data:{
        currentNumber:parseInt(localStorage.getItem('currentNumber'))
    },
    update(data){
        Object.assign(m.data.currentNumber,data)  //将生成的data赋值到原来的东西之上
        eventBus.trigger('currenNumberUpdated')
        localStorage.setItem('currentNumber',m.data.currentNumber.toString())
    }
})

// console.dir(m)
// console.log(m.data.currentNumber)

const c = {
    v:null,
    initV(){
        c.v = new View({
            el:c.container,
            computedHtml:`
         <div class="showNumber">
             <span class="output">{{currentNumber}}</span>
         </div>
         <button class="add">+10</button>
         <button class="sub">-10</button>
         <button class="multiply">*2</button>
         <button class="divide">÷2</button>
     `,
            render:function (n){
                if(c.v.el.children.length!==0){
                    c.v.el.empty()
                }
                $(c.v.computedHtml.replace(/{{currentNumber}}/,n)).appendTo(c.v.el)
            }
        })
    },
    init:(container)=>{
        c.container= container
        c.initV()
        c.v.render(m.data.currentNumber)//核心的关键点，view = render(data)
        c.bindMethods()
        eventBus.on('currenNumberUpdated',()=>{
            c.v.render(m.data.currentNumber)
        })
    },
    bindMethods:()=>{
        const hashMap={
            ".add":"add",
            ".sub":"sub",
            ".multiply":"multiply",
            ".divide":"divide"
        }
        for(let key in hashMap){
            const value = hashMap[key]
            const methods = c[value]
            c.v.el.on('click',key,methods)
            // $(key).on('click',key,methods)
        }
    },
    add:()=>{
        console.log('here')
        m.update({n:m.data.currentNumber+=10})
    },
    sub:()=>{
        m.update({n:m.data.currentNumber-=10})
    },
    multiply:()=>{
        m.update({n:m.data.currentNumber*=2})
    },
    divide:()=>{
        m.update({n:m.data.currentNumber/=2})
    }

}

export default c


