


export const TranslateObject  = (array=[]  ,lanCOde , key)=>{

    if(array.length<=1){ 
        return ' '
    }

    for (let index = 0; index < array.length; index++) {
            if(array[index].locale ==lanCOde)
            {
                return array[index][key]
            }
        
    }
    return array[0][key] ||" "
}
