// DATES AND HOURS

let d = new Date();  // ('2020-01-01 15:22:16')

// Hour+Date = .toDateString() ou .toUTCString()
// Hour = .getHours()  .getMinutes()  .getSeconds()
// Date = .getFullYear()  .getMonth()  .getDate()


d.setHours(d.getHours() + 5)
let novoValor = d;
console.log(novoValor);




// INTERVALOS

let timer;

function comecar() {
    timer = setInterval(showTime, 1000);
}
function parar() {
    clearInterval(timer);
}

function showTime() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let txt = h + ':' + m + ':' + s;

    document.querySelector('.demo').innerHTML = txt;
}

// TIMEOUT - CLEARTIMEOUT
setTimeout(function() {
    alert('Rodou!')
}, 5000);
