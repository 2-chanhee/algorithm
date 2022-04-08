function solution(absolutes, signs) {
    return absolutes.reduce((acc ,cur, index) =>  acc + (signs[index] === false ? cur * -1 : cur), 0)
}