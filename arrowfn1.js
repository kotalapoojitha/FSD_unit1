//Traditional function
function oddeven(num) {
    if (num % 2 === 0) {
        return `${num} is even`;
    } else {
        return `${num} is odd`;
    }
}
const oddevenArrow = (num) => {
    return num % 2 === 0 ? `${num} is even` : `${num} is odd`;
}
// Usage
console.log(oddeven(10)); // Output: 10 is even 
console.log(oddevenArrow(10)); // Output: 10 is even
console.log(oddeven(11)); // Output: 11 is odd
console.log(oddevenArrow(11)); // Output: 11 is odd