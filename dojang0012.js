/*

앞의 문제들 중 비슷한 알고리즘이 있던 것 같지만, 같은 건 없다고 생각해서 올립니다.
문제를 푸는데 많은 approach가 있을 듯 싶습니다.
이 문제의 핵심은 비트 연산을 얼마나 잘 이해하고 있냐이기 때문에 비트 연산으로 풀어주세요.

input은 int n을 입력 받아 
첫번째 row는 (n-1)의 O와 X, 
두번째 row는 (n-2)의 O와 XX, 
세번째 row는 (n-3)의 0와 XXX... 
n번째 row는 n의 X을 출력하시오.

입력 예시: 6

출력 예시:

OOOOOX 1
OOOOXX 3
OOOXXX 7
OOXXXX 15
OXXXXX 31
XXXXXX 63

*/

const arg = process.argv
const getNum = parseInt(arg[2])
let arr = []


for (let i = 1; i <= getNum; i++) {
    let str = ""
    for (let j = 1; j <= getNum - i; j++) {
        str = str + "0"
    }
    for (let k = 1; k <= i; k++) {
        str = str + "1"
    }
    arr.push(str)
}

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element.replace(/1/gi, "X"))
}