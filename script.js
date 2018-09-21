var Pilha = new Stack();
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

var aux = 10;
var Ring = "https://vignette.wikia.nocookie.net/terramedia/images/0/00/Ring_02.png/revision/latest?cb=20141212214327";
var Eye = "https://media.forgecdn.net/avatars/78/278/636175057431321068.png";
var TRing = 0;
var TEye = 0;

//ABRE O PAINEL DE INSTRUÇ~EOS
function Instrucoes() {
    document.getElementById("panel").style.display = "block";
    document.getElementById("close").style.display = "none";
}

function ShowBox() {
    //Mostra as boxs e chama a pergunta da fila
    document.getElementById("box_pergunta").style.display = "flex";
    document.getElementById("box_recompensa").style.display = "flex";
    document.getElementById("box_imagem").style.display = "flex";
    ChamaPergunta();
}

//function Recomeca(){
//    ChamaPergunta();
//}

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
        btnStart.innerHTML = 'Recomeçar';
        btnStart.setAttribute("onClick", "javascript: SortearResultado();");

        var ContentResult = document.getElementById('perguntas');
        ContentResult.innerHTML = SortearResultado();



    } else {
        alert("Você descobriu um bug no sistema. Favor comunique os alunos Andrei e Matheus e conte o que você fez!");
    }
    
}

function CheckResposta() {

    var CheckedRadio = document.querySelector('input[type=radio]:checked');
    var Selecionada = CheckedRadio.value;

    if (Selecionada == FilaPerguntas.front().respostaCerta) {
        Premio = document.getElementById('premio' + aux--);
        Premio.setAttribute('src', Ring);
        Pilha.push(Ring);
    } else {
        Premio = document.getElementById('premio' + aux--);
        Premio.setAttribute('src', Eye);
        Pilha.push(Eye);
    }

    setTimeout(function () {
        FilaPerguntas.dequeue();
        ChamaPergunta();
    }, 400);
}

function SortearResultado() {

    while (Pilha.size() !== 0) {
        if (Pilha.peek() === Ring) {
            TRing++;
        } else if (Pilha.peek() === Eye) {
            TEye++;
        }
        Pilha.pop();
    }

    console.log(Pilha.size());

    string = "";
    if (TRing >= 6) {
        string = '<h2>Você recebeu a honra de participar da festa dos Hobbits no Condado.</h2><iframe width="560" height="315" src="https://www.youtube.com/embed/uacUXA57VYE?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    } else if (TRing <= 5) {
        string = '<h2></h2><img src="'+Eye+'" alt="" />';
    }

    console.log(string);
    return string;
}
