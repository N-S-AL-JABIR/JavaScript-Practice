const arr = [
  1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20,
];

arr.sort((a, b) => a-b);
console.log(`Ascending order : ${arr}`);
arr.sort((a, b) => b - a);
console.log(`Descending order : ${arr}`);
