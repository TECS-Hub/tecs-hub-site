
window.addEventListener("load", (event) => {
    console.log("Loading page");
    start();
});

let btnList;

function start() {
    // adiciona os eventos da aplicacao
    btnList = document.querySelector("#btn--lista");
    btnList.addEventListener("click", handleClickButton);
}

function handleClickButton(event) {
     // depois de clicado, o botao dispará o evento para acionar o metodo abrirLista()
    abrirLista();
}

function abrirLista() {
    // ler lista
    const dadosEmpregadores = JSON.par
   
    console.log("abrir lista");
}
