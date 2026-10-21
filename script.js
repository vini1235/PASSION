const dialogos = [
  {
    titulo: "Bom dia, bruxinha / O chapéu",
    cenario: "quarto",
    falas: [
      { personagem: "", texto: "É de manhã, no quarto da protagonista. Roupas estão espalhadas e objetos mágicos se misturam às coisas do dia a dia.", lado: "centro" },
      { personagem: "", texto: "Um chapéu de bruxa está sobre a cama. O celular carrega enquanto o despertador toca.", lado: "centro" },
      { personagem: "Protagonista", texto: "Ah, não...", lado: "esquerda" },
      { personagem: "Protagonista", texto: "Já tá na hora?", lado: "esquerda" },
      { personagem: "", texto: "Ela pega o celular. São 8h12.", lado: "centro", cenario: "celular" },
      { personagem: "Protagonista", texto: "Se eu me atrasar mais uma vez, meu chefe vai me transformar num sapo.", lado: "esquerda" },
      { personagem: "Protagonista", texto: "De novo.", lado: "esquerda" },
      { personagem: "", texto: "Uma notificação do Passion aparece no celular:", lado: "centro" },
      { personagem: "", texto: "“Seu acompanhamento está pronto para começar! Viva seu dia normalmente. ✨”", lado: "centro" },
      { personagem: "Protagonista", texto: "Ah, é. O aplicativo que eu instalei ontem...", lado: "esquerda" },
      { personagem: "Protagonista", texto: "Depois eu vejo isso.", lado: "esquerda" },
      { personagem: "", texto: "A voz da mãe vem de fora do quarto.", lado: "centro", cenario: "quarto" },
      { personagem: "Mãe", texto: "FILHAAAA!", lado: "direita" },
      { personagem: "Protagonista", texto: "QUE FOI, MÃE?", lado: "esquerda" },
      { personagem: "Mãe", texto: "PASSA NO MERCADO ANTES DO TRABALHO!", lado: "direita" },
      { personagem: "Protagonista", texto: "Pra quêêê?", lado: "esquerda" },
      { personagem: "Mãe", texto: "ACABOU O SAL DE LUA DO CALDEIRÃO!", lado: "direita" },
      { personagem: "Protagonista", texto: "De novo?!", lado: "esquerda" },
      { personagem: "Mãe", texto: "E NÃO ESQUECE! JÁ DEIXEI PAGO, É SÓ BUSCAR!", lado: "direita" },
      { personagem: "Protagonista", texto: "Tááá bom, mãe!", lado: "esquerda" },
      { personagem: "", texto: "Ela suspira.", lado: "centro" },
      { personagem: "Protagonista", texto: "Mercado, trabalho, mercado...", lado: "esquerda" },
      { personagem: "Protagonista", texto: "Bom, primeiro eu preciso me vestir.", lado: "esquerda" },
      { personagem: "", texto: "Pouco depois, ela está diante do espelho, já com a roupa de trabalho e o chapéu de bruxa.", lado: "centro", cenario: "espelho" },
      { personagem: "", texto: "Um pequeno broche de estrela brilha no chapéu.", lado: "centro" },
      { personagem: "Protagonista", texto: "Tá. Até que eu tô arrumadinha.", lado: "esquerda" },
      { personagem: "Protagonista", texto: "Esse broche ficou muito fofo.", lado: "esquerda" },
      { personagem: "", texto: "Ela pega o celular e manda uma foto no espelho para a amiga Bia.", lado: "centro" },
      { personagem: "Protagonista", texto: "fit de hoje ✨", lado: "esquerda" },
      { personagem: "Bia", texto: "nossa amiga", lado: "direita" },
      { personagem: "Bia", texto: "vai com esse chapéu pro trabalho mesmo???", lado: "direita" },
      { personagem: "Bia", texto: "olha o tamanho dessa estrela 😭", lado: "direita" },
      { personagem: "Protagonista (pensamento)", texto: "Ué...", lado: "esquerda" },
      { personagem: "Protagonista (pensamento)", texto: "Eu tinha gostado.", lado: "esquerda" },
      { personagem: "", texto: "Ela olha novamente para o espelho, observando a estrela no chapéu.", lado: "centro" }
    ],
    opcoes: ["Manter o chapéu como está", "Tirar o broche de estrela"],
    influencias: ["autonomia", "inseguranca"]
  },
  {
    titulo: "A foto perfeita",
    cenario: "espelho",
    falas: [
      { personagem: "", texto: "Ainda diante do espelho, ela termina de se arrumar.", lado: "centro" },
      { personagem: "Protagonista", texto: "Pronto. Agora sim.", lado: "esquerda" },
      { personagem: "Protagonista", texto: "Mas antes... uma fotinha.", lado: "esquerda" },
      { personagem: "", texto: "Ela aproxima o celular do espelho e tira outra foto.", lado: "centro" },
      { personagem: "Protagonista", texto: "Essa ficou boa!", lado: "esquerda" },
      { personagem: "", texto: "Na rede social, a foto aparece na prévia de uma nova publicação.", lado: "centro" },
      { personagem: "", texto: "A legenda diz: “bom dia da bruxa mais atrasada dessa cidade 🧙‍♀️✨”.", lado: "centro" },
      { personagem: "", texto: "Ela leva o dedo ao botão de publicar, mas hesita.", lado: "centro" },
      { personagem: "Protagonista (pensamento)", texto: "Hmm...", lado: "esquerda" },
      { personagem: "Protagonista (pensamento)", texto: "Será que essa ficou boa mesmo?", lado: "esquerda" },
      { personagem: "Protagonista (pensamento)", texto: "E essa legenda...", lado: "esquerda" }
    ],
    opcoes: ["Postar sem mudar nada", "Editar foto e legenda", "Desistir de publicar"],
    influencias: ["autonomia", "inseguranca", "autocensura"]
  },
  {
    titulo: "Quanto custa sair de casa?",
    cenario: "quarto",
    falas: [
      { personagem: "", texto: "Ela pega a bolsa e confere o que vai levar antes de sair do quarto.", lado: "centro" },
      { personagem: "Protagonista", texto: "Tá, carteira, celular, chave...", lado: "esquerda" },
      { personagem: "Protagonista", texto: "Espero não ter esquecido nada dessa vez.", lado: "esquerda" },
      { personagem: "", texto: "O celular vibra. Desta vez, a mãe mandou mensagens:", lado: "centro" },
      { personagem: "Mãe", texto: "SAL DE LUA!!!", lado: "direita" },
      { personagem: "Mãe", texto: "NÃO ESQUECE 😡", lado: "direita" },
      { personagem: "Mãe", texto: "e cuidado na rua ❤️", lado: "direita" },
      { personagem: "Protagonista", texto: "É… minha mãe faz esse trabalho de me lembrar das coisas", lado: "esquerda" },
      { personagem: "", texto: "Ela abre o Táxi Arcano e informa o destino: Mercado Lua Nova.", lado: "centro" },
      { personagem: "", texto: "A corrida custa 10 moedas, exatamente o saldo que ela tem.", lado: "centro" },
      { personagem: "", texto: "A alternativa é caminhar por quinze minutos até o mercado.", lado: "centro" },
      { personagem: "Protagonista", texto: "Dez moedas?!", lado: "esquerda" },
      { personagem: "Protagonista", texto: "Nossa, até parece que o carro vem voando.", lado: "esquerda" },
      { personagem: "Protagonista", texto: "...se bem que às vezes vem.", lado: "esquerda" },
      { personagem: "Protagonista", texto: "Bom, o mercado nem é tão longe.", lado: "esquerda" }
    ],
    opcoes: ["Ir a pé — saldo: 10 moedas", "Chamar táxi — saldo: 0 moedas"],
    influencias: ["dinheiro", "seguranca"]
  }
];

