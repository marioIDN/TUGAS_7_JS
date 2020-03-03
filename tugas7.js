console.log("for biasa");

var angkaArray = [160,165,170,175,178,180,182,185,189,190];
for (var i = 0; i < angkaArray.length; i++) {
  console.log(angkaArray[i],"cm");
}
console.log("");
console.log("");
console.log("for - of");

for (let x of angkaArray) {
  console.log(x,"cm");
}
