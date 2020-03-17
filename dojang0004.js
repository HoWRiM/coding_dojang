// 주어진 문자열(공백 없이 쉼표로 구분되어 있음)을 가지고 아래 문제에 대한 프로그램을 작성하세요.
// 이유덕,이재영,권종표,이재영,박민호,강상희,이재영,김지완,최승혁,이성연,박영서,박민호,전경헌,송정환,김재성,이유덕,전경헌

let string = "이유덕,이재영,권종표,이재영,박민호,강상희,이재영,김지완,최승혁,이성연,박영서,박민호,전경헌,송정환,김재성,이유덕,전경헌";
let list = string.split(",");
console.log("총 인원은 " + list.length + "명이다.");

let kim = 0;
let lee = 0;
let leejeayong = 0;

list.forEach(element => {
    if (element.substring(0,1) == "김") {
        kim++;
    }
    
    if (element.substring(0,1) == "이") {
        lee++;
    }

    if (element == "이재영") {
        leejeayong++;
    }
});

// 김씨와 이씨는 각각 몇 명 인가요?
console.log("김씨는 "+ kim + "명이고 이씨는 " + lee + "명이다.");

// "이재영"이란 이름이 몇 번 반복되나요?
console.log("이재영은 " + leejeayong + "번 반복된다.")

// 중복을 제거한 이름을 출력하세요.
list = list.filter((item, index, arr) => {
    return arr.indexOf(item) === index;
})
console.log("중복 이름 제거 인원은 " + list.length + "명이다.");

// 중복을 제거한 이름을 오름차순으로 정렬하여 출력하세요.
list.sort();
console.log("명단 정렬 : " + list);