const produtos = [{
    produto: "Fone de ouvido - ",
    valor: 100
}, {
    produto: "Celular - ",
    valor: 1400
}, {
    produto: "Oculus VR - ",
    valor: 5000
}];

const carrinho = [];
let dinheiro = 0

function atualizarLista() {
    let lista = document.getElementById("lista-produtos");
    let total = document.getElementById("valor-total");
    const listaAtual = [];
    dinheiro = 0;
    carrinho.forEach((produto) => {
        dinheiro += (produto.valor * produto.quantidade);
        listaAtual.push(`<p> <span class="texto-azul">${produto.quantidade}</span> ${produto.produto} <span class="texto-azul">R$${produto.valor}</span> </p>`);
    })
    lista.innerHTML = `<section class="carrinho__produtos__produto">
          ${listaAtual.join()}
        </section>`
    total.innerHTML = `R$${dinheiro}`
}


function adicionar() {
    let produto = document.getElementById("produto").value;
    let quantidade = document.getElementById("quantidade").value;

    if (quantidade <= 0 || isNaN(quantidade)) {
        alert("Por favor, insira uma quantidade válida.");
        return;
    }
    const product = produtos.find((p) => p.produto == produto);
    if (!product) return alert("produto não encontrado!");
    carrinho.push({
        ...product,
        quantidade: Number(quantidade)
    })
    atualizarLista();
}

function limpar() {
    carrinho.length = 0;
    atualizarLista();
}