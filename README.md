
코테를 통해 알게된 것

Array(3) //[empty × 3]

[...Array(3)] //[undefined, undefined, undefined]

[...Array(n).keys()] //[0, 1, 2, ...(n-1)]


for문은 return문으로 값을 반환해도 이후의 조건 루프를 타니까 break문을 거는 것이 좋겠다.

가우스의공식
n부터 m까지 더한 값 = (n + m)(n부터 m까지의 수의 개수)/2
을 이용하여 합을 구하는 방법을 코딩에 적용하면 보다 깔끔하겠구나.. 그리고 절대값을 구하면 개수를 구할 수 있으니 굉장히 유용하겠구나.

특정문자를 찾아 비교할때는 정규식을 쓰면 유용하겠구나

indexOf vs findIndex의 성능 차이를 알 수 있었다.
indexOf : 배열에서 원하는 특정 항목이 배열의 몇번째 원소인지 찾아 index를 리턴해주는 함수. (만약에 못찾으면 -1 리턴)
findIndex : 배열 안에 있는 값이 객체이거나, 특정 값으로 찾는 것이 아니라 특정 조건으로 찾는 거면 indexOf으로 찾을 수 없음.

total += param % 10; //자릿수의 합 

노드리스트는 배열을 돌릴수 없음 => 스프레드 연산 => 배열화
ex) 

HTML
`<ul id="ul">
  <li id="li-1">1</li>
  <li id="li-2">2</li>
  <li id="li-3">3</li>
  <li id="li-4">4</li>
  <li id="li-5">5</li>
</ul>`

JS
let ul = document.getElementById('ul').querySelectorAll('li');

[...ul].forEach(ele=>console.log(ele))
console.log([...ul])

요소 분리
배열에서 일부 요소 새배열로 분리 => slice, splice)
스트링 타입에서 일부요소 스트링으로 분리 => subString, subStr


"3e10" *1 //30000000000
"3e10325" *1 //Infinity
NaN은 비교 연산이 되지 않으므로 isNaN을 적용해야함

### 12/20(화)

#### 팁
- 탐색 최소화 (루프, 배열 최소화)
- JS는 작동 알고리즘에 따라 메서드 속도가 다름
- JS 내장 메서드 속도
    - splice는 코테에서 없는 것으로 생각해도 될 정도로 속도가 느리다
    - splice는 push, pop으로 배열을 조작하는 것이 아닌 중간에서 조작한다.
- 논리 비교의 경우 === 를 사용
- 배열.length⇒ 내장메서드이므로 코드 길이를 줄이고자 for문에서 조건문으로 사용하면 for문 매조건마다 메서드를 돌리므로 상단에

      변수 = 배열.length;

       let arrLength = arr.length;

       for(let i = 0; i < arrLength; i++){} 이런식으로 써야함

- 지역스코프가 아니라면 변수 선언은 상단에 해야 좋음
- 'abc' + 1  //'abc1'
  'abc' * 1   //NaN
  'abc' - 1   //NaN
  'abc' / 1   //NaN
- hash ⇒ key - value
- 자료형에 대한 접근은 선언한 부분에서 찾기

##### 자바
    - char ⇒ 한글자
    - 자바는 메모리 크기 정해야해서 최초크기 정해줘야함
    - 제네릭 ⇒ 단순 자료형은 변수 생성시부터 자료형이 정해지지만 제네릭은 <String, Integer(int의 객체)>


### 12/28(수)

#### 팁
- 0이상은 true이므로 조건문 > 0 으로 true/false 코드 지양
- 스프레드 => 이터러블 => string은 유사배열
- find, every, some으로 반복문 break, for문은 순수함수 아니니까 지양
- break & for문을 사용하면 로직상 이상함을 느껴야함
- 정규식 :  사파리 브라우저(모바일 브라우저 :  아이폰)에서 작동 x => 콘솔 x => 디버깅x
- reduce 루프 돌때 acc, ele 같은 parameter를 메모리로 올려놓았음
- 재귀함수는 빠르고 Js 브라우저에서 재귀제한 하지만, 용도에따라 추정이 되면 재귀로 짜고 그렇지 않으면 메모리를 물고 있으므로 재귀로 짜지 말기
- 노드리스트(getElementById, querySelector)는 배열을 돌릴 수 없지만, 스프레드 연산자를 사용하여 배열화(이터러블화)하여 배열을 돌릴 수 있다 (ex) <ul> <li>

