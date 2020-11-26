// import { promises as fs } from "fs";

window.addEventListener("load", (event) => {
    console.log("Loading page");
    start();
});

let dataList = [];
let btnList;
let result = document.querySelector("#table__body");

function start() {
    // adiciona os eventos da aplicacao
    btnList = document.querySelector("#btn--lista");
    btnList.addEventListener("click", handleClickButton);
}

function handleClickButton(event) {
    // depois de clicado, o botao dispará o evento para acionar o metodo abrirLista()
    abrirLista();
}

async function abrirLista() {
    // ativar o display da table
    let showTable = document.querySelector("#gerar--lista");
    // passa condicao (if/else)
    showTable.style.display === "none" ? showTable.style.display = "block" : showTable.style.display = "none";

    //fazer o fecth dos dados
    const url = "./data/dados.json";
    const res = await fetch(url);
    const dadosEmpregador = await res.json();
    // ler a array usando map
    dataList = dadosEmpregador.map((dado) => {
        const { id,
            uf,
            empregador,
            cnpj_cpf,
            estabelecimento,
            n_trabalhadores_envolvidos,
            cnae,
            data_inclusao_cadastro_empregadores,
            cnae_descricao } = dado;

        return {
            id: id,
            uf: uf,
            empregador: empregador,
            cnpj_cpf: cnpj_cpf,
            estabelecimento: estabelecimento,
            n_trabalhadores: n_trabalhadores_envolvidos,
            cnae,
            cnae_descricao,
            data_inclusao: data_inclusao_cadastro_empregadores
        }
    });
    //   chama o metodo render
    renderizaLista();
}

function renderizaLista() {
    // renderizar a lista dentro de uma tabela utilizando elementos HTML
    let table = "";
    dataList.forEach((dado) => {
        const { id, uf, empregador, cnpj_cpf, estabelecimento, n_trabalhadores, cnae, cnae_descricao, data_inclusao } = dado;
        const element = `
        <td>${id}</td>
        <td>${uf}</td>
        <td>${empregador}</td>
        <td>${cnpj_cpf}</td>
        <td>${estabelecimento}</td>
        <td>${n_trabalhadores}</td>
        <td>${cnae}</td>
        <td>${cnae_descricao}</td>
        <td>${data_inclusao}</td>               
        `;
        table += "<tr>" + element + "</tr>";
    });

    result.innerHTML = table;
}


