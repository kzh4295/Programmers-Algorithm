// function solution(menuList, today) {
//     let setMenuList = menuList.reduce((acc, ele, idx)=>{
//         if(ele !== today){
//             acc.push(today)
//         } else{
//             acc.push(ele)
//         }
//         return acc;
//     },[])

//     return setMenuList
// }

function solution(menuList, today) {
    // 제약 사항을 먼저 거른 후에
    if(menuList.includes(today)){
        return menuList;
    }
    if(menuList.length > 10 ){
        return menuList;
    }
    // 실행해야할 것을 실행
    menuList.push(today)
    return menuList;
    }
    
    solution(["돈까스", "마라샹궈"], "마라탕"); 
    // [ "돈까스", "마라샹궈", "마라탕" ]
    solution(["국밥", "파스타", "카레라이스"], "닭갈비"); 
    // [ "국밥", "파스타", "카레라이스", "닭갈비" ]
    solution(["쌀국수"], "쌀국수"); 
    // [ "쌀국수" ]



    // solution(["돈까스", "마라샹궈"], "마라탕");  
    // [ "돈까스", "마라샹궈", "마라탕" ]
    console.log(solution(["국밥", "파스타", "카레라이스"], "닭갈비")); 
    // [ "국밥", "파스타", "카레라이스", "닭갈비" ]
    // solution(["쌀국수"], "쌀국수"); 
    // [ "쌀국수" ]
