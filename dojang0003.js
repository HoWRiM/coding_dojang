// A씨는 게시판 프로그램을 작성하고 있다.
// A씨는 게시물의 총 건수와 한 페이지에 보여줄 게시물수를 입력으로 주었을 때 총 페이지수를 리턴하는 프로그램이 필요하다고 한다.
// 입력 : 총건수(m), 한페이지에 보여줄 게시물수(n) (단 n은 1보다 크거나 같다. n >= 1)
// 출력 : 총페이지수
// A씨가 필요한 프로그램을 작성하시오.


//m : 총건수
//n : 한페이지에 보여줄 게시물수
function getPageIndex(m, n) {
    return Math.ceil(m/n)  //올림
}

// 올림 함수(ceil)를 몰랐을 때
function getPageIndex2(m, n) {
    let pageIndex = parseInt(m/n)  //이정도는 알아야함.
    if (m%n > 0) {
        pageIndex++
    }
    return pageIndex
}

console.log(getPageIndex2(10, 3))
console.log(getPageIndex2(11, 10))