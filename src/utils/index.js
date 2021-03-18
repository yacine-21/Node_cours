// test pour exporter plusieurs fonctions

function toUpperCase(lowercase){
    return lowercase.toString().toUpperCase();
}

function sum(a,b){
    return a + b;
}


module.exports = { toUpperCase, sum};