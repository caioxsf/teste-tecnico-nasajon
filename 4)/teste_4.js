let sp = parseFloat(67836.43);
let rj = parseFloat(36678.66);
let mg = parseFloat(29229.88);
let es = parseFloat(27165.48);
let outros = parseFloat(19849.53);

function percentualEstados () {
    let somaEstados = sp + rj + mg + es + outros;
    let spNew = sp / somaEstados * 100;
    let rjNew = rj / somaEstados * 100;
    let mgNew = mg / somaEstados * 100;
    let esNew = es / somaEstados * 100;
    let outrosNew = outros / somaEstados * 100;

    console.log(`Total: ${somaEstados.toFixed(2)}`);
    console.log(`SP: ${spNew.toFixed(2)}%`);
    console.log(`RJ: ${rjNew.toFixed(2)}%`);
    console.log(`MG: ${mgNew.toFixed(2)}%`);
    console.log(`ES: ${esNew.toFixed(2)}%`);
    console.log(`OUTROS: ${outrosNew.toFixed(2)}%`);
}

percentualEstados()