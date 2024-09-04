//별찍기

let n = 5;
let total = "";

for(let i = 0; i < n; i++){
    // blank = " " * (n-i);
    // star = "*" * (2 * i + 1);
    //위에 주석들은 python 문법이라서 js에 적용되지 않는다.

    let blank = " ".repeat(n - i);
    let star = "*".repeat(2 * i + 1);
    total += blank + star + '\n';
    
}

console.log(total);
