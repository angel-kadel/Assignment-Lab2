
// function 1: to print welcome text
export function groupMembers(member1, member2, member3) {
    console.log(`\nWelcome ${member1}, ${member2}, ${member3} to testing of various function using ES6`);
}

// function 2: convert kg -> gm
export function convertUnit(kg) {
    return (`${kg * 1000}`);
}

// function 3: calculate square 
export function square(n) {
    return `${n * n}`;
}

// function 4: calculate square root 
export function squareRoot(v) {
    return `${Math.sqrt(v)}`;
}