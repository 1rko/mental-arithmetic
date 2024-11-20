import React from "react";


/*export function snake(matr: Array<Array<number>>) {
    let arr: Array<Array<number>> = matr

    // @ts-ignore
    const recurs = (arr: any) => {

        if (arr[0].length === 0) return []
        if (arr[0].length === 1) return arr[0]
        if (arr[0].length === 2) return [arr[0][0], arr[0][1], arr[1][1], arr[1][0]]

        let n = arr.length
        let arrCopy = structuredClone(arr)      //глубокое копирование массивов

        let result: any = []


        for (let i = 0; i < n; i++) {
            result.push(arr[0][i])
        }
        for (let j = 1; j < n; j++) {
            result.push(arr[j][n - 1])
        }
        for (let i = (n - 2); i >= 0; i--) {
            result.push(arr[n - 1][i])
        }
        for (let j = (n - 2); j > 0; j--) {
            result.push(arr[j][0])
        }

        //удалим лишние элементы (удаляем крайние элементы матрицы)
        for (let i = (n - 1); i > 0; i--) {
            arrCopy[i].splice(n - 1, 1)
            arrCopy[i].splice(0, 1)
        }
        arrCopy.splice(n - 1, 1)
        arrCopy.splice(0, 1)

        console.log('arrCopy')
        console.log(arrCopy)

        console.log('result')
        console.log([...result, ...recurs(arrCopy)])

        return [...result, ...recurs(arrCopy)]
    }

    return recurs(arr)

}*/





