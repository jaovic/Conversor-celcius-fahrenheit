const btn = document.querySelector("#send");

btn.addEventListener("click", function(e){

    e.preventDefault();

    const name = document.querySelector("#graus");

    const value = name.value;

    const numero = Number(value);

    console.log(numero);

    
    
    let novoParagrafo = document.createElement("p");

    console.log(novoParagrafo);

    let resultado = document.createTextNode(`o valor é ${numero}`);

    novoParagrafo.appendChild(resultado)

    var div = document.querySelector("#conversorGraus");

    div.appendChild(novoParagrafo)
});

