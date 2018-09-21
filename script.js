//CHECA PRA MUDAR FRASE DO BOTÃO
if (FilaPerguntas.size() === 10) {
    var btnStart = document.getElementById('inicio');
    btnStart.innerHTML = "Iniciar Quizz";
}

/* VARIAVEIS */
var questao = document.getElementById('questao');
var alternativa1 = document.getElementById('alternativa1');
var alternativa2 = document.getElementById('alternativa2');
var alternativa3 = document.getElementById('alternativa3');
var alternativa4 = document.getElementById('alternativa4');
var alternativa5 = document.getElementById('alternativa5');

//ABRE O PAINEL DE INSTRUÇ~EOS
function Instrucoes() {
    document.getElementById("panel").style.display = "block";
}

function ShowBox() {
    //Mostra as boxs e chama a pergunta da fila
    document.getElementById("box_pergunta").style.display = "flex";
    document.getElementById("box_recompensa").style.display = "flex";
    document.getElementById("box_imagem").style.display = "flex";
    ChamaPergunta();
}

function ChamaPergunta() {
    new Pergunta();

    var P = FilaPerguntas.front();

    if (FilaPerguntas.size() !== 0) {
        // MUDA O BOTÃO E SETA ONCLICK PRA RESPOSTA
        var btnStart = document.getElementById('inicio');
        btnStart.innerHTML = 'Próximo';
        btnStart.setAttribute("onClick", "javascript: CheckResposta();");

        //PREENCHE COM AS RESPOSTAS
        questao.textContent = P.questao;
        alternativa1.textContent = P.resposta1;
        alternativa2.textContent = P.resposta2;
        alternativa3.textContent = P.resposta3;
        alternativa4.textContent = P.resposta4;
        alternativa5.textContent = P.resposta5;

    } else if (FilaPerguntas.size() === 0) {
        var btnStart = document.getElementById('inicio');
        btnStart.innerHTML = 'Ver resultado';
    } else {
        alert("vazio");
    }


}

function CheckResposta() {

    var CheckedRadio = document.querySelector('input[type=radio]:checked');
    var Selecionada = CheckedRadio.value;


    console.log(Selecionada);
    console.log(FilaPerguntas.front().respostaCerta);


    if (Selecionada == FilaPerguntas.front().respostaCerta) {
        var auxiliar;
        var Premio = document.getElementById('p' + auxiliar--);
        Premio.setAttribute('style', galeao);
        pilha.push(galeao);


        alert("certa resposta");


    } else {
        alert("random");


    }

    setTimeout(function () {
        FilaPerguntas.dequeue();
        ChamaPergunta();
    }, 500);

//    console.log(FilaPerguntas.size());



}
