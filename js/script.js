const btn = document.querySelector("#send");

btn.addEventListener("click", function(e){

    e.preventDefault();

    const name = document.querySelector("#graus");

    const value = name.value;

    const numero = Number(value);

    let fahrenheit = numero * 1.8 + 32;

    
    
    
    
    
    let novoParagrafo = document.createElement("p");

    novoParagrafo.classList = "resultado";

    let resultado = document.createTextNode(`${numero}º Graus são: ${fahrenheit} ºF fahrenheit.`);

    novoParagrafo.appendChild(resultado)

    let form = document.querySelector("form");

    let div = document.querySelector("#conversorGraus");

    div.replaceChild(novoParagrafo, form);
});

