// concat을 사용하여 아래와 같이 날짜와 시간을 출력하시오.
// 2019/04/26 11:34:27

let year = '2019';
let month = '04';
let day = '26';
let hour = '11';
let minute = '34';
let second = '27';

let result = year.concat('/', month,'/', day, ' ',
    hour, ':', minute, ':', second
)

console.log(result);