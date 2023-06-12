// 직각삼각형 출력하기
// 스스로 해결하기
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const n = Number(input[0]);  // n = 3
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < i + 1; j++) {
            process.stdout.write("*");
        }
        console.log();
    }
    // console.log(Number(input[0]));
});