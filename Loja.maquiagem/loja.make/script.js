// ================================
// PRODUTOS
// ================================

const produtos = [

    {
        id: 1,
        nome: "Base Glow Skin",
        categoria: "Rosto",
        preco: 59.90,
        imagem: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=600&q=80"
    },

    // {
    //     id: 2,
    //     nome: "Corretivo Perfect",
    //     categoria: "Rosto",
    //     preco: 39.90,
    //     imagem: "https://images.unsplash.com/photo-1631214524020-7e18dbf1d9bb?auto=format&fit=crop&w=600&q=80"
    // },

    {
        id: 3,
        nome: "Blush Rosé",
        categoria: "Rosto",
        preco: 34.90,
        imagem: "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 4,
        nome: "Iluminador Diamond",
        categoria: "Rosto",
        preco: 49.90,
        imagem: "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 5,
        nome: "Contorno Cream",
        categoria: "Rosto",
        preco: 44.90,
        imagem: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 6,
        nome: "Pó Translúcido",
        categoria: "Rosto",
        preco: 42.90,
        imagem: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 7,
        nome: "Primer Blur",
        categoria: "Pele",
        preco: 47.90,
        imagem: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 8,
        nome: "Fixador Glow",
        categoria: "Pele",
        preco: 36.90,
        imagem: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 9,
        nome: "Paleta Nude Dreams",
        categoria: "Olhos",
        preco: 79.90,
        imagem: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 10,
        nome: "Paleta Pink Love",
        categoria: "Olhos",
        preco: 89.90,
        imagem: "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 11,
        nome: "Máscara Volume",
        categoria: "Olhos",
        preco: 32.90,
        imagem: "https://images.unsplash.com/photo-1631214524020-7e18dbf1d9bb?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 12,
        nome: "Delineador Black",
        categoria: "Olhos",
        preco: 27.90,
        imagem: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 13,
        nome: "Lápis de Olho",
        categoria: "Olhos",
        preco: 21.90,
        imagem: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 14,
        nome: "Sombra Líquida Gold",
        categoria: "Olhos",
        preco: 31.90,
        imagem: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 15,
        nome: "Cílios Postiços",
        categoria: "Olhos",
        preco: 24.90,
        imagem: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 16,
        nome: "Gel para Sobrancelhas",
        categoria: "Olhos",
        preco: 29.90,
        imagem: "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 17,
        nome: "Batom Red Velvet",
        categoria: "Lábios",
        preco: 35.90,
        imagem: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 18,
        nome: "Batom Nude Chic",
        categoria: "Lábios",
        preco: 35.90,
        imagem: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 19,
        nome: "Gloss Crystal",
        categoria: "Lábios",
        preco: 29.90,
        imagem: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 20,
        nome: "Lip Oil Cherry",
        categoria: "Lábios",
        preco: 31.90,
        imagem: "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 21,
        nome: "Lip Tint Pink",
        categoria: "Lábios",
        preco: 28.90,
        imagem: "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 22,
        nome: "Lápis Labial Nude",
        categoria: "Lábios",
        preco: 19.90,
        imagem: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 23,
        nome: "Balm Hidratante",
        categoria: "Lábios",
        preco: 23.90,
        imagem: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 24,
        nome: "Gloss Plump",
        categoria: "Lábios",
        preco: 33.90,
        imagem: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 25,
        nome: "Água Micelar",
        categoria: "Pele",
        preco: 27.90,
        imagem: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 26,
        nome: "Hidratante Facial",
        categoria: "Pele",
        preco: 44.90,
        imagem: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 27,
        nome: "Sérum Vitamina C",
        categoria: "Pele",
        preco: 54.90,
        imagem: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 28,
        nome: "Máscara Facial",
        categoria: "Pele",
        preco: 22.90,
        imagem: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 29,
        nome: "Esponja Beauty",
        categoria: "Acessórios",
        preco: 16.90,
        imagem: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 30,
        nome: "Kit Pincéis Rose",
        categoria: "Acessórios",
        preco: 69.90,
        imagem: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 31,
        nome: "Necessaire Pink",
        categoria: "Acessórios",
        preco: 49.90,
        imagem: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 32,
        nome: "Espelho de Bolsa",
        categoria: "Acessórios",
        preco: 25.90,
        imagem: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 33,
        nome: "Curvex Pro",
        categoria: "Acessórios",
        preco: 18.90,
        imagem: "https://images.unsplash.com/photo-1631214524020-7e18dbf1d9bb?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 34,
        nome: "Pincel Blush",
        categoria: "Acessórios",
        preco: 22.90,
        imagem: "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 35,
        nome: "Pincel Base",
        categoria: "Acessórios",
        preco: 26.90,
        imagem: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 36,
        nome: "Esponjas Mini",
        categoria: "Acessórios",
        preco: 19.90,
        imagem: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 37,
        nome: "Iluminador Rosé",
        categoria: "Rosto",
        preco: 45.90,
        imagem: "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 38,
        nome: "Bronzer Sun Kiss",
        categoria: "Rosto",
        preco: 48.90,
        imagem: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 39,
        nome: "Blush Peach",
        categoria: "Rosto",
        preco: 37.90,
        imagem: "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 40,
        nome: "Paleta Sunset",
        categoria: "Olhos",
        preco: 84.90,
        imagem: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80"
    }

];


// ================================
// CARRINHO
// ================================

let carrinho = [];


// ================================
// MOSTRAR PRODUTOS
// ================================

