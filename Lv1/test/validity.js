// function solution(today, terms, privacies) {
//     var answer = [];

//     // terms 매핑하기
//     let termsMap = new Map()

//     for (let t of terms) {
//         termsMap.set(...t.split(" "))
//     }
//     console.log(termsMap)

//     console.log(today)
//     // 오늘 날짜 숫자화
//     const todays = today.split(".").map(Number)
//     console.log(todays)//[2020, 1, 1]

//     // 각 개인정보 다루기
//     privacies.forEach((p, i) => {
//         const diffdays = []
//         const [date, term] = p.split(" ");
//         console.log("date", date)
//         console.log('term', term)

//         const dates = date.split(".").map(Number)
//         console.log(dates)//[2019,1,1], [2019, 11, 15], [2019, 7, 1], [2018,12,28]

//         // 년,월,일 뺄셈
//         for (let i = 0; i < dates.length; i++) {
//             console.log(todays[i])
//             console.log(dates[i])
//             diffdays.push(todays[i] - dates[i])
//             console.log(diffdays)
//         }
//         console.log(diffdays)

//         // 경과 일수 계산
//         const diff = diffdays.reduce((acc, d, i) => {
//             console.log(i)
//             switch (i) {
//                 case 0: return acc += d * 28 * 12;
//                 case 1: return acc += d * 28;
//                 case 2: return acc += d;
//             }
//         }, 0)

//         console.log(diff)

//         // 경과했다면 파기 대상
//         if (diff / 28 >= termsMap.get(term)) answer.push(i + 1)
//     })

//     return answer
// }

// let result = solution(
//     '2020.01.01',
//     ['Z 3', 'D 5'],
//     ['2019.01.01 D', '2019.11.15 Z', '2019.08.02 D', '2019.07.01 D', '2018.12.28 Z']
// );

// console.log(result);
// // 기댓값 : [1, 4, 5]
// ======================================================
// // 내코드
function solution(today, terms, privacies) {
    let answer = [];
    console.log(today)
    console.log(today.slice(0, 4))
    let tempToday = new Date(today)

    // let tempTerms = terms.map((ele)=>{return ele.split(' ')}) //tempTerms[1][0] => D, tempTerms[1][1] => 5
    const tempTerms = terms.reduce((acc, ele)=>{
        acc[ele[0]] = ele[2] * 1
        return acc;
    }, {})
    console.log(tempTerms);

    const createBeforeDate = (number) =>{
        let n = number * 28 //56
        let yyyy = Math.trunc(n/336)
        // console.log(Math.trunc(56/336))
        let mm = (n - (yyyy*336))/28 
        // console.log((n - (yyyy*336))/28)
        let dd = ((n - (yyyy*336))%28) < 10 ? (n - (yyyy*336))%28 + 1 : (n - (yyyy*336))%28 + 1
        // console.log((n - (yyyy*336))%28)
        // console.log((n - (yyyy*336))%28 + 1)
        return (yyyy+2000)+','+mm+','+(dd)+''
    }
    console.log(createBeforeDate(3))

    let tt = Object.entries(tempTerms).reduce((acc,ele, idx)=>{
        acc[ele[0]] = createBeforeDate(ele[1])
        return acc;
    },{})

    // console.log(privacies)
    let minusArr = []
    for(let i = 0; i < privacies.length; i++){

    }
    console.log(minusArr)

    console.log(tt)

   
    const [date, type] = privacies[0].split(' ')
    console.log(date)
    console.log(type)

    const tempPrivacies = privacies.reduce((acc, ele, idx)=>{
        const [date, type] = privacies[idx].split(' ')
        acc[date] = type 
        return acc;
    },{})

    console.log(tempPrivacies)

    console.log(Object.values(tempTerms))
    tempToday.setDate(-28)
    console.log(tempToday.getDate())
    
    // const [date, type] = privacies.forEach((ele =>ele.split(' ')))
}

    // const tempPrivacies = privacies.reduce((acc, ele)=>{
    //     acc[ele[0]] = ele[2]
    //     return acc;
    // }, {})

    // console.log(tempPrivacies)
//terms의 Z가 today기준으로 3개월 전이면 privacies의 1요소가 z이면 3개월 전 날짜와 비교해서 날짜가 현재에서 뺀 날짜가 privacies의 0요소보다 작으면 유효기간이 만료 되었으므로 , 해당 인덱스를 answer애 push
// tempObj = reduce사용하여 해당 변수의 유통기한 지나는 기준 일을 obj 형태  

// console.log(tt[])

let result = solution(
    '2020.01.01',
    ['Z 3', 'D 5'],
    ['2019.01.01 D', '2019.11.15 Z', '2019.08.02 D', '2019.07.01 D', '2018.12.28 Z']
);

console.log(result);
// 기댓값 : [1, 4, 5]
