import Vue from "vue"
import './selectBox.css'

const initSelectBox =function (container){
    new Vue({
        el:container,
        data:{
            index:0
        },
        template:`
        <section class="selectBox">
            <div class="selectBoxContainer">
                <ol class="nav" >
                    <li :class="index===0?'navSelected':''" class="nav1" @click="index=0"><span>111</span></li>
                    <li :class="index===1?'navSelected':''" class="nav2" @click="index=1">222</li>
                </ol>
                <ol class="navContent">
                    <li :class="index===0?'':'disSelected'" class="content1">111111</li>
                    <li :class="index===1?'':'disSelected'" class="content2">222222</li>
                </ol>
            </div>
        </section>`,
    })
}
export default initSelectBox
