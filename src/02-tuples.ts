const prices: (number | string)[] = [1, 3, 4, 5, 6, 7];
prices.push(2);
prices.push('tupla');

let user: [string, number];
user = ['tuplin', 34];

// user = [];
// user = ["rub"];
const [username, userage] = user;
console.log(username);
