/*

A씨는 두 개의 버전을 비교하는 프로그램을 작성해야 한다.
버전은 다음처럼 "." 으로 구분된 문자열이다.
두 개의 버전을 비교하는 프로그램을 작성하시오.

0.0.2 > 0.0.1
1.0.10 > 1.0.3
1.2.0 > 1.1.99
1.1 > 1.0.1

*/

const ver1 = "0.1"
const ver2 = "0.1.3"

const ver1Arr = ver1.split(".")
const ver2Arr = ver2.split(".")

let getBigArr = []
if (ver1Arr.length > ver2Arr.length) getBigArr = ver1Arr
else getBigArr = ver2Arr

let getBigVer
for (let i = 0; i < getBigArr.length; i++) {
    let check1 = ver1Arr[i] == null ? 0 : ver1Arr[i]
    let check2 = ver2Arr[i] == null ? 0 : ver2Arr[i]

    check1 = parseInt(check1)
    check2 = parseInt(check2)

    if (check1 > check2) {
        getBigVer = ver1
        console.log(ver1)
        break
    } else if (check2 > check1) {
        getBigVer = ver2
        console.log(ver2)
        break
    }
}