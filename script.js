const dialogos = [
  {
    titulo: "Diálogo 1",
    falas: [
      { personagem: "Personagem", texto: "Teste", lado: "esquerda" },
      { personagem: "Outro personagem", texto: "Teste", lado: "direita" }
    ],
    opcoes: ["Opção 1", "Opção 2", "Opção 3"]
  },
  {
    titulo: "Diálogo 2",
    falas: [
      { personagem: "Personagem", texto: "Teste", lado: "esquerda" },
      { personagem: "Personagem", texto: "Teste", lado: "esquerda" }
    ],
    opcoes: ["Opção 1", "Opção 2", "Opção 3"]
  },
  {
    titulo: "Diálogo 3",
    falas: [
      { personagem: "Personagem", texto: "Teste", lado: "esquerda" },
      { personagem: "Personagem", texto: "Teste", lado: "esquerda" }
    ],
    opcoes: ["Opção 1", "Opção 2", "Opção 3"]
  }
];

const chaveProgresso = "passion-progresso";
const continuar = document.getElementById("continuar");
const comecar = document.getElementById("comecar");
const conversa = document.getElementById("conversa");
const avancar = document.getElementById("avancar");
const escolhas = document.getElementById("escolhas");
const estatisticasFim = document.getElementById("estatisticas-fim");
const modal = document.getElementById("modal");
let partida = carregarProgresso();
let temProgressoSalvo = partida !== null;
let avisoSalvamento = false;

function progressoValido(dados) {
  if (!dados || dados.versao !== 1) {
    return false;
  }

  const dialogo = dialogos[dados.dialogo];
  if (!Number.isInteger(dados.dialogo) || !dialogo) {
    return false;
  }

  if (!Number.isInteger(dados.fala) || dados.fala < 0 || dados.fala >= dialogo.falas.length) {
    return false;
  }

  if (!Array.isArray(dados.escolhas) || dados.escolhas.length > dialogos.length) {
    return false;
  }

  for (let i = 0; i < dados.escolhas.length; i++) {
    const resposta = dados.escolhas[i];
    if (!resposta || resposta.dialogo !== i) {
      return false;
    }
    if (!Number.isInteger(resposta.opcao) || resposta.opcao < 0 || resposta.opcao >= dialogos[i].opcoes.length) {
      return false;
    }
  }

  const ultimaFala = dialogo.falas.length - 1;

  if (dados.etapa === "cena") {
    return dados.dialogo === 0 && dados.fala === 0 && dados.escolhas.length === 0;
  }
  if (dados.etapa === "fala") {
    return dados.escolhas.length === dados.dialogo;
  }
  if (dados.etapa === "escolhas") {
    return dados.escolhas.length === dados.dialogo && dados.fala === ultimaFala;
  }
  if (dados.etapa === "fim") {
    return dados.dialogo === dialogos.length - 1 && dados.fala === ultimaFala && dados.escolhas.length === dialogos.length;
  }
  return false;
}

function carregarProgresso() {
  try {
    const dados = JSON.parse(localStorage.getItem(chaveProgresso));
    if (progressoValido(dados)) {
      return dados;
    }
    return null;
  } catch {
    return null;
  }
}

function mostrarModal(mensagem, confirmar = false, aoFechar = null) {
  document.getElementById("mensagem-modal").textContent = mensagem;
  document.getElementById("cancelar-modal").hidden = !confirmar;
  document.getElementById("confirmar-modal").textContent = confirmar ? "Novo jogo" : "OK";
  modal.returnValue = "";

  modal.addEventListener("close", () => {
    if (aoFechar) {
      aoFechar(modal.returnValue === "confirmar");
    }
  }, { once: true });
  modal.showModal();
}

function salvarProgresso(aoTerminar = null) {
  try {
    localStorage.setItem(chaveProgresso, JSON.stringify(partida));
    temProgressoSalvo = true;
  } catch {
    if (!avisoSalvamento) {
      avisoSalvamento = true;
      mostrarModal("Não foi possível salvar neste navegador. O progresso pode ser perdido ao sair ou recarregar a página.", false, aoTerminar);
      return;
    }
  }
  if (aoTerminar) {
    aoTerminar();
  }
}

function mostrarTela(id) {
  for (const tela of document.querySelectorAll("main")) {
    tela.hidden = tela.id !== id;
  }
  continuar.hidden = !temProgressoSalvo;
}

function mostrarCena() {
  const atual = dialogos[partida.dialogo];
  comecar.hidden = partida.etapa !== "cena";
  conversa.hidden = partida.etapa === "cena";
  avancar.hidden = partida.etapa !== "fala";
  escolhas.hidden = partida.etapa !== "escolhas";
  estatisticasFim.hidden = partida.etapa !== "fim";
  escolhas.replaceChildren();

  if (partida.etapa === "escolhas") {
    const indiceDialogo = partida.dialogo;
    atual.opcoes.forEach((opcao, indiceOpcao) => {
      const botao = document.createElement("button");
      botao.type = "button";
      botao.className = "botao-iniciar";
      botao.textContent = opcao;
      botao.addEventListener("click", () => escolher(indiceDialogo, indiceOpcao));
      escolhas.append(botao);
    });
  }
  conversa.scrollTop = conversa.scrollHeight;
}

