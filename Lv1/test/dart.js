function solution(dartResult) {
    // * 해당, 직전 점수 2배, 중첩가능
    // # 해당점수는 마이너스
    let answer = 0;
    const tempNumber = [0, 0, 0]
    const tempString = [1, 1, 1]
    const tempOption = [1, 1, 1]
    const sumArray = [0, 0, 0]

    for (let i = 0; i < 3; i++) {
        // 숫자 거르기
        tempNumber[i] = parseInt(dartResult)
        console.log(tempNumber[i])
        dartResult = dartResult.slice((tempNumber[i]+'').length)

        // 보너스 거르기
        switch (dartResult[0]) {
            case 'S':
                tempString[i] = 1; 
                break;
            case 'D':
                tempString[i] = 2; 
                break;
            case 'T':
                tempString[i] = 3; 
                break;
        }
        dartResult = dartResult.slice(1)

        // 옵션 거르기
        if (dartResult[0] == '*'){
            tempOption[i] = 2;
            dartResult = dartResult.slice(1)
        } else if(dartResult[0] == '#'){
            tempOption[i] = -1; 
            dartResult = dartResult.slice(1)
        }
    }
    
    
    console.log('tempNumber', tempNumber, 'tempString', tempString, 'tempOption', tempOption)

    // 보너스 및 옵션 반영 점수 계산
    for (let i = 0; i < 3; i++) {
        sumArray[i] = Math.pow(tempNumber[i], tempString[i]);
        sumArray[i] = sumArray[i] * tempOption[i];
        if (i > 0 && tempOption[i] == 2) {
            sumArray[i - 1] = sumArray[i - 1] * tempOption[i];
        }
    }

    // 점수 최종 합산
    answer = sumArray.reduce((acc, score) => { return acc + score }, 0)
    return answer;
}


let result = solution("1D2S#10S")

console.log(result)