import Elements from "./elements.js"
import Settings from "./settings.js";
import Events from "./events.js"

const {
    quantidadeProdutoInput,
    volumeTamborInput,
    vazaoPermeadoInput,
    vazaoBombaInput,
    cloroAlvoSliderInput,
    cloroAlvoInput,
    output
} = Elements();

let quantidadeProduto = quantidadeProdutoInput.value;
let volumeTambor = volumeTamborInput.value;
let vazaoPermeado = vazaoPermeadoInput.value;
let vazaoBomba = vazaoBombaInput.value / 60;
let cloroAlvoSlider = cloroAlvoSliderInput.value;
let cloroAlvo = cloroAlvoInput.value;

const {
    produto
} = Settings();

// Função que calcula a regulagem de fluxo
function calculaRegulagemFluxo(produto, quantidadeProduto, volumeTambor, vazaoPermeado, vazaoBomba, cloroAlvo) {
   
    const massaCloroAtivo = quantidadeProduto * produto.densidade * produto.pureza; // Medida em gramas de cloro ativo

    const concentracaoCloroAtivo = 1000 * massaCloroAtivo / volumeTambor; // Medida em mg/L

    const vazaoDosadora = vazaoPermeado * (cloroAlvo / concentracaoCloroAtivo); // Medida em L/min ou LPM

    const regulagemFluxo = 100 * vazaoDosadora / vazaoBomba;

    return regulagemFluxo.toPrecision(3);
}

// Importemos os eventos definidos para detectar mudança dos inputs
Events({
    quantidadeProdutoInput,
    volumeTamborInput,
    vazaoPermeadoInput,
    vazaoBombaInput,
    cloroAlvoSliderInput,
    cloroAlvoInput,
    output,
    quantidadeProduto,
    volumeTambor,
    vazaoPermeado,
    vazaoBomba,
    cloroAlvoSlider,
    cloroAlvo,
    produto,
    calculaRegulagemFluxo
});

// Calculemos a regulagem assim que a página abre, com os valores padrão
output.children[1].children[0].textContent = calculaRegulagemFluxo(produto, quantidadeProduto, volumeTambor, vazaoPermeado, vazaoBomba, cloroAlvo);

// Coloque o segundo input em foco, imediatamente
vazaoPermeadoInput.focus();
