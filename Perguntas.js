function Pergunta() {
    this.questao = null;
    this.resposta1 = null;
    this.resposta2 = null;
    this.resposta3 = null;
    this.resposta4 = null;
    this.resposta5 = null;

    this.pergunta = null;
}

var FilaPerguntas = new Queue();
var ListaEncadeadaResposta = new ListaDuplamenteEncadeada();

FilaPerguntas.enqueue(Pergunta1 = new Pergunta());
Pergunta1.questao = "1 - Qual o nome do Jardineiro de Frodo?";
ListaEncadeadaResposta.adiciona(0, "Freddy");
ListaEncadeadaResposta.adiciona(1, "Sam"); //CERTA
ListaEncadeadaResposta.adiciona(2, "Cacco");
ListaEncadeadaResposta.adiciona(3, "Gimli");
ListaEncadeadaResposta.adiciona(4, "Gandalf");
Pergunta1.resposta1 = ListaEncadeadaResposta.procura(0);
Pergunta1.resposta2 = ListaEncadeadaResposta.procura(1);
Pergunta1.resposta3 = ListaEncadeadaResposta.procura(2);
Pergunta1.resposta4 = ListaEncadeadaResposta.procura(3);
Pergunta1.resposta5 = ListaEncadeadaResposta.procura(4);
Pergunta1.respostaCerta = 2;

FilaPerguntas.enqueue(Pergunta2 = new Pergunta());
Pergunta2.questao = "2 - O Príncipe Légolas é interpretado por quem?";
ListaEncadeadaResposta.adiciona(0, "Sean Bean");
ListaEncadeadaResposta.adiciona(1, "James Wood"); 
ListaEncadeadaResposta.adiciona(2, "Tom Cruise");
ListaEncadeadaResposta.adiciona(3, "Orlando Bloom"); //CERTA
ListaEncadeadaResposta.adiciona(4, "Karl Urban");
Pergunta2.resposta1 = ListaEncadeadaResposta.procura(0);
Pergunta2.resposta2 = ListaEncadeadaResposta.procura(1);
Pergunta2.resposta3 = ListaEncadeadaResposta.procura(2);
Pergunta2.resposta4 = ListaEncadeadaResposta.procura(3);
Pergunta2.resposta5 = ListaEncadeadaResposta.procura(4);
Pergunta2.respostaCerta = 4;

FilaPerguntas.enqueue(Pergunta3 = new Pergunta());
Pergunta3.questao = "3 - Qual o nome do Anão que estava dentro da Sociedade do Anel?";
ListaEncadeadaResposta.adiciona(0, "Gandolf");
ListaEncadeadaResposta.adiciona(1, "Gimli"); //CERTA
ListaEncadeadaResposta.adiciona(2, "Aragorn");
ListaEncadeadaResposta.adiciona(3, "Elrond");
ListaEncadeadaResposta.adiciona(4, "Bilbo");
Pergunta3.resposta1 = ListaEncadeadaResposta.procura(0);
Pergunta3.resposta2 = ListaEncadeadaResposta.procura(1);
Pergunta3.resposta3 = ListaEncadeadaResposta.procura(2);
Pergunta3.resposta4 = ListaEncadeadaResposta.procura(3);
Pergunta3.resposta5 = ListaEncadeadaResposta.procura(4);
Pergunta3.respostaCerta = 2;

FilaPerguntas.enqueue(Pergunta4 = new Pergunta());
Pergunta4.questao = "4 - Quem depositou o mal dentro do anel?";
ListaEncadeadaResposta.adiciona(0, "Sauron"); //CERTA
ListaEncadeadaResposta.adiciona(1, "Gimli"); 
ListaEncadeadaResposta.adiciona(2, "Aragorn");
ListaEncadeadaResposta.adiciona(3, "Saruman");
ListaEncadeadaResposta.adiciona(4, "Freddy");
Pergunta4.resposta1 = ListaEncadeadaResposta.procura(0);
Pergunta4.resposta2 = ListaEncadeadaResposta.procura(1);
Pergunta4.resposta3 = ListaEncadeadaResposta.procura(2);
Pergunta4.resposta4 = ListaEncadeadaResposta.procura(3);
Pergunta4.resposta5 = ListaEncadeadaResposta.procura(4);
Pergunta4.respostaCerta = 1;

FilaPerguntas.enqueue(Pergunta5 = new Pergunta());
Pergunta5.questao = "5 - Qual o nome dos hobbits que adoravam fazer travessuras?";
ListaEncadeadaResposta.adiciona(0, "Freddy e Jacob");
ListaEncadeadaResposta.adiciona(1, "Gimli e Guimli"); 
ListaEncadeadaResposta.adiciona(2, "Merry e Pippin"); //CERTA
ListaEncadeadaResposta.adiciona(3, "Cacco e Freddy");
ListaEncadeadaResposta.adiciona(4, "Jacob e Merry");
Pergunta5.resposta1 = ListaEncadeadaResposta.procura(0);
Pergunta5.resposta2 = ListaEncadeadaResposta.procura(1);
Pergunta5.resposta3 = ListaEncadeadaResposta.procura(2);
Pergunta5.resposta4 = ListaEncadeadaResposta.procura(3);
Pergunta5.resposta5 = ListaEncadeadaResposta.procura(4);
Pergunta5.respostaCerta = 3;

