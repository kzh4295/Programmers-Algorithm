===============================내 코드=====================================
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    for(let i = 0; i<b; i++){
        console.log('*'.repeat(a))
    }
})
===============================타인의 코드=====================================

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const star = `${'*'.repeat(a)}\n`;

    console.log(star.repeat(b));
});

느낀점 => 
- const star = `${'*'.repeat(a)}\n`; 이렇게 표현하는게 보기 좋았다.
- 거의 repeat을 사용하여 유사하였고, 노드로 출력하고자 시도하느라 시간이 소요되었다...