##### for문
- 메모리를 사용하지 않고 루프를 돌리므로 성능이 좋음
- 인덱스에 접근을 많이 해서 오류 날 경우가 있으므로 지양 => forEach 지향
- 밖에 변수를 참고하여 밖의 변수의 변경을 가하므로 비순수함수 => 지양

##### 순수함수
- 밖의 변수에 변경을 가하지 않고 함수에 parameter를 받아서 행위를 함 => 자바스크립트에서는 클로저를 사용하여 순수함수 동작
  function increase(num){          => 파라미터로 받아서
    let myNum = num;
    return ()=>{
        myNum++
        return myNum               => return시켜 뱉어줌 => myNum이라는 변수는 접근 불가(프로그램에 얹는 것)
    }
  }
 
 - 절차형 프로그래밍(순수함수) 관점에서 배열 메서드 지향
    
 ### 1/17(화)
 
 ##### mutable vs immutable 
 - mutable : 생성된 이후에 상태가 변경될 수 있는 객체, object, array만 mutable, stack
 - immutable : 생성된 이후에 상태가 변경될 수 없는 객체, JS에서 object와 array를 제외한 모든 타입, heap

##### 재귀
- 콜스택을 무리하게 호출하면 stackoverflow
- 최종 return은 나를 return(자기 자신을 호출하는 함수)
- 재귀 코드를 짤 때, 어느 범위까지 callstack이 호출되는지 가늠이 안된다면 사용을 지양
    
##### 꼬리 재귀 : 
- if와 return 문으로 구성되며, return 연산 자체가 함수의 앞뒤에 붙는 것이 아니라 함수 파라미터 안에서 끝나야 허용 가능함
- function a(param){
    if(param > 1) return param;
    return a(param+1)  //연산과 리턴 시킬 값이 꼬리에 들어감
    }
- 꼬리재귀 가능하면 무조건 꼬리재귀로 짜기
- do - while문으로 변환 가능한 형태
- ES6~ 꼬리재귀 지원
    
##### replace
-  순환 비용이 비쌈

