// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q9
// Write a program that creates a string that represents an 8×8 grid,
// using newline characters to separate lines. At each position of the grid
// there is either an "_" or a "#" character. The characters should form a chessboard.
//
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#

let line = "";
for (i = 0; i < 8; i++) {
  line += "#_#_#_#_\n";
  console.log(line);
}
//  increase by one line each time by console log

let line = "";
for (i = 0; i < 8; i++) {
  line += "#_#_#_#_\n";
}
console.log(line);

// do it increasingly once and then console log it

for (i = 0; i < 8; i++) {
  console.log("#_#_#_#_\n");
}

for (i = 0; i < 8; i++) {
  let line = "";
  for (x = 0; x < 8; x++) {
    if (x % 2 === 0) {
      line += "#";
    } else {
      line += "_";
    }
  }
  console.log(`${line}` / n);
}
