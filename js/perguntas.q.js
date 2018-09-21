function Instrucoes() {
    document.getElementById("panel").style.display = "block";
}

function ShowBox() {
    document.getElementById("box_pergunta").style.display = "flex",
    document.getElementById("box_recompensa").style.display = "flex";
}

var FilaPerguntas = new Queue();


if (FilaPerguntas.size() == 0) {
    var btnStart = document.getElementById('inicio');
    btnStart.innerHTML = "Iniciar Quizz";
    Perguntas();
}
else {
    var btnStart = document.getElementById('inicio');
    btnStart.innerHTML = 'Próximo';
}

function alert(){
    console.log("teste");
}

function Perguntas() {

//FilaPerguntas.dequeue(Perguntas1);
//    while (FilaPerguntas.size() < 10) {
//
//    }

    Perguntas1 = 
        "<h2>1 - Qual o nome do Jardineiro de Frodo?</h2>"+
        "<label class='errada'><input type='radio' id='1' value='Freddy' name='q' /> Freddy</label>"+
        "<label class='certa'><input type='radio' id='2' value='Sam CERTA' name='q' /> Sam CERTA</label>"+
        "<label class='errada'><input type='radio' id='3' value='Cacco' name='q' /> Cacco</label>"+
        "<label class='errada'><input type='radio' id='4' value='Gimli' name='q' /> Gimli</label>"+
        "<label class='errada'><input type='radio' id='5' value='Gandalf' name='q' /> Gandalf</label>";
    
    Perguntas2 = 
        "<h2>2-O Príncipe Légolas é interpretado por quem?</h2>"+
        "<label class='errada'><input type='radio' id='1' value='Freddy' name='p1' /> Sean Bean</label>"+
        "<label class='errada'><input type='radio' id='2' value='Sam CERTA' name='p1' /> James Wood</label>"+
        "<label class='errada'><input type='radio' id='3' value='Cacco' name='p1' /> Tom Cruise</label>"+
        "<label class='certa'><input type='radio' id='4' value='Gimli' name='p1' /> Orlando Bloom CERTA</label>"+
        "<label class='errada'><input type='radio' id='5' value='Gandalf' 'name='p1' /> Karl Urban</label>";
    
    Perguntas3 = 
        "<h2>3-Qual o nome do Anão que estava dentro da Sociedade do Anel?</h2>"+
        "<label class='errada'><input type='radio' id='1' value='Freddy' name='p1' /> Gandalf</label>"+
        "<label class='certa'><input type='radio' id='2' value='Sam CERTA' name='p1' /> Gimli CERTA</label>"+
        "<label class='errada'><input type='radio' id='3' value='Cacco' name='p1' /> Aragorn</label>"+
        "<label class='errada'><input type='radio' id='4' value='Gimli' name='p1' /> Elrond</label>"+
        "<label class='errada'><input type='radio' id='5' value='Gandalf' 'name='p1' /> Bilbo</label>";
    
    Perguntas4 = 
        "<h2>4-Quem depositou o mal dentro do anel?</h2>"+
        "<label class='certa'><input type='radio' id='1' value='Freddy' name='p1' /> Sauron CERTA</label>"+
        "<label class='errada'><input type='radio' id='2' value='Sam CERTA' name='p1' /> Gimli</label>"+
        "<label class='errada'><input type='radio' id='3' value='Cacco' name='p1' /> Aragorn</label>"+
        "<label class='errada'><input type='radio' id='4' value='Gimli' name='p1' /> Saruman</label>"+
        "<label class='errada'><input type='radio' id='5' value='Gandalf' 'name='p1' /> Freddy</label>";
    
    Perguntas5 = 
        "<h2>5-Qual o nome dos hobbits que adoravam fazer travessuras?</h2>"+
        "<label class='errada'><input type='radio' id='1' value='Freddy' name='p1' /> Freddy e Jacob</label>"+
        "<label class='errada'><input type='radio' id='2' value='Sam CERTA' name='p1' /> Gimli e Guimli</label>"+
        "<label class='certa'><input type='radio' id='3' value='Cacco' name='p1' /> Merry e Pippin CERTA</label>"+
        "<label class='errada'><input type='radio' id='4' value='Gimli' name='p1' /> Cacco e Freddy</label>"+
        "<label class='errada'><input type='radio' id='5' value='Gandalf' 'name='p1' /> Jacob e Merry</label>";
    
    Perguntas6 = 
        "<h2>6-De quem Frodo conseguiu o anel?</h2>"+
        "<label class='errada'><input type='radio' id='1' value='Freddy' name='p1' /> Seu avô</label>"+
        "<label class='certa'><input type='radio' id='2' value='Sam CERTA' name='p1' /> Seu tio CERTA</label>"+
        "<label class='errada'><input type='radio' id='3' value='Cacco' name='p1' /> Seu padrinho</label>"+
        "<label class='errada'><input type='radio' id='4' value='Gimli' name='p1' /> Seu irmão</label>"+
        "<label class='errada'><input type='radio' id='5' value='Gandalf' 'name='p1' /> Seu amigo</label>";
    
    Perguntas7 = 
        "<h2>7-Aonde o Anel deve ser destruído?</h2>"+
        "<label class='errada'><input type='radio' id='1' value='Freddy' name='p1' /> No vulcão de Minastivit</label>"+
        "<label class='errada'><input type='radio' id='2' value='Sam CERTA' name='p1' /> Nas ruínas de Moria</label>"+
        "<label class='certa'><input type='radio' id='3' value='Cacco' name='p1' /> No fogo de Mordor CERTA</label>"+
        "<label class='errada'><input type='radio' id='4' value='Gimli' name='p1' /> Em Valfenda</label>"+
        "<label class='errada'><input type='radio' id='5' value='Gandalf' 'name='p1' /> Em gondor</label>";
    
    Perguntas8 = 
        "<h2>8-Quem estava controlando Théoden, o rei de Rohan?</h2>"+
        "<label class='errada'><input type='radio' id='1' value='Freddy' name='p1' /> Sauron</label>"+
        "<label class='errada'><input type='radio' id='2' value='Sam CERTA' name='p1' /> Gandalf</label>"+
        "<label class='errada'><input type='radio' id='3' value='Cacco' name='p1' /> Frodo</label>"+
        "<label class='errada'><input type='radio' id='4' value='Gimli' name='p1' /> Denethor</label>"+
        "<label class='certa'><input type='radio' id='5' value='Gandalf' 'name='p1' /> Saruman CERTA</label>";
    
    Perguntas9 = 
        "<h2>9-Qual é o nome da cidade élfica onde a \"Sociedade do Anel\" é formada?</h2>"+
        "<label class='errada'><input type='radio' id='1' value='Freddy' name='p1' /> Walfenda</label>"+
        "<label class='errada'><input type='radio' id='2' value='Sam CERTA' name='p1' /> Walvenda</label>"+
        "<label class='errada'><input type='radio' id='3' value='Cacco' name='p1' /> Valvenda</label>"+
        "<label class='errada'><input type='radio' id='4' value='Gimli' name='p1' /> Valhenda</label>"+
        "<label class='certa'><input type='radio' id='5' value='Gandalf' 'name='p1' /> Valfenda CERTA</label>";
    
    Perguntas9 = 
        "<h2>10- Qual o livro que Bilbo escreveu antes de dar para Frodo ?</h2>"+
        "<label class='errada'><input type='radio' id='1' value='Freddy' name='p1' /> O Hobbit</label>"+
        "<label class='errada'><input type='radio' id='2' value='Sam CERTA' name='p1' /> O Senhor dos Anéis - O Inicio</label>"+
        "<label class='certa'><input type='radio' id='3' value='Cacco' name='p1' /> Lá e De Volta Outra Vez CERTA</label>"+
        "<label class='errada'><input type='radio' id='4' value='Gimli' name='p1' /> Bilbo - O Hobbit</label>"+
        "<label class='errada'><input type='radio' id='5' value='Gandalf' 'name='p1' /> Lá e De Volta - O Hobbit</label>";
    
    
    document.getElementById('perguntas').innerHTML = Perguntas1;
}

