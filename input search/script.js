let input =document.querySelector('.input')
let result =document.querySelector('.result')

let productData = ['mouse' , 'mouse' ,'keyborad' , 'pc']

// console.log(productData)
productData.map((item)=>{
    result.innerHTML += item +'<br>'

})

let handelsrc = ()=>{
    result.innerHTML=''
    productData.filter((item)=>{
       if(item==input.value){
        console.log(item)
       }
       else if(item==undefined){
        console.log('not found')
       }
    })
    
}

