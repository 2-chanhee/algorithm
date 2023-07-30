function solution(s) {
    return s.split('').map((item, index) => {
        const lastIndex = s.slice(0, index).lastIndexOf(item);
        return lastIndex < 0 ? lastIndex : index - lastIndex
    });
}
