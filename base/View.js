import $ from 'jquery'

class View{
    constructor({el,computedHtml,render}) {
        this.el = $(el)
        this.computedHtml = computedHtml
        this.render = render
    }
}
export default View
