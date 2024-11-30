var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
let big = [];
for (let index = 0; index < friends.length; index++) {
  const element = friends[index];
  if (element.length > big.length) {
    big = element;
  }
}
console.log(big);
