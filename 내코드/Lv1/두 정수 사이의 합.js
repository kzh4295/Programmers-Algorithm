소요시간  : 1:00:00

function solution(a, b) {
    let answer = 0;
    let arr  = [];
    if(a > b){
        for(let i = b; i < a +1; i++){
            arr.push(i);
            answer= arr.reduce((acc, ele)=>{
               return acc += ele;
            }, 0)
        }
    } else if(a === b){
        return answer = a; 
    } else{
        for(let i = a; i <b +1; i++){
            arr.push(i)
            answer = arr.reduce((acc, ele)=>{
                return acc += ele;
            },0)
        }
    }

    return answer;
}

==================타인의 코드 참고===============================
function solution(a, b) {
    var answer = 0;
        if(a < b){
            for(let j=a; j<=b; j++){
                answer += j;
            }
        }
        else if(a > b){
            for(let j=b; j<=a; j++){
                answer += j;
            }
        } 
        else if(a==b){
            answer=a;
        }
        return answer;
}

느낀점 : for문은 return문으로 값을 반환해도 이후의 조건 루프를 타니까 break문을 거는 것이 좋겠다.

==================타인의 코드 참고===============================

function adder(a, b){
    var result = 0
    return (a+b)*(Math.abs(b-a)+1)/2;
}


느낀점 : 
가우스의공식
n부터 m까지 더한 값 = (n + m)(n부터 m까지의 수의 개수)/2
을 이용하여 합을 구하는 방법을 코딩에 적용하면 보다 깔끔하겠구나.. 그리고 절대값을 구하면 개수를 구할 수 있으니 굉장히 유용하겠구나.
