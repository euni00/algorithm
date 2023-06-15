// 모스부호 (1)
// 스스로 해결하기
function solution(letter) {
  var morseString = "";
  let morseArray = [];
  let splitLetter = [];
  morse = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
  };

  // 1. 공백을 기준으로 모스 부호를 새로운 배열에 담기
  splitLetter = letter.split(" ");

  // 2. 새로운 배열과 모스부호가 일치하는 알파벳을 배열에 담기
  // 2-1. letter 배열의 길이만큼 반복하기
  for (let i = 0; i < letter.length; i++) {
    morseArray.push(morse[splitLetter[i]]);
  }

  morseString = morseArray.join("");
  return morseString;
}

// test1
const letter1 = ".... . .-.. .-.. ---";
console.log(solution(letter1));

// test1
const letter2 = ".--. -.-- - .... --- -.";
console.log(solution(letter2));

// PASS
// 1. 공백을 기준으로 모스 부호를 새로운 배열에 담기
// 2. 새로운 배열과 모스부호가 일치하는 알파벳을 배열에 담기
// 2-1. letter 배열의 길이만큼 반복하기
// 3. 배열을 문자열로 변환하기