const influencias = {
  inseguranca: {
    titulo: "Insegurança com a imagem",
    texto: "A preocupação com a própria imagem e com o olhar dos outros foi a influência predominante neste trecho da história."
  },
  autocensura: {
    titulo: "Autocensura",
    texto: "O receio de se expor e de ser julgada teve mais peso na forma como a personagem se expressou."
  },
  autonomia: {
    titulo: "Autonomia",
    texto: "A confiança nas próprias preferências foi a influência predominante no caminho da personagem."
  },
  dinheiro: {
    titulo: "Custo do deslocamento",
    texto: "A preocupação com os recursos disponíveis foi a influência predominante neste trecho da história."
  },
  seguranca: {
    titulo: "Segurança e conforto",
    texto: "A busca por proteção e tranquilidade foi a influência predominante no caminho da personagem."
  }
};

const chaveProgresso = "passion-progresso";
const limiteTrecho = 160;
const cena = document.getElementById("cena");
const personagemCena = document.getElementById("personagem-cena");
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

function dividirFala(texto, lado, limite = limiteTrecho) {
  if (lado === "centro") {
    return [texto];
  }

  const trechos = [];

  for (const linha of texto.split(/\n+/)) {
    let trecho = "";
    for (const palavra of linha.trim().split(/\s+/)) {
      const proximoTrecho = trecho ? trecho + " " + palavra : palavra;
      if (trecho && proximoTrecho.length > limite) {
        trechos.push(trecho);
        trecho = palavra;
      } else {
        trecho = proximoTrecho;
      }
    }
    if (trecho) {
      trechos.push(trecho);
    }
  }

  return trechos.length ? trechos : [""];
}

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

  const fala = dialogo.falas[dados.fala];
  const trecho = dados.trecho === undefined ? 0 : dados.trecho;
  const quantidadeTrechos = dividirFala(fala.texto, fala.lado).length;
  if (!Number.isInteger(trecho) || trecho < 0) {
    return false;
  }
  if (trecho >= quantidadeTrechos && trecho >= dividirFala(fala.texto, undefined, 90).length) {
    return false;
  }
  if (dados.etapa !== "fala" && trecho !== 0) {
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
  if (dados.etapa === "fim" || dados.etapa === "resultados") {
    return dados.dialogo === dialogos.length - 1 && dados.fala === ultimaFala && dados.escolhas.length === dialogos.length;
  }
  return false;
}

