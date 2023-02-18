function solution(numbers, hand) {
    let answer = '';
    let leftValue = 10                              // leftValue 시작값
    let rightValue = 12                             // rightValueValue 시작값
    
    let zeroToEleven = numbers.map((ele)=>{
        return ele = (ele === 0) ? 11 : ele;        //numbers의 0의 값을 11로 변경하여 distance와의 값을 계산하고자함
    })
    
    
    zeroToEleven.forEach((ele, idx)=>{
        let distanceLeft = 0;                       //left - ele 사이의 거리
        let distanceRight = 0;                      // right - ele 사이의 거리
        
        switch(ele === 0?11 :ele){
            case 1: case 4: case 7:
                zeroToEleven[idx] = 'L';
                leftValue = ele;
                break;
            case 3: case 6: case 9:
                zeroToEleven[idx] = 'R';
                rightValue = ele;
                break;
                
                
            case 2: case 5: case 8: case 11:
                distanceLeft = Math.abs(Math.trunc((leftValue - ele)/3)) + Math.abs((leftValue - ele)%3)
                distanceRight = Math.abs(Math.trunc((rightValue - ele)/3)) + Math.abs((rightValue - ele)%3)
                
                if(distanceLeft > distanceRight){
                    zeroToEleven[idx] = 'R'
                    rightValue = ele;
                } else if(distanceLeft < distanceRight){
                    zeroToEleven[idx] = 'L'
                    leftValue = ele;
                } else if(distanceLeft === distanceRight){
                    if(hand === 'left'){
                        zeroToEleven[idx] = 'L'
                        leftValue = ele;
                    } else {
                        zeroToEleven[idx] = 'R'
                        rightValue = ele;
                    }
                }
            
        }
    })
    
    answer = zeroToEleven.join('')
    return answer;
}