FilaPerguntas.enqueue(Pergunta6 = new Pergunta());
Pergunta6.questao = "6 - De quem Frodo conseguiu o anel?";
ListaEncadeadaResposta.adiciona(0, "Seu avô");
ListaEncadeadaResposta.adiciona(1, "Seu tio"); //CERTA
ListaEncadeadaResposta.adiciona(2, "Seu padrinho");
ListaEncadeadaResposta.adiciona(3, "Seu irmão");
ListaEncadeadaResposta.adiciona(4, "Seu amigo");
Pergunta6.resposta1 = ListaEncadeadaResposta.procura(0);
Pergunta6.resposta2 = ListaEncadeadaResposta.procura(1);
Pergunta6.resposta3 = ListaEncadeadaResposta.procura(2);
Pergunta6.resposta4 = ListaEncadeadaResposta.procura(3);
Pergunta6.resposta5 = ListaEncadeadaResposta.procura(4);
Pergunta6.respostaCerta = 2;

FilaPerguntas.enqueue(Pergunta7 = new Pergunta());
Pergunta7.questao = "7 - Aonde o Anel deve ser destruído?";
ListaEncadeadaResposta.adiciona(0, "No vulcão de Minastivit");
ListaEncadeadaResposta.adiciona(1, "Nas ruínas de Moria");
ListaEncadeadaResposta.adiciona(2, "No fogo de Mordor"); //CERTA
ListaEncadeadaResposta.adiciona(3, "Em Valfenda");
ListaEncadeadaResposta.adiciona(4, "Em gondor");
Pergunta7.resposta1 = ListaEncadeadaResposta.procura(0);
Pergunta7.resposta2 = ListaEncadeadaResposta.procura(1);
Pergunta7.resposta3 = ListaEncadeadaResposta.procura(2);
Pergunta7.resposta4 = ListaEncadeadaResposta.procura(3);
Pergunta7.resposta5 = ListaEncadeadaResposta.procura(4);
Pergunta7.respostaCerta = 3;

FilaPerguntas.enqueue(Pergunta8 = new Pergunta());
Pergunta8.questao = "8 - Quem estava controlando Théoden, o rei de Rohan?";
ListaEncadeadaResposta.adiciona(0, "Sauron");
ListaEncadeadaResposta.adiciona(1, "Gandalf");
ListaEncadeadaResposta.adiciona(2, "Frodo");
ListaEncadeadaResposta.adiciona(3, "Denethor");
ListaEncadeadaResposta.adiciona(4, "Saruman"); //CERTA
Pergunta8.resposta1 = ListaEncadeadaResposta.procura(0);
Pergunta8.resposta2 = ListaEncadeadaResposta.procura(1);
Pergunta8.resposta3 = ListaEncadeadaResposta.procura(2);
Pergunta8.resposta4 = ListaEncadeadaResposta.procura(3);
Pergunta8.resposta5 = ListaEncadeadaResposta.procura(4);
Pergunta8.respostaCerta = 5;

FilaPerguntas.enqueue(Pergunta9 = new Pergunta());
Pergunta9.questao = "9 - Qual é o nome da cidade élfica onde a \"Sociedade do Anel\" é formada?";
ListaEncadeadaResposta.adiciona(0, "Walfenda");
ListaEncadeadaResposta.adiciona(1, "Walvenda"); 
ListaEncadeadaResposta.adiciona(2, "Valvenda");
ListaEncadeadaResposta.adiciona(3, "Valhenda");
ListaEncadeadaResposta.adiciona(4, "Valfenda"); //CERTA
Pergunta9.resposta1 = ListaEncadeadaResposta.procura(0);
Pergunta9.resposta2 = ListaEncadeadaResposta.procura(1);
Pergunta9.resposta3 = ListaEncadeadaResposta.procura(2);
Pergunta9.resposta4 = ListaEncadeadaResposta.procura(3);
Pergunta9.resposta5 = ListaEncadeadaResposta.procura(4);
Pergunta9.respostaCerta = 5;

FilaPerguntas.enqueue(Pergunta10 = new Pergunta());
Pergunta10.questao = "10 - Qual o livro que Bilbo escreveu antes de dar para Frodo ?";
ListaEncadeadaResposta.adiciona(0, "O Hobbit");
ListaEncadeadaResposta.adiciona(1, "O Senhor dos Anéis - O Inicio");
ListaEncadeadaResposta.adiciona(2, "Lá e De Volta Outra Vez"); //CERTA
ListaEncadeadaResposta.adiciona(3, "Bilbo - O Hobbit");
ListaEncadeadaResposta.adiciona(4, "Lá e De Volta - O Hobbit");
Pergunta10.resposta1 = ListaEncadeadaResposta.procura(0);
Pergunta10.resposta2 = ListaEncadeadaResposta.procura(1);
Pergunta10.resposta3 = ListaEncadeadaResposta.procura(2);
Pergunta10.resposta4 = ListaEncadeadaResposta.procura(3);
Pergunta10.resposta5 = ListaEncadeadaResposta.procura(4);
Pergunta10.respostaCerta = 3;
