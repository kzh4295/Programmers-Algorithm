
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
