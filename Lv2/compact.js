function solution(msg) {
    let answer = [];
    let alphabetArray = [];
    let indexArray = [];
    
    // alphabetArray 대문자 알파벳의 배열 나열
    for(let i = 1; i<27; i++){
        alphabetArray.push(String.fromCharCode(i+64));
    }

    // msg에서 w, c를 구하고 alphabetArray에 w가 없으면 w를 alphabetArray에 추가하고
    let tt = [...msg].reduce((acc, ele,idx)=>{
        console.log(ele)
        if(alphabetArray.includes(acc[idx])){
            console.log(acc[idx])
        } else {
            alphabetArray.push(acc[idx])
        }
        return acc;
    },[...msg[0]])

    console.log(tt);
    console.log(indexArray)
    console.log(alphabetArray)

    // alphabetArray에 w가 있으면 w를 indexArray에 추가하고

    return answer;
}

let result = solution("KAKAO")

console.log(result)
            // 기댓값   [11,1,27,15]

// A의 charCodeAt() => 65
// A의 charCodeAt() => 87
// 64를 빼면 됨


