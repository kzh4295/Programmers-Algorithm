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
        
        switch(ele){
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



=======================================나라님 코드=============================================================
    function solution(numbers, hand) {
    //2,5,8,0 가까운 손 찾기 펑션
    const findHand = (leftHand, rightHand, number) =>{
        const XY = {
            1:[0,0],2:[0,1],3:[0,2],
            4:[1,0],5:[1,1],6:[1,2],
            7:[2,0],8:[2,1],9:[2,2],
            "*":[3,0],0:[3,1],"#":[3,2]
        }
        
        let leftDist = Math.abs(XY[number][0]-XY[leftHand][0]) + Math.abs(XY[number][1]-XY[leftHand][1]);
        let rightDist = Math.abs(XY[number][0]-XY[rightHand][0]) + Math.abs(XY[number][1]-XY[rightHand][1]);
        return leftDist === rightDist? hand.substr(0,1).toUpperCase() : (leftDist > rightDist? 'R':'L');
    };
    
    //손 위치 계산
    let handCalc = numbers.reduce((acc,ele,idx)=>{
        let nowHand = acc.handNumObj[ele]? acc.handNumObj[ele] : findHand(acc.L, acc.R, ele);
        acc[nowHand] = ele;
        acc.handString += nowHand;
        
        return acc;
    },{
        handNumObj : {
            1:'L', 4:'L', 7:'L',
            3:'R', 6:'R', 9:'R',
            2:'',  5:'',  8:'',  0:''
        },
        L : '*',
        R : '#',
        handString : ''
    });
    return handCalc.handString;
}