console.log(FilaPerguntas.size());






// fila_perguntas = new Queue();

// function next_question(){
//     // var question_id = document.getElementsByClassName('next_question');

//     document.getElementById("box_pergunta").style.display = "block";
//     // console.log(question_id);
// }



// function playInArea(videoId) {
//     var playInArea = document.getElementById('playInArea');
//     var iFrame = document.createElement('iframe');
//     iFrame.setAttribute('id', 'ytplayer');
//     iFrame.setAttribute('type', 'text/html');
//     iFrame.setAttribute('width', 340);
//     iFrame.setAttribute('height', 220);
//     iFrame.setAttribute('src',
//         'http://www.youtube.com/embed/' +
//         videoId +
//         "?autoplay=0");
//     iFrame.setAttribute('frameborder', 0);
//     fila.enqueue(videoId);
//     playInArea.appendChild(iFrame);
// }
// function playInArea2(videoId) {
//     var playInArea2 = document.getElementById('playInArea2');
//     playInArea2.innerHTML = '';
//     var iFrame = document.createElement('iframe');
//     iFrame.setAttribute('id', 'ytplayer2');
//     iFrame.setAttribute('type', 'text/html');
//     iFrame.setAttribute('width', 740);
//     iFrame.setAttribute('height', 420);
//     iFrame.setAttribute('src',
//         'http://www.youtube.com/embed/' +
//         videoId +
//         "?autoplay=1");
//     iFrame.setAttribute('frameborder', 0);
//     fila.enqueue(videoId);
//     playInArea2.appendChild(iFrame);
// }
// function getLink() {
//     var linka = document.getElementById('link');
//     var videoId = getVideoId(linka.value);
//     playInArea(videoId);
// }
// function play() {
//     var primeira = fila.front();
//     fila.dequeue();
//     playInArea2(primeira);
//     console.log(primeira);
// }
// function getVideoId(url) {
//     return url.substring(
//         url.indexOf("=") + 1,
//         url.length);
// }