function adicionarMensagem(fala) {
  const balao = document.createElement("p");
  balao.className = "mensagem";

  if (fala.personagem) {
    const nome = document.createElement("strong");
    nome.textContent = fala.personagem;
    balao.append(nome, document.createElement("br"));
  }
  if (fala.lado === "centro") {
    balao.classList.add("narracao");
  }
  if (fala.lado === "direita") {
    balao.classList.add("direita");
  }
  balao.append(document.createTextNode(fala.texto));
  conversa.append(balao);
}

function adicionarEscolha(resposta) {
  const dialogo = dialogos[resposta.dialogo];
  adicionarMensagem({
    personagem: "",
    texto: "Escolha: " + dialogo.opcoes[resposta.opcao],
    lado: "centro"
  });
}

function reconstruirConversa() {
  conversa.replaceChildren();
  if (partida.etapa === "cena") {
    return;
  }

  for (let i = 0; i <= partida.dialogo; i++) {
    const dialogo = dialogos[i];
    let quantidade = dialogo.falas.length;
    if (i === partida.dialogo) {
      quantidade = partida.fala + 1;
    }

    for (let j = 0; j < quantidade; j++) {
      adicionarMensagem(dialogo.falas[j]);
    }

    const resposta = partida.escolhas[i];
    if (resposta) {
      adicionarEscolha(resposta);
    }
  }
}

function escolher(indiceDialogo, indiceOpcao) {
  if (modal.open || !partida) {
    return;
  }
  if (partida.etapa !== "escolhas" || partida.dialogo !== indiceDialogo) {
    return;
  }
  if (partida.escolhas[indiceDialogo]) {
    return;
  }

  for (const botao of escolhas.querySelectorAll("button")) {
    botao.disabled = true;
  }
  const resposta = { dialogo: indiceDialogo, opcao: indiceOpcao };
  partida.escolhas.push(resposta);

  if (partida.dialogo < dialogos.length - 1) {
    partida.dialogo++;
    partida.fala = 0;
    partida.etapa = "fala";
  } else {
    partida.etapa = "fim";
  }

  salvarProgresso(() => {
    mostrarModal("Escolha registrada: " + dialogos[indiceDialogo].opcoes[indiceOpcao], false, () => {
      adicionarEscolha(resposta);
      if (partida.etapa === "fala") {
        adicionarMensagem(dialogos[partida.dialogo].falas[partida.fala]);
      }
      mostrarCena();
    });
  });
}

function mostrarEstatisticas() {
  const respostas = document.getElementById("respostas");
  const realizadas = partida ? partida.escolhas : [];
  document.getElementById("quantidade").textContent = "Escolhas realizadas: " + realizadas.length;
  respostas.replaceChildren();

  realizadas.forEach((resposta) => {
    const item = document.createElement("li");
    const dialogo = dialogos[resposta.dialogo];
    item.textContent = dialogo.titulo + ": " + dialogo.opcoes[resposta.opcao];
    respostas.append(item);
  });
  mostrarTela("estatisticas");
}

function novoJogo() {
  if (modal.open) {
    return;
  }

  if (partida) {
    mostrarModal("Já existe uma partida. Deseja apagar esse progresso e começar um novo jogo?", true, (confirmou) => {
      if (confirmou) {
        iniciarPartida();
      }
    });
    return;
  }
  iniciarPartida();
}

function iniciarPartida() {
  partida = {
    versao: 1,
    dialogo: 0,
    fala: 0,
    etapa: "cena",
    escolhas: []
  };
  conversa.replaceChildren();
  salvarProgresso(() => {
    mostrarTela("cena");
    mostrarCena();
  });
}

function continuarJogo() {
  if (modal.open) {
    return;
  }
  partida = carregarProgresso();
  temProgressoSalvo = partida !== null;
  if (!partida) {
    mostrarTela("menu");
    return;
  }
  reconstruirConversa();
  mostrarTela("cena");
  mostrarCena();
}

function comecarDialogo() {
  if (modal.open || !partida || partida.etapa !== "cena") {
    return;
  }
  partida.etapa = "fala";
  adicionarMensagem(dialogos[partida.dialogo].falas[partida.fala]);
  salvarProgresso(mostrarCena);
}

function avancarFala() {
  if (modal.open || !partida || partida.etapa !== "fala") {
    return;
  }
  if (partida.fala < dialogos[partida.dialogo].falas.length - 1) {
    partida.fala++;
    adicionarMensagem(dialogos[partida.dialogo].falas[partida.fala]);
  } else {
    partida.etapa = "escolhas";
  }
  salvarProgresso(mostrarCena);
}

function sairDoJogo() {
  if (modal.open) {
    return;
  }
  salvarProgresso(() => mostrarTela("menu"));
}

document.getElementById("novo-jogo").addEventListener("click", novoJogo);
continuar.addEventListener("click", continuarJogo);
comecar.addEventListener("click", comecarDialogo);
avancar.addEventListener("click", avancarFala);
document.getElementById("sair").addEventListener("click", sairDoJogo);
document.getElementById("estatisticas-menu").addEventListener("click", mostrarEstatisticas);
estatisticasFim.addEventListener("click", mostrarEstatisticas);
document.getElementById("voltar").addEventListener("click", () => mostrarTela("menu"));

mostrarTela("menu");
