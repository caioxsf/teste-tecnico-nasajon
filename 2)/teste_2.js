function fibonacci (numero) {
    let a = 0, b = 1, op;
    console.log(0);
    console.log(1);
    while (b < numero) {
        op = a + b;
        a = b;
        b = op;
        console.log(op)
    }
    return b == numero
}

const numero = prompt("digite um numero: ");
if(fibonacci(numero)) 
    console.log(`o numero ${numero} pertence a sequencia`)
else
    console.log(`o numero ${numero} não pertence a sequencia`)

