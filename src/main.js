import './default.css'
import './formoat.css'
import init from './computed.js'
import y from './selectBox.js'
import './move.js'
import './round.js'
import Vue from "vue";
Vue.config.productionTip = false

init('.computed')

y.init('.selectBox')


