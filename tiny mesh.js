const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let length;
function getArrayData(i) {
  if (i > 0) {
    rl.question("", function (input) {
      let dimensions = input.split(" ").map((x) => parseInt(x));
      if (dimensions[0] == dimensions[1]) {
        console.log("ACCEPTED");
      } else if (dimensions[0] >= length && dimensions[1] >= length) {
        console.log("CROP IT");
      } else {
        console.log("UPLOAD ANOTHER");
      }
      i--;
      getArrayData(i);
    });
  }
}
rl.question("", function (input) {
  length = parseInt(input);
  rl.question("", function (input) {
    getArrayData(parseInt(input));
  });
});
