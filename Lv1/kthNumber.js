function solution(array, commands) {
    let answer = []; 

    for(let i=0; i< commands.length; i++){
      let arr = [];
      arr.push(array.slice(commands[i][0]-1, commands[i][1]))
  
      let sortArr = arr.flat().sort()
      answer.push(sortArr[commands[i][2]-1])
    }

    return answer;
}

let result = solution([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]])

console.log(result)