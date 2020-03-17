/*

1~1000에서 각 숫자의 개수 구하기
예로 10 ~ 15 까지의 각 숫자의 개수를 구해보자

10 = 1, 0
11 = 1, 1
12 = 1, 2
13 = 1, 3
14 = 1, 4
15 = 1, 5

그러므로 이 경우의 답은 0:1개, 1:7개, 2:1개, 3:1개, 4:1개, 5:1개

*/

var dict = {
    '0': 0, 
    '1': 0, 
    '2': 0, 
    '3': 0, 
    '4': 0, 
    '5': 0, 
    '6': 0, 
    '7': 0, 
    '8': 0, 
    '9': 0 
}

const arg = process.argv
const first = parseInt(arg[2])
const last = parseInt(arg[3])

let arr = []
for (let i = first; i <= last; i++) {
    i = String(i)
    for (let j = 0; j < i.length; j++) {
        dict[i.charAt(j)]++
    }
}

console.log(dict)