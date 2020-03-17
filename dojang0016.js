/*

DashInsert 함수는 숫자로 구성된 문자열을 입력받은 뒤, 
1. 문자열 내에서 홀수가 연속되면 두 수 사이에 - 를 추가하고, 
2. 짝수가 연속되면 * 를 추가하는 기능을 갖고 있다. 
(예, 454 => 454, 4546793 => 454*67-9-3) 
DashInsert 함수를 완성하자.

입력 - 화면에서 숫자로 된 문자열을 입력받는다.
"4546793"
출력 - *, -가 적절히 추가된 문자열을 화면에 출력한다.
"454*67-9-3"

*/

const arg = process.argv
const num = arg[2]
let answer = ""
let jjak = false
let hol = false

for (let i = 0; i < num.length; i++) {
    const numUnit = num.charAt(i)
    let dist = numUnit % 2 === 0
    
    if (dist) {
        if (jjak === true) {
            answer += "*" + numUnit
        } else {
            answer += numUnit
            jjak = true
        }
        hol = false
    } else {
        if (hol === true) {
            answer += "-" + numUnit
        } else {
            answer += numUnit
            hol = true
        }
        jjak = false
    }

}

console.log(answer)