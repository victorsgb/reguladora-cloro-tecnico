// Características do produto hipoclorito de cálcio
const produto = {
    densidade: 2.35, // Medida em gramas por mililitro (g/mL a 25°C)
    pureza: 0.65, // Percentual de cloro ativo no produto
};

// Cálculos intermediários
const volumeProduto = 50; // Medida em mL

// Características da bomba dosadora
const bomba = {
    vazaoMaxima: 0.1 // Medida em litros por minuto (L/min ou LPM)
}

// Inputs do usuário
const volumeTamborInput = document.querySelector('#volume-tambor');
let volumeTambor = volumeTamborInput.value;

const vazaoPermeadoInput = document.querySelector('#vazao-permeado');
let vazaoPermeado = vazaoPermeadoInput.value;

// Elemento HTML para receber o output
const output = document.querySelector('#output')

// Função que calcula a regulagem de fluxo
function calculaRegulagemFluxo(volumeProduto, volumeTambor, vazaoPermeado) {
   
    const massaCloroAtivo = volumeProduto * produto.densidade * produto.pureza; // Medida em gramas de cloro ativo

    const concentracaoCloroAtivo = 1000 * massaCloroAtivo / volumeTambor; // Medida em mg/L

    const concentracaoCloroAtivoPortaria = 1 // Portaria estabelece medida entre 0,2 e 2 mg/L; usando 1 mg/L como alvo

    const vazaoDosadora = vazaoPermeado * (concentracaoCloroAtivoPortaria / concentracaoCloroAtivo);

    const regulagemFluxo = 100 * vazaoDosadora / bomba.vazaoMaxima;

    return regulagemFluxo.toPrecision(3) + "%";
}

volumeTamborInput.addEventListener('change', (e) => {

    volumeTambor = e.target.value; // Capacidade do tambor de mistura, medida em litros (L)

    output.textContent = calculaRegulagemFluxo(volumeProduto, volumeTambor, vazaoPermeado);

})

vazaoPermeadoInput.addEventListener('change', (e) => {

    vazaoPermeado = e.target.value; // Vazão medida em litros por minuto (L/min ou LPM)

    output.textContent = calculaRegulagemFluxo(volumeProduto, volumeTambor, vazaoPermeado);

})

// Calculemos a regulagem assim que a página abre, com os valores padrão
output.textContent = calculaRegulagemFluxo(volumeProduto, volumeTambor, vazaoPermeado);

// Coloque o segundo input em foco, imediatamente
vazaoPermeadoInput.focus();
