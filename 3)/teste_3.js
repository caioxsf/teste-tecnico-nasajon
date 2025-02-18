const faturamentoMensal = [
    { "dia": 1, "valor": 1000 },
    { "dia": 2, "valor": 2500 },
    { "dia": 3, "valor": 0 },
    { "dia": 4, "valor": 800 },
    { "dia": 5, "valor": 0 },
    { "dia": 6, "valor": 5000 },
    { "dia": 7, "valor": 0 },
    { "dia": 8, "valor": 3400 }
];

function calcularFaturamento(faturamento) {
    const diasComFaturamento = faturamento.filter(dia => dia.valor > 0);

    if (diasComFaturamento.length === 0) {
        return console.log("Não há dias com faturamento para análise.");
    }

    const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.valor));
    const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.valor));
    
    const somaFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);
    const mediaMensal = somaFaturamento / diasComFaturamento.length;

    const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;

    console.log(`Menor faturamento: R$${menorFaturamento.toFixed(2)}`);
    console.log(`Maior faturamento: R$${maiorFaturamento.toFixed(2)}`);
    console.log(`Número de dias acima da média: ${diasAcimaDaMedia}`);
}

calcularFaturamento(faturamentoMensal);