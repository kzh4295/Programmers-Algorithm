function solution(n, arr1, arr2) {
    let answer = [];
    const conversionOne = arr1.map(ele=> ele.toString(2) * 1);
    const conversionTwo = arr2.map(ele=> ele.toString(2) * 1);
    const total = []; 

    for(let i = 0; i < n; i++){
        total[i] = (conversionOne[i] + conversionTwo[i]) + ""
        
    }
    console.log(total)
    // var newNumbers = numbers.map(array => array.map(number => number *2));
    answer = total.forEach((ele1, idx) => {ele1[idx].replaceAll("0", " ").replaceAll("1", "#")})
    // total.replaceAll("0", " ").replaceAll("1", "#")
    //     answer.push(decLine)

    return answer;
}


let result = solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10])

console.log(result)
//          ㄱㅣ대값   	["######", "###  #", "##  ##", " #### ", " #####", "### # "]