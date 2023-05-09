function solution(S) {
    let answer = 0;
    const ss = [...S];
    let cnt = 0;

    for(let i=0; i<ss.length; i++){
        if(ss[i]=== '-' && ss[i+1] !== '+') answer = 0
        else{
           if(ss[i]=== '+'){
            ss.splice(0,2)
            cnt ++
           } else{
            ss.splice(0,1)
            cnt ++
           }
           answer = cnt;
        }
    }

    return answer;
}

let result1 = solution("16-+23")
console.log(result1)
// ㄱㅣ댓값           : 4

let result2 = solution("1111")
console.log(result2)
// // ㄱㅣ댓값           : 6

let result3 = solution("11-3+4")
console.log(result3)
// // ㄱㅣ댓값           : 0