function mostrarProdutos(lista = produtos) {

    const grid = document.getElementById("productsGrid");

    grid.innerHTML = "";

    lista.forEach(produto => {

        const card = document.createElement("article");

        card.className = "product";

        card.innerHTML = `

            <div class="product-image">

                <span class="discount">
                    NOVO
                </span>

                <img
                    src="${produto.imagem}"
                    alt="${produto.nome}"
                    loading="lazy"
                >

            </div>

            <div class="product-info">

                <span class="product-category">
                    ${produto.categoria}
                </span>

                <h3>
                    ${produto.nome}
                </h3>

                <p>
                    Glow Beauty Collection
                </p>

                <div class="product-bottom">

                    <span class="price">
                        R$ ${produto.preco.toFixed(2).replace(".", ",")}
                    </span>

                    <button
                        class="add-button"
                        onclick="adicionarCarrinho(${produto.id})"
                    >
                        +
                    </button>

                </div>

            </div>
        `;

        grid.appendChild(card);

    });

    document.getElementById("quantidadeProdutos").textContent =
        `${lista.length} produtos`;
}


// ================================
// ADICIONAR AO CARRINHO
// ================================

function adicionarCarrinho(id) {

    const produto = produtos.find(p => p.id === id);

    const existente = carrinho.find(p => p.id === id);

    if (existente) {

        existente.quantidade++;

    } else {

        carrinho.push({
            ...produto,
            quantidade: 1
        });

    }

    atualizarCarrinho();

    abrirCarrinho();

}


// ================================
// ATUALIZAR CARRINHO
// ================================

function atualizarCarrinho() {

    const container = document.getElementById("cartItems");

    container.innerHTML = "";

    if (carrinho.length === 0) {

        container.innerHTML = `
            <div class="empty-cart">
                <div style="font-size:50px">🛍️</div>
                <h3>Seu carrinho está vazio</h3>
                <p>Adicione seus produtos favoritos!</p>
            </div>
        `;

    }

    carrinho.forEach(produto => {

        const item = document.createElement("div");

        item.className = "cart-item";

        item.innerHTML = `

            <img
                src="${produto.imagem}"
                alt="${produto.nome}"
            >

            <div class="cart-item-info">

                <h4>
                    ${produto.nome}
                </h4>

                <p>
                    R$ ${(produto.preco * produto.quantidade)
                        .toFixed(2)
                        .replace(".", ",")}
                </p>

                <div class="quantity">

                    <button
                        onclick="diminuirQuantidade(${produto.id})"
                    >
                        −
                    </button>

                    <span>
                        ${produto.quantidade}
                    </span>

                    <button
                        onclick="aumentarQuantidade(${produto.id})"
                    >
                        +
                    </button>

                    <button
                        class="remove"
                        onclick="removerProduto(${produto.id})"
                    >
                        🗑️
                    </button>

                </div>

            </div>
        `;

        container.appendChild(item);

    });


    let total = 0;
    let quantidade = 0;

    carrinho.forEach(produto => {

        total += produto.preco * produto.quantidade;
        quantidade += produto.quantidade;

    });

    document.getElementById("total").textContent =
        `R$ ${total.toFixed(2).replace(".", ",")}`;

    document.getElementById("contador").textContent =
        quantidade;

}


// ================================
// QUANTIDADE
// ================================

function aumentarQuantidade(id) {

    const produto = carrinho.find(p => p.id === id);

    produto.quantidade++;

    atualizarCarrinho();

}


function diminuirQuantidade(id) {

    const produto = carrinho.find(p => p.id === id);

    if (produto.quantidade > 1) {

        produto.quantidade--;

    } else {

        carrinho = carrinho.filter(p => p.id !== id);

    }

    atualizarCarrinho();

}


function removerProduto(id) {

    carrinho = carrinho.filter(p => p.id !== id);

    atualizarCarrinho();

}


// ================================
// ABRIR / FECHAR CARRINHO
// ================================

function abrirCarrinho() {

    document.getElementById("cart").classList.add("open");

    document.getElementById("overlay").style.display = "block";

}


function fecharCarrinho() {

    document.getElementById("cart").classList.remove("open");

    document.getElementById("overlay").style.display = "none";

}


// ================================
// FILTRO
// ================================

function filtrarCategoria(categoria) {

    document.querySelectorAll(".category").forEach(botao => {
        botao.classList.remove("active");
    });

    event.target.classList.add("active");

    if (categoria === "Todos") {

        mostrarProdutos(produtos);

    } else {

        const filtrados = produtos.filter(
            produto => produto.categoria === categoria
        );

        mostrarProdutos(filtrados);

    }

}


// ================================
// BUSCA
// ================================

function abrirBusca() {

    const box = document.getElementById("searchBox");

    if (box.style.display === "block") {

        box.style.display = "none";

    } else {

        box.style.display = "block";

        document.getElementById("campoBusca").focus();

    }

}


function buscarProdutos() {

    const termo =
        document
        .getElementById("campoBusca")
        .value
        .toLowerCase();

    const resultado = produtos.filter(produto =>

        produto.nome.toLowerCase().includes(termo) ||

        produto.categoria.toLowerCase().includes(termo)

    );

    mostrarProdutos(resultado);

}


// ================================
// CUPOM
// ================================

function copiarCupom() {

    navigator.clipboard.writeText("GLOW20");

    alert("Cupom GLOW20 copiado! ✨");

}


// ================================
// FINALIZAR
// ================================

function finalizarCompra() {

    if (carrinho.length === 0) {

        alert("Seu carrinho está vazio!");

        return;

    }

    alert(
        "Pedido recebido! 💗\n\n" +
        "Essa é uma demonstração da loja."
    );

}


// ================================
// INICIAR
// ================================

mostrarProdutos();

atualizarCarrinho();