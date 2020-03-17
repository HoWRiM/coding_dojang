/*

10~1000까지 각 숫자 분해하여 곱하기의 전체 합 구하기
예로, 10~15까지의 각 숫자 분해하여 곱하기의 전체 합은 다음과 같다.

10 = 1 * 0 = 0
11 = 1 * 1 = 1
12 = 1 * 2 = 2
13 = 1 * 3 = 3
14 = 1 * 4 = 4
15 = 1 * 5 = 5

그러므로, 이 경우의 답은 0+1+2+3+4+5 = 15

*/

const arg = process.argv
const first = parseInt(arg[2])
const last = parseInt(arg[3])
let final = 0

let arr = []
for (let i = first; i <= last; i++) {
    i = String(i)
    let getMulti = 1
    for (let j = 0; j < i.length; j++) {
        getMulti = getMulti * parseInt(i.charAt(j))
    }
    final = final + getMulti
}

console.log(final)