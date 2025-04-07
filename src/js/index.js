// Seleciona todos os botões de personagens
const botoes = document.querySelectorAll(".botao");

// Seleciona todos os elementos de personagens
const personagens = document.querySelectorAll(".personagem");

// Função para remover a seleção atual de um elemento com determinada classe
function removerSelecaoAtual(classe) {
	const elementoSelecionado = document.querySelector(`.${classe}.selecionado`);
	if (elementoSelecionado) {
		elementoSelecionado.classList.remove("selecionado");
	}
}

// Função para adicionar a classe "selecionado" ao botão clicado
function selecionarBotao(botao) {
	removerSelecaoAtual("botao");
	botao.classList.add("selecionado");
}

// Função para mostrar o personagem correspondente ao índice
function mostrarPersonagem(indice) {
	removerSelecaoAtual("personagem");
	personagens[indice].classList.add("selecionado");
}

// Função principal que configura os eventos de clique nos botões
function configurarEventosBotoes() {
	botoes.forEach((botao, indice) => {
		botao.addEventListener("click", () => {
			selecionarBotao(botao);
			mostrarPersonagem(indice);
		});
	});
}

// Inicializa os eventos
configurarEventosBotoes();
