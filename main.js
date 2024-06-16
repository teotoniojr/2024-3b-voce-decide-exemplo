const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Você tem 10 anos de idade e descobriu recentemente que a Mata Atlântica é o bioma mais extenso do Brasil, ele vai do Nordeste brasileiro ao sul do país, passando por diferentes estados. Porém, esse território está ameaçado de extinção. Qual sua primeira atitude perante a essa informação?",
        alternativas: [
            {
                texto: "Nossa, isso é terrível. Preciso fazer algo para mudar essa realidade.",
                afirmacao: "Desde criança você já se preocupava com o futuro da Mata Atlântica, ",
            },
            {
                texto: "Mais uma vez o ser humano, sendo o ser humano, não tem o que fazer.",
                afirmacao: "Quando criança ainda não entendia a importância da natureza, ",
            }
        ]

    },
    {
        enunciado: "Aos 15 anos você está fazendo um trabalho sobre Mata Atlântica e percebe que a situação piorou. Alguns animais foram extintos, outras áreas foram depredadas ao ponto de não retorno. Você deve decidir qual formação tecnológica você quer seguir no Hiper Novo Ensino Médio. Qual será o curso que você irá escolher?",
        alternativas: [
            {
                texto: "Tecnólogo de recuperação de biomas;",
                afirmacao: " adolecente não conseguiu tirar o tema da cabeça e começou os estudos para conseguir fazer a diferença no futuro.",
            },
            {
                texto: "Tecnólogo em produção de grande escala;",
                afirmacao: " adolecente continuou desacreditado que poderia fazer algo para mudar e resolveu investir em algo mais lucrativo.",
            }

        ]
    },
    {
        enunciado: "Aos 21 anos você se formou na universidade, então foi recebeu duas propostas de primeiro emprego. Qual delas você escolherá?",
        alternativas: [
            {
                texto: "A primeira opção é ser estagiário em uma empresa que está reflorestando a mata atlântica, você ficará encarregado da divulgação e publicação das redes sociais. O salário não é dos melhores, mas é uma causa nobre e você está feliz em começar a trabalhar nessa perspectiva.",
                afirmacao: " Quando você finalmente conseguiu seu primeiro emprego, se sentiu útil e abraçou a causa da Mata Atlântica. Você obteve muito sucesso em suas divulgações no primeiro emprego e agora é um jovem famoso na internet, por denunciar um garimpo ilegal e proteger o pássaro Macuco da extinção.",
            },
            {
                texto: "A segunda opção é ser estagiário em uma empresa internacional, você ficará encarregado da divulgação e publicação das redes sociais. O salário é o melhor, mas é uma empresa que não é ecologicamente correta. Seu papel é passar uma visão mais “verde” da empresa para o público.",
                afirmacao: " Quando você finalmente conseguiu seu primeiro emprego, se sentiu economicamente estável, mas algo não fazia sentido. Você obteve muito sucesso em suas divulgações, porém uma denúncia de suas publicações falsas surgiu, a empresa faliu e você não conseguiu outro emprego nessa área.",
            }
        ]
    },
    {
        enunciado: "Com 60 anos a sua última decisão é necessária. Uma votação em defesa das áreas preservadas do Brasil está sendo apurada pelos deputados. A polêmica é enorme e existe a possibilidade de Greve Geral. Você deixará tudo que você tem que fazer para participar de uma greve?",
        alternativas: [
            {
                texto: "Não ficaria por fora dessa luta nem se não pudesse andar!",
                afirmacao: " Em 2049 foi vivenciado a maior greve da história! Nunca na história da humanidade tantas pessoas se reuniram contra um projeto de lei nefasto que acabava com a proteção das áreas de preservação. Devido à repercussão da sua presença e ao engajamento que você fez nas suas redes sociais, hoje você é um dos poucos premiados com um troféu Heróis da Mata Atlântica!",
            },
            {
                texto: "Nunca gostei de me envolver com política.",
                afirmacao: "Em 2049 foi vivenciado a maior greve da história! Mas você não participou. Você fica com a sensação de que nada que você construiu até aqui foi útil para a humanidade. Você pode até ser rico, ter muito dinheiro… Mas é uma pessoa a mais no mundo, só outro ser humano que caminha.",
            }
        ]
    }
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostreResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent ="";
    mostraAlternativas();

}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostreResultado (){
    caixaPerguntas.textContent = " Em 2049 ...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

