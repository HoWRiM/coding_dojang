// 디지털 시계에 하루동안(00:00~23:59) 3이 표시되는 시간을 초로 환산하면 총 몇 초(second) 일까요?
// 디지털 시계는 하루동안 다음과 같이 시:분(00:00~23:59)으로 표시됩니다.

// 00:00 (60초간 표시됨)
// 00:01 
// 00:02 
// ...
// 23:59

let time = []
,   onOff = true
,   h = 0
,   hText = ""
,   m = ""
,   timeText = ""

while (onOff) {
    if (h < 10) hText = "0" + h
    else        hText = h + ""

    for (let i = 0; i < 60; i++) {
        if (i < 10) m = "0" + i
        else        m = i + ""

        timeText = hText + ":" + m
        time.push(timeText)
    }

    if (timeText == "23:59") onOff = false
    else h++
}

let getAns = 0

time.forEach(e => {
    let getTime = e.split(":")
    let hh = getTime[0]
    let mm = getTime[1]

    if (hh.indexOf("3") !== -1) {
        let h1 = hh.substring(0,1)
        let h2 = hh.substring(1,2)
        if (h1 == "3") getAns = getAns + (3 * 60 * 60)
        if (h2 == "3") getAns = getAns + (3 * 60)
    }

    if (mm.indexOf("3") !== -1) {
        let m1 = mm.substring(0,1)
        let m2 = mm.substring(1,2)
        if (m1 == "3") getAns = getAns + (3 * 10)
        if (m2 == "3") getAns = getAns + 3
    }
})

console.log(getAns)