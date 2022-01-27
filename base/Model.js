class Model{
    constructor(options){
        const optionArray = ['data','create','update','delete','get']
        optionArray.forEach((key)=>{
            if(key in options){
                this[key]= options[key]
            }
        })
    }
    create(){
        console.error('初始化未使用')
    }
    delete(){
        console.error('初始化未使用')
    }
    update(){
        console.error('初始化未使用')
    }
    get(){
        console.error('初始化未使用')
    }
}

export default Model
