const friendsAge = [23, 34, 45, 56, 57, 67, 78, 87, 77, 24];
//const partialAge = friendsAge.splice(2, 3);
const partialAge = friendsAge.splice(2, 3, 677, 3888, 4999);
console.log(partialAge);
console.log(friendsAge);