function carregarProgresso() {
  try {
    const dados = JSON.parse(localStorage.getItem(chaveProgresso));
    if (progressoValido(dados)) {
      const fala = dialogos[dados.dialogo].falas[dados.fala];
      const quantidadeTrechos = dividirFala(fala.texto, fala.lado).length;
      dados.trecho = dados.trecho === undefined ? 0 : dados.trecho;
      if (dados.trecho >= quantidadeTrechos) {
        dados.trecho = 0;
      }
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
  if (partida.etapa === "resultados") {
    mostrarResultados();
    return;
  }
  if (partida.etapa === "fim") {
    mostrarTela("fim");
    return;
  }

  const atual = dialogos[partida.dialogo];
  comecar.hidden = partida.etapa !== "cena";
  conversa.hidden = partida.etapa === "cena";
  avancar.hidden = partida.etapa !== "fala";
  escolhas.hidden = partida.etapa !== "escolhas";
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
  atualizarCenario();
  ajustarConversa();
}

function atualizarCenario() {
  const dialogo = dialogos[partida.dialogo];
  let cenario = dialogo.cenario;

  for (let i = partida.fala; i >= 0; i--) {
    if (dialogo.falas[i].cenario) {
      cenario = dialogo.falas[i].cenario;
      break;
    }
  }

  let imagem = "quarto1.png";
  if (cenario === "celular") {
    imagem = "celular.png";
  }
  if (cenario === "espelho") {
    imagem = partida.escolhas[0]?.opcao === 1 ? "espelho2sembroche.png" : "espelho1broche.png";
  }

  cena.style.backgroundImage = 'url("assets/' + imagem + '")';
  personagemCena.hidden = cenario !== "quarto" || partida.etapa === "cena";
}

function ajustarConversa() {
  cena.style.minHeight = "";
  if (cena.hidden || conversa.hidden || !conversa.lastElementChild) {
    return;
  }

  while (conversa.children.length > 1 && conversa.scrollHeight > conversa.clientHeight) {
    conversa.firstElementChild.remove();
  }

  if (conversa.scrollHeight > conversa.clientHeight) {
    const painel = document.getElementById("dialogo");
    const altura = painel.clientHeight - conversa.clientHeight + conversa.scrollHeight;
    cena.style.minHeight = Math.ceil(altura * 3) + "px";
  }
}

function adicionarMensagem(fala, texto = fala.texto) {
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
  balao.append(document.createTextNode(texto));
  conversa.append(balao);
}

function adicionarFalaAtual() {
  const fala = dialogos[partida.dialogo].falas[partida.fala];
  const trechos = dividirFala(fala.texto, fala.lado);
  adicionarMensagem(fala, trechos[partida.trecho]);
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
      const fala = dialogo.falas[j];
      const trechos = dividirFala(fala.texto, fala.lado);
      let quantidadeTrechos = trechos.length;
      if (i === partida.dialogo && j === partida.fala && partida.etapa === "fala") {
        quantidadeTrechos = partida.trecho + 1;
      }
      for (let k = 0; k < quantidadeTrechos; k++) {
        adicionarMensagem(fala, trechos[k]);
      }
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
    partida.trecho = 0;
    partida.etapa = "fala";
  } else {
    partida.etapa = "fim";
  }

  salvarProgresso(() => {
    mostrarModal("Escolha registrada: " + dialogos[indiceDialogo].opcoes[indiceOpcao], false, () => {
      adicionarEscolha(resposta);
      if (partida.etapa === "fala") {
        adicionarFalaAtual();
      }
      mostrarCena();
    });
  });
}

function calcularResultado(respostas) {
  const contagem = {};

  for (const resposta of respostas) {
    const influencia = dialogos[resposta.dialogo].influencias[resposta.opcao];
    contagem[influencia] = (contagem[influencia] || 0) + 1;
  }

  const maiorContagem = Math.max(0, ...Object.values(contagem));
  return Object.keys(contagem).find((influencia) => contagem[influencia] === maiorContagem);
}

function mostrarResultados() {
  if (!partida || partida.etapa !== "resultados") {
    return;
  }

  const principal = calcularResultado(partida.escolhas);
  document.getElementById("resumo-resultado").textContent = influencias[principal].titulo;
  document.getElementById("influencias").textContent = influencias[principal].texto;
  mostrarTela("resultados");
}

function abrirResultados() {
  if (modal.open || !partida || partida.etapa !== "fim") {
    return;
  }
  partida.etapa = "resultados";
  salvarProgresso(mostrarResultados);
}

function mostrarEstatisticas() {
  const respostas = document.getElementById("respostas");
  const realizadas = partida ? partida.escolhas : [];
  const total = document.createElement("strong");
  total.textContent = realizadas.length;
  const descricao = realizadas.length === 1 ? "escolha realizada" : "escolhas realizadas";
  document.getElementById("quantidade").replaceChildren(total, " " + descricao);
  respostas.replaceChildren();
  respostas.hidden = realizadas.length === 0;

  realizadas.forEach((resposta) => {
    const item = document.createElement("li");
    const dialogo = dialogos[resposta.dialogo];
    const titulo = document.createElement("strong");
    titulo.textContent = dialogo.titulo;
    const escolha = document.createElement("p");
    escolha.textContent = dialogo.opcoes[resposta.opcao];
    item.append(titulo, escolha);
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
    trecho: 0,
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
  adicionarFalaAtual();
  salvarProgresso(mostrarCena);
}

function avancarFala() {
  if (modal.open || !partida || partida.etapa !== "fala") {
    return;
  }
  const falas = dialogos[partida.dialogo].falas;
  const fala = falas[partida.fala];
  const trechos = dividirFala(fala.texto, fala.lado);
  if (partida.trecho < trechos.length - 1) {
    partida.trecho++;
    adicionarFalaAtual();
  } else if (partida.fala < falas.length - 1) {
    partida.fala++;
    partida.trecho = 0;
    adicionarFalaAtual();
  } else {
    partida.trecho = 0;
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
document.getElementById("ver-resultados").addEventListener("click", abrirResultados);
estatisticasFim.addEventListener("click", mostrarEstatisticas);
document.getElementById("voltar").addEventListener("click", () => mostrarTela("menu"));
window.addEventListener("resize", ajustarConversa);
document.fonts.addEventListener("loadingdone", ajustarConversa);

mostrarTela("menu");
