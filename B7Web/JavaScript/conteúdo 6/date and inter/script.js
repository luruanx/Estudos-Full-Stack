// DATES AND HOURS

let d = new Date();  // ('2020-01-01 15:22:16')

// Hour+Date = .toDateString() ou .toUTCString()
// Hour = .getHours()  .getMinutes()  .getSeconds()
// Date = .getFullYear()  .getMonth()  .getDate()


d.setHours(d.getHours() + 5)
let novoValor = d;
console.log(novoValor);