##### slice
- slice(0) : 0~ a인덱스, a인덱스~끝 인덱스 이런 식으로 나눠서 slice를 하면 비용이 많이 들어서 첫인덱스 또는 마지막 인덱스로 slice 하는 것을 추천
    
 
 
 ##### 자바
 - 변수마다 길이제한 (숫자(int, long), 문자)
 - Array와 ArrayList의 자료구조는 다르다
 - Array : 길이지정, length로 비교
 - ArrayList : 길이 자유롭게 변경 가능, collection객체
    

 ### 1/25(수)
 #####팁
  - literal이 가능하면 굳이 loop태우지 말고,  literal로 표기하자 (값과 개수가 정해진 경우) 
    
 ##### 오버 로딩 vs 오버라이딩 
    - 오버 로딩 : 같은 이름의 메서드 여러개를 가지면서 매개변수의 유형(타입)과 개수가 다르도록 하는 기술
    - 오버라이딩 : 상위 클래스가 가지고 있는 메서드를 하위 클래스가 재정의
    
 #####커링
  - 다중루프와 같지 않음
  - 파라미터 개수만 바뀌어서 오버로딩
  - 2단계 이상 커링에서 빛을 발함
   - 함수의 내부가 바로 실행되지 않음 <=> 즉시 실행함수: 바로 실행함
  - function A (b, c){
        let e = b, f = c;     //변수에 담아 사용하며 클로저 사용 기법 중 하나
        return function B(d){
            let g = d
            return e + f + g
        }
    }
    
    let test = A(1, 2);
     100줄의 코드
    let nextTest = test(3)
    
 ##### arguments
    - 매개변수(parameter)가 arguments안에 들어가는 개념이므로 매개변수(parameter)가 부족하여도 자바스크립트에서는 부족한 매개변수가 undefined로 하여 적용됨
    -  function(arguments){} : 일반함수에는 arguments가 내장 되어 있음
    - arrow function = (...args) =>{} :  화살표 함수에는 내장 되어 있지 않으므로 화살표함수에서 arguments 사용시 ...restparameter 사용해서 처리해야함
    
 ##### rest parameter
    -  매개변수가 몇개 받을지 정의가 되지 않은 경우에 사용

 ##### 자바
  - charAt : 1글자만 가져오는 것
  - .put : js의 replace 역할
  - 자바는 객체의 리터럴 개념이 없음 vs  자바스크립트 : 유사배열 허용
  
  
   ### 2/6(월)
  ##### DFS vs BFS
  - DFS(Depth First Search) : 
    - 얼마나 깊은지 찾아가는 행위
    - 스택, 재귀함수 같은 자료구조
  - BFS(Breadth First Search) : 
    - 얼마나 넓은지 찾아가는 행위
    - 가까운 노드부터 탐색하는 알고리즘
    - 큐 자료 구조
  ##### 성능
  - for loop(콜백에 따라 다름) > indexOf(콜백x => 자원소모 x) > findIndex(콜백o => 자원소모 o) > find(콜백o => 자원소모 o)
                속도 빠름 <------
  - indexOf가 정규식보다 빠름
  - 정규식 replace는 일반 replace보다 성능이 빠르다.
  
  ### 2/14(화)
  #### 피벗테이블 
  - 행과 열을 바꿈 
  - 
  #### 스택
  - FILO
  - pop으로 처리해야함(js는 큐가 없는데 shift는 삭제되면 재정렬해서 스택문제는 shift로 풀지 말기)
  - splice : splice로 재정렬하고 재정렬, 배열의 크기가 적을때(크기 예상 가능) 사용
  
  #### 자료구조!
  - 자료에 담고 끝내지 말고 자료에 담을때 끝내버리자
  - 배열 루프 
  
  ### 2/14(화)
    - 자바스크립트 구문 분석 단계에서 3항 연산자 불가
    - 매개 변수로 받은 배열을 바꾸면 참조값에 수정을 가하게 되서 무한루프에 빠질 우려가 있으니 직접 변경하지 말자

  #### 이터러블
  - string은 유사배열이어서 유사배열임
  
  #### 이터레이터
  -  이터레이터를 실행시키면 nextTick은 다음 것이 미리 순화 예정이므로 변경을 가하면 안됨
  - arr = [1, 2, 3, 4, 5] 배열이 있다면, arr[0]의 nextTick은 2로 고정되어있으므로 변경시키지 말자
  
   #### forEach, map
   - forEach =>  단순반복이므로 배열의 요소가 변경 되면 안됨
   - map => 배열의 요소 수정가능 EX)  [1, 2, 3] => [A, B, 3] => [A, B, C]이런식으로 요소 변경 가능
   
   #### 디자인 패턴
   -반복되는 문제를 일반적인 해결법으로 정리
   - 뷰에서 사용하는 디자인 패턴 => 싱글톤, 팩토리, 모듈(데이터부분), 데코레이터 패턴
   
    #### 데코레이터 패턴
    - 데코 추가
    -  기능 수정
    - 코드 최소화
    - vue의 computed 역할
    - 동적으로 객체 래퍼가 싸임(뎁스 고정x) <===> 커링 : 계획된 값을 도출하므로 유사하면서도 다름) (뎁스 고정)
    
    #### 기타
    - const AMERICANO = primitive타입이 주이며, 객체의 element가 바뀌는 경우 reference타입도 가능
    - const americano = 주로 reference 타입이며 [] => {} (x) 같은 경우 변경이 안됨, 참조 주소가 바뀌는 경우는 const 사용 불가
    - 클래스는 클로저나 프로토 타입으로 전환 가능
    - 클로저 생성법 
      - return {}으로 빠져나갈 통로 만들기
      - return 앞에 let 변수명 사용하여 return 에서 사용할 로직 짜기
      - 예시
      - let americano = (()=>{
           return{
             cost : 4000
            }
         })();   // 즉시 실행 함수로 생성동시에 인스턴스로 발생



        let milk = ((beverage)=>{
        let thisBeverage = beverage;
        return{
         cost : thisBeverage.cost + 300
        }
        })(americano);   // 밀크 추가



        let shot = ((beverage)=>{
        let thisBeverage = beverage;
          return{
            cost : thisBeverage.cost + 500
        }
        })(milk);   // 샷추가 => 단계별로 동적으로 추가 됨
      
   
   
  
  
  
  
  
  
  
 
 
 


