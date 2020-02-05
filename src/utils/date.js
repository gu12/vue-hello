const getYearMonthDay = (date)=>{
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    return {year,month,day}
}

const getDate = (year,month,day)=>{
    return new Date(year,month,day)
}


export {
    getYearMonthDay,
    getDate
}

