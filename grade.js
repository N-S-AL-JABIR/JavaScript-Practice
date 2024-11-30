var result = 80;
if (result < 0) {
  console.log("failed");
} else if (result >= 0 && result < 40) {
  console.log("tumi C paico");
} else if (result >= 40 && result < 60) {
  console.log("tumi B paico");
} else if (result >= 60 && result < 70) {
  console.log("tumi A- paico");
} else if (result >= 70 && result < 80) {
  console.log("tumi A paico");
} else if (result >= 80 && result <= 100) {
  console.log("tumi A+ paico");
} else {
  console.log("invalid");
}
