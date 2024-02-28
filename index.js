const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function titleCased() {
  return tutorials.map(function (string) {
    let words = string.split(" ");
    let titleCasedwords = words.map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return titleCasedwords.join(" ");
  });
}

// in my first try, I tried to pass tutorials array as an argument in the titleCased() function,
// and i couldn't pass the test altough I get the right result when I console log it,
// but thanks to my friend Ahmed Essam who told me to invoke it directly in the function i was able to pass the test,
// many thanks Ahmed Essam.
