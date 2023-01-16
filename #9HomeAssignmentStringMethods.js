const capitalLetters = "there is a storm coming to the East of the Philippines";
const upperLetters = capitalLetters.replace(/[^A-Z]/g, '');
const slicedText = upperLetters.charAt(0);
console.log(slicedText);

//task 2
function containsUpperCase(str) {
    return /[A-Z]/.test(str);
}
console.log(containsUpperCase("no more rainy days here, sun is about to show up"));