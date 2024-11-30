const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

inp.question("Enter a year: ", (year) => {
  year = parseInt(year);

  if (year % 4 == 0 ) {
    console.log(`${year} is a Leap Year.`);
  } else {
    console.log(`${year} is NOT a Leap Year.`);
  }
  inp.close();
});
