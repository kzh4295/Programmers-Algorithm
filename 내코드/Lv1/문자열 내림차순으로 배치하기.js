// 풀이1) String의 search메서드와 정규식의 a-zA-Z는 안될까..?(실패이유: 굳이 배열과 string을 변수까지 써가면서 할당할 필요도 없었다...)
// toLowerCase로 먼저 비교하고, toUpperCase 비교하고?sort?join?

// function solution(s) {
//      var answer = '';
        // const regExp=/[a-z]+/g;
        // const ss=s.match(regExp)
        // function tt(a, b){
        //     if(a < b) return 1;
        //     if(a > b) return -1;
        //     if(a === b) return 0; 
        // } 
        // const pp =ss.forEach(sss =>tt(sss));
//    // 소문자먼저 정규식으로 변수로 뺴고, 변수로 뺀개 아닌 것은 대문자로 두고?
//    
    
//     return ss;
// }



// 풀이2) split, reverse, join메서드
function solution(s) {
  // var answer = '';
  // split은 string을 배열로
  // reverse는 배열을 역순으로
  // join은 배열의 모든 요소를 문자열로 변환
  // string메서드와 배열 메서드가 혼란스러웠고, 굳이 정규식까지 안써도 되는데 어렵게 접근한 것 같다. 
  return s.split('').reverse().join('');
}
