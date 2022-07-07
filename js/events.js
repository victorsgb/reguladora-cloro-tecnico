export default function Events({
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
}) {

    quantidadeProdutoInput.addEventListener('change', (e) => {
        quantidadeProduto = e.target.value; // Quantidade de produto (mL)
    
        output.children[1].children[0].textContent = calculaRegulagemFluxo(produto, quantidadeProduto, volumeTambor, vazaoPermeado, vazaoBomba, cloroAlvo);
        
        if (Number(output.children[1].children[0].textContent) <= 0 || Number(output.children[1].children[0].textContent) > 100) {
            
            output.children[1].innerHTML = "<p>Erro nos dados de entrada!</p>"

            output.style.setProperty("background-color", "red");
        } else {

            output.children[1].innerHTML = "<p>Regule o fluxo para <strong>" + output.children[1].children[0].textContent + "</strong>%</p>"

            output.style.setProperty("background-color", "hsl(var(--hue), 80%, 70%)");
        }
    })
    
    volumeTamborInput.addEventListener('change', (e) => {
        volumeTambor = e.target.value; // Capacidade do tambor de mistura, medida em litros (L)
    
        output.children[1].children[0].textContent = calculaRegulagemFluxo(produto, quantidadeProduto, volumeTambor, vazaoPermeado, vazaoBomba, cloroAlvo);
        
        if (Number(output.children[1].children[0].textContent) <= 0 || Number(output.children[1].children[0].textContent) > 100) {
            
            output.children[1].innerHTML = "<p>Erro nos dados de entrada!</p>"

            output.style.setProperty("background-color", "red");
        } else {

            output.children[1].innerHTML = "<p>Regule o fluxo para <strong>" + output.children[1].children[0].textContent + "</strong>%</p>"

            output.style.setProperty("background-color", "hsl(var(--hue), 80%, 70%)");
        }
    })
    
    vazaoPermeadoInput.addEventListener('change', (e) => {
        vazaoPermeado = e.target.value; // Vazão medida em litros por minuto (L/min ou LPM)
    
        output.children[1].children[0].textContent = calculaRegulagemFluxo(produto, quantidadeProduto, volumeTambor, vazaoPermeado, vazaoBomba, cloroAlvo);

        if (Number(output.children[1].children[0].textContent) <= 0 || Number(output.children[1].children[0].textContent) > 100) {
            
            output.children[1].innerHTML = "<p>Erro nos dados de entrada!</p>"

            output.style.setProperty("background-color", "red");
        } else {

            output.children[1].innerHTML = "<p>Regule o fluxo para <strong>" + output.children[1].children[0].textContent + "</strong>%</p>"

            output.style.setProperty("background-color", "hsl(var(--hue), 80%, 70%)");
        }
    })
    
    vazaoBombaInput.addEventListener('change', (e) => {
        vazaoBomba = e.target.value / 60; // Vazão medida em litros por minuto (L/min ou LPM)
    
        output.children[1].children[0].textContent = calculaRegulagemFluxo(produto, quantidadeProduto, volumeTambor, vazaoPermeado, vazaoBomba, cloroAlvo);

        if (Number(output.children[1].children[0].textContent) <= 0 || Number(output.children[1].children[0].textContent) > 100) {
            
            output.children[1].innerHTML = "<p>Erro nos dados de entrada!</p>"

            output.style.setProperty("background-color", "red");
        } else {

            output.children[1].innerHTML = "<p>Regule o fluxo para <strong>" + output.children[1].children[0].textContent + "</strong>%</p>"

            output.style.setProperty("background-color", "hsl(var(--hue), 80%, 70%)");
        }
    })  

    cloroAlvoSliderInput.addEventListener('change', (e) => {
        cloroAlvo = e.target.value; // Medida em g/mL
    
        output.children[1].children[0].textContent = calculaRegulagemFluxo(produto, quantidadeProduto, volumeTambor, vazaoPermeado, vazaoBomba, cloroAlvo);

        if (Number(output.children[1].children[0].textContent) <= 0 || Number(output.children[1].children[0].textContent) > 100) {
            
            output.children[1].innerHTML = "<p>Erro nos dados de entrada!</p>"

            output.style.setProperty("background-color", "red");
        } else {

            output.children[1].innerHTML = "<p>Regule o fluxo para <strong>" + output.children[1].children[0].textContent + "</strong>%</p>"

            output.style.setProperty("background-color", "hsl(var(--hue), 80%, 70%)");
        }

        cloroAlvoInput.value = cloroAlvo;
    })

    cloroAlvoInput.addEventListener('change', (e) => {
        cloroAlvo = e.target.value; // Medida em g/mL
    
        output.children[1].children[0].textContent = calculaRegulagemFluxo(produto, quantidadeProduto, volumeTambor, vazaoPermeado, vazaoBomba, cloroAlvo);

        if (Number(output.children[1].children[0].textContent) <= 0 || Number(output.children[1].children[0].textContent) > 100) {
            
            output.children[1].innerHTML = "<p>Erro nos dados de entrada!</p>"

            output.style.setProperty("background-color", "red");
        } else {

            output.children[1].innerHTML = "<p>Regule o fluxo para <strong>" + output.children[1].children[0].textContent + "</strong>%</p>"

            output.style.setProperty("background-color", "hsl(var(--hue), 80%, 70%)");
        }

        cloroAlvoSliderInput.value = cloroAlvo;
    })

}