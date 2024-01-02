function addCommas(num) {
    const numStr = num + ''
    const decimalIdx = numStr.indexOf('.')
    let decimals = ''
    let arr = numStr.split('')

    if(decimalIdx>-1){
        decimals = arr.slice(decimalIdx).join('')
        arr = arr.slice(0,decimalIdx)
    }

    let i = arr.length -3
    while(i>0){
        arr.splice(i, 0, ',')
        i -=3
    }
    return arr.join('') + decimals
}

//arr. splice(idx, num to replace, value to insert)

module.exports = addCommas;