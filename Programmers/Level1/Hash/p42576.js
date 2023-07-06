// 완주하지 못한 선수
// 스스로 풀어보기
function solution(participant, completion) {
    var answer = '';
    return answer;
}   
// * 문제 핵심
// 한 명의 선수를 제외하고 모든 선수가 마라톤을 완주합니다.
// participant : 참여한 선수 이름
// completion : 완주한 선수 이름

// 1. participant 배열 중 하나가 completion 배열에 없다면 선수 이름을 리턴해준다.
// 1-1. participant[0]을 completion 배열과 비교해서 같은 문자열이 있는지 확인한다.
// 1-1-1. 있으면 더 이상 찾을 필요가 없으니 break한다.
// 1-1-2. 없으면 선수 이름 리턴한다.
// 1-2. paricipant 배열 길이만큼 반복한다.