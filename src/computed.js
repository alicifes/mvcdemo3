import Vue from "vue";

const init = (container)=>{
    const m = {
        get(){
            return parseInt(localStorage.getItem('currentNumber'))
        },
        set(n){
            localStorage.setItem('currentNumber',n)
        }
    }
    new Vue({
        el:container,
        data:{
            currentNumber:m.get()
        },
        template:`
        <section>
            <div class="showNumber">
                <span class="output">{{currentNumber}}</span>
            </div>
            <button class="add" @click="add">+10</button>
            <button class="sub" @click="sub">-10</button>
            <button class="multiply" @click="multiply">*2</button>
            <button class="divide" @click="divide">÷2</button>
        </section>`,
        methods:{
            add(){
                this.currentNumber+=10
            },
            sub(){
                this.currentNumber-=10
            },
            multiply(){
                this.currentNumber*=2
            },
            divide(){
                this.currentNumber/=2
            }
        },
        watch:{
            currentNumber:function (){
                m.set(this.currentNumber)
            }
        }
    })

}
export default init


