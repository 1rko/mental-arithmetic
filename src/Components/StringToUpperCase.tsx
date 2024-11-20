import React from "react";

export const StringToUpperCase = () => {
    let startStr = 'have-a_Nice-day'
    let endStr = ''

    const toUpper = (st: string, simb: string) => {
        let res = st.split(simb).map((elem, ind) => {
            if (ind>0) {
                let arr = elem.split('')
                arr[0]=arr[0].toUpperCase()
                elem=arr.join('')
                console.log(elem)
            }
            return elem
        }).join('')
        return res
    }
    endStr=toUpper(startStr, '-')
    endStr=toUpper(endStr, '_')
    console.log(endStr)

    return <>
    </>
}

