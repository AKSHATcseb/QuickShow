const kConverter = (num) => {
    if(num > 1000){
        const kValue = (num / 1000).toFixed(1)
        return `${kValue}k`
    }
    else{
        return num
    }
}

export default kConverter
