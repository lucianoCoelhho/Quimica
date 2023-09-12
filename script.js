var acidoCarboxilico = 'Ácido Carboxílico: ' +
'Os ácidos carboxílicos são compostos orgânicos que contêm o grupo funcional carboxila (-COOH).' +
'São conhecidos por sua acidez e podem formar ligações de hidrogênio, tornando-os importantes em bioquímica.';

var acidoMetano = 'Ácido Metanóico (Fórmico): ' +
'O ácido metanóico, também chamado de ácido fórmico, é o ácido carboxílico mais simples, com a fórmula HCOOH.' +
'É encontrado em picadas de formigas e pode ser usado na produção de produtos químicos industriais.';

var alcool = 'Álcool: ' +
'Os álcoois são compostos que possuem o grupo funcional hidroxila (-OH).' +
'São amplamente utilizados em produtos de consumo, como bebidas alcoólicas e produtos farmacêuticos.';

var aldeido = 'Aldeído: ' +
'Os aldeídos são compostos orgânicos que contêm o grupo funcional aldeído (-CHO).' +
'Muitos aldeídos têm aromas agradáveis e são usados na indústria de fragrâncias e aromas.'

var amida = 'Amida: ' +
'As amidas são compostos que possuem o grupo funcional amida (-CONH2).' +
'São encontradas em proteínas e em muitos produtos químicos sintéticos, incluindo medicamentos.';

var amino = 'Amino: ' +
'Os compostos com grupos funcionais amino (-NH2) são a base das proteínas e aminoácidos.' +
'São fundamentais para a vida e desempenham papéis essenciais na biologia.';

var anidridoAcetico = 'Anidrido Acético: ' +
'O anidrido acético é um composto orgânico que contém o grupo funcional anidrido (-C(O)OC(O)-).' +
'É usado na produção de plásticos e produtos farmacêuticos.';

var cetona = 'Cetona: ' +
'As cetonas são compostos que possuem o grupo funcional cetona (C=O) ligado a um átomo de carbono.' +
'Muitas cetonas são usadas como solventes e na produção de resinas.';

var ester = 'Éster: ' +
'Os ésteres são compostos com o grupo funcional éster (-COO-).' +
'Eles são responsáveis pelos sabores e aromas em muitos alimentos e também são usados ​​em perfumaria.';

var eter = 'Éter: ' +
'Os éteres são compostos orgânicos que contêm um átomo de oxigênio ligado a dois grupos alquil (-O-). ' +
'São usados como solventes e em síntese orgânica.';

var gruposFuncionais = [acidoCarboxilico, acidoMetano, alcool, aldeido, amida, amino, anidridoAcetico, cetona, ester, eter];
var j = 1;

function ExibeExplicacao(repeticao = false){
    if(repeticao){j = 1}
    var botoes = document.getElementsByClassName('btn');
    for(var i = 0; i < botoes.length; i++){
        botoes[i].style.display = 'none';
    }

    debugger
    var paragrafo = document.createElement('p');
    var texto = document.createTextNode(acidoCarboxilico);
    paragrafo.appendChild(texto)
    paragrafo.id = "textoExplicacao"
    var tela = document.getElementById('tela');
    var botaoProximo = document.createElement('button')
    var proximo = document.createTextNode('Próximo');
    botaoProximo.appendChild(proximo)
    botaoProximo.id = 'botaoProximo'
    botaoProximo.addEventListener("click", function(){
        ProximaExplicacao(paragrafo, j)
        j++;
    })
    tela.appendChild(paragrafo)
    tela.appendChild(botaoProximo)
}

function ProximaExplicacao(paragrafo, j){
    var texto = document.createTextNode(gruposFuncionais[j]);
    paragrafo.innerHTML = '';
    paragrafo.appendChild(texto);
    if(j == 10)
    {
        debugger
        document.getElementById('tela').innerText = ''
        for(var k = 0;k < 2; k++)
        {
            var tela = document.getElementById('tela');
            var botoes = document.createElement('button')            
            if(k == 0)
            {
                var proximo = document.createTextNode('Iniciar Jogo');
                botoes.appendChild(proximo)
                botoes.className = 'btn'
                botoes.addEventListener("click", function(){
                    alert('top');
                })
                tela.appendChild(botoes)
            }else
            {
                var proximo = document.createTextNode('O que são grupos funcionais?');
                botoes.appendChild(proximo)
                botoes.className = 'btn'
                botoes.addEventListener("click", function(){
                    ExibeExplicacao(true)
                })
                tela.appendChild(botoes)
            }
        }
        j = 0;
    }
}    


