/*

일전에 뭐 게임 회사에서 본 간단한 퀴즈 테스트 입니다.

0~9까지의 문자로 된 숫자를 입력 받았을 때, 이 입력 값이 0~9까지의 숫자가 각각 한 번 씩만 사용된 것인지 확인하는 함수를 구하시오.

sample inputs: 0123456789 01234 01234567890 6789012345 012322456789
sample outputs: true false false true false

*/

const arg = process.argv
let getArg = arg[2]
,   goAndStop = true
,   distinction //판별하다
,   charCnt = 0
,   charArr = []

console.log("getArg = ", getArg)

while (goAndStop) {
    let char = getArg.charAt(charCnt)
    if (char == "" || char == undefined) goAndStop = false
    else charArr.push(char)
    charCnt++
}

let setCharArr = new Set(charArr)
if (charArr.length === setCharArr.size) distinction = true
else distinction = false

console.log("distinction = ", distinction)