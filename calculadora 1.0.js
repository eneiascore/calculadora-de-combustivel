/*
Faça um programa para calcular o valor de uma viagem.
5 variáveis:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo do combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;
*/

// Honda City 2025
// De Codó - MA para São Luís - MA 
// Distância de 228 KM - preços estimados de gasolina e Etanol 

const precoEtanol = 4.30;
const precoGasolina = 6.30;
const kmPorEtanol = 9.3;
const kmPorGasolina = 12.8;

const distanciaDaViagem = 228;
const tipoCombustivel = 'etanol';

if (tipoCombustivel === 'gasolina') {
    const litroGasolinaGasta = distanciaDaViagem / kmPorGasolina;
    const valorTotalGasolina = litroGasolinaGasta * precoGasolina;
    console.log('O valor gasto com gasolina é ' + valorTotalGasolina.toFixed(2));
} else if (tipoCombustivel === 'etanol') {
    const litroEtanolGasto = distanciaDaViagem / kmPorEtanol;
    const valorTotalEtanol = litroEtanolGasto * precoEtanol;
    console.log('O valor gasto com Etanol é ' + valorTotalEtanol.toFixed(2));
}