function ExibeJogo(){
    
    var botoes = document.getElementsByClassName('btn');
    for(var i = 0; i < botoes.length; i++){
        botoes[i].style.display = 'none';
    }

       
        // Exibir o game-container
        var gameContainer = document.getElementById('game-container');
        gameContainer.style.display = 'block';

}

        
const molecules = document.querySelectorAll('.molecule');
const functionalGroups = document.querySelectorAll('.functional-group');

const imageList = [

    'ester.png',
    'amida.png',
    'eter.png',
    'alcool.png',
    'amino.png',
    'cetona.png',
    'aldeido.png',
    'aciCarbox.png',
    'anidritoAcetico.png',
    //'aciMetano.png',
];

let imagesDropped = 0;
const imagesToDrop = 3;
const functionsToDrop = 3; // Define quantas funções serão mostradas por rodada


const matchingPairs = [
    { image: 'ester.png', function: 'function1' },
    { image: 'amida.png', function: 'function2' },
    { image: 'eter.png', function: 'function3' },
    { image: 'alcool.png', function: 'function4' },
    { image: 'amino.png', function: 'function5' },
    { image: 'cetona.png', function: 'function6' },
    { image: 'aldeido.png', function: 'function7' },
    { image: 'aciCarbox.png', function: 'function8' },
    { image: 'anidritoAcetico.png', function: 'function9' },  
    //{ image: 'aciMetano.png', function: 'function10' }, 
];

// Embaralhe os pares correspondentes
shuffleArray(matchingPairs);

function initializeGame() {
    molecules.forEach(molecule => {
        molecule.addEventListener('dragover', dragOver);
        molecule.addEventListener('drop', drop);
        molecule.style.display = 'none';
    });
    functionalGroups.forEach(group => {
        group.addEventListener('dragstart', dragStart);
    });
    
    prepareNewRound();
}

function startNewRound() {
// Oculta todas as imagens
    molecules.forEach(molecule => {
        molecule.style.display = 'none';
        molecule.classList.remove('dropped');
    });

    // Oculta todas as funções
    functionalGroups.forEach(func => {
        func.style.display = 'none';
        func.classList.remove('dropped');
    });

    // Mostra apenas três funções e suas imagens correspondentes
    for (let i = imagesDropped; i < imagesDropped + functionsToDrop; i++) {
        if (matchingPairs[i]) {
            showFunctionAndImage(i);
        }
    }   
}
function showFunctionAndImage(index) {
    const matchingFunction = functionalGroups[index];
    matchingFunction.style.display = 'block';
    matchingFunction.classList.add('dropped');
    const matchingPair = matchingPairs[index];
    const imageIndex = imageList.indexOf(matchingPair.image);
    molecules[imageIndex].style.display = 'block';
    molecules[imageIndex].classList.add('dropped');
}

function prepareNewRound() {
    if (imagesDropped < matchingPairs.length) {
        startNewRound();
    } else {
        // Jogo concluído, faça algo aqui
        imagesDropped = 0; // Reinicie o contador para a próxima vez que o jogo for iniciado
    }
}

function dragOver(event) {
    event.preventDefault();
}

let imagesAnswered = 0; // Variável para rastrear o número de imagens respondidas

function drop(event) {
    event.preventDefault();
    if (event.target.classList.contains('molecule') || event.target.classList.contains('imagem')) {
        checkMatch(event.target);
    }
}

function checkMatch(molecule) {
    const groupId = functionalGroupBeingDraggedId;
    const isMatch = molecule.parentElement.classList.contains(groupId);
    molecule.parentElement.style.backgroundColor = isMatch ? 'green' : 'red';

}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos de posição
    }
}

const skipButton = document.getElementById('skipButton');
skipButton.addEventListener('click', skipRound);

function skipRound() {
    // Avance para a próxima rodada, pulando a partida atual.
    imagesDropped += imagesToDrop; // Avance o número de imagens a serem soltas.
    prepareNewRound();
}

let functionalGroupBeingDraggedId;
function dragStart(event) {
    functionalGroupBeingDraggedId = event.target.id;
    event.dataTransfer.setData('text/plain', '');
}

window.onload = initializeGame;



    


