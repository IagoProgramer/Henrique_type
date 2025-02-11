// typing.js

const texts = {
  pt: {
    universal: {
      easy: [
        "cadeira mesa livro papel caneta telefone relógio porta janela cama almofada tapete quadro ",
        "garfo prato copo água suco café chá leite açúcar sal pimenta pão manteiga queijo presunto ",
        "sapato meia calça camisa blusa casaco chapéu luva cinto bolsa carteira relógio óculos ",
        "cachorro gato peixe pássaro coelho hamster papagaio tartaruga porquinho rato girafa leão ",
        "cozinha sala quarto banheiro garagem jardim quintal varanda sacada escritório lavanderia ",
        "escola hospital mercado banco igreja praça parque shopping rua avenida cinema teatro museu ",
        "banana maçã laranja uva pera manga abacaxi morango melancia kiwi mamão pêssego ameixa ",
        "computador teclado mouse monitor impressora scanner notebook tablet celular carregador ",
        "pasta arquivo documento planilha relatório contrato proposta projeto agenda calendário ",
        "televisão rádio micro-ondas geladeira fogão máquina lava-louça aspirador ventilador "
      ]
    },
    javascript: {
      easy: [
        "array objeto string número função método classe evento loop código retorno escopo dados ",
        "botão formulário campo texto lista menu tabela modal janela interface layout estrutura ",
        "variável constante escopo local global função regex expressão módulo componente estado ",
        "elemento página estilo script módulo plugin cache api rota cliente servidor banco dados ",
        "validação teste debug erro sucesso falha retorno valor referência objeto instância tipo "
      ]
    },
    python: {
      easy: [
        "lista tupla dicionário conjunto classe objeto método função decorador lambda yield map ",
        "módulo pacote biblioteca framework teste unitário debug erro exceção tratamento valor ",
        "variável constante global local escopo retorno parâmetro argumento função recursiva ",
        "string número inteiro decimal booleano nulo lista arquivo texto binário módulo classe ",
        "iterador gerador coleção sequência chave valor índice slice fatia range tempo data "
      ]
    },
    java: {
      easy: [
        "classe objeto método construtor interface herança polimorfismo encapsulamento abstrato ",
        "variável constante tipo primitivo referência array lista conjunto mapa fila pilha árvore ",
        "público privado protegido estático final abstrato sincronizado volátil transiente nativo ",
        "exceção erro tratamento recurso arquivo texto binário fluxo thread processo conexão rede ",
        "banco dados consulta inserção atualização remoção transação commits índice chave valor "
      ]
    },
    csharp: {
      easy: [
        "classe objeto método propriedade evento delegado interface genérico coleção lista array ",
        "string inteiro decimal booleano data tempo nulo referência valor tipo estrutura enum ",
        "público privado protegido interno selado virtual abstrato sobrescrito novo base this ",
        "usando namespace classe estrutura interface enumeração delegado evento atributo linq ",
        "coleção lista dicionário conjunto fila pilha árvore grafo matriz vetor array dinâmico "
      ]
    },
    htmlcss: {
      easy: [
        "div span meta link corpo cabeça principal raiz seção artigo navegação rodapé título ",
        "classe identificador estilo fonte cor fundo borda margem preenchimento espaçamento flex ",
        "grade layout responsivo móvel desktop tablet coluna linha container wrapper item bloco ",
        "animação transição transformação rotação escala posição absoluta relativa fixa fluida ",
        "formulário entrada botão caixa seleção opção grupo lista menu navegação modal camada "
      ]
    }
  },
  en: {
    universal: {
      easy: [
        "chair table book paper pencil phone clock door window bed pillow carpet picture frame ",
        "fork plate glass water juice coffee tea milk sugar salt pepper bread butter cheese ham ",
        "shoes socks pants shirt blouse jacket hat glove belt bag wallet watch glasses clothes ",
        "dog cat fish bird rabbit hamster parrot turtle guinea pig mouse giraffe lion zebra ",
        "kitchen living room bedroom bathroom garage garden yard balcony porch office laundry ",
        "school hospital market bank church square park mall street avenue cinema theater museum ",
        "computer keyboard mouse screen printer scanner laptop tablet phone charger camera light ",
        "folder file document spreadsheet report contract proposal project agenda calendar time ",
        "television radio microwave fridge stove dishwasher vacuum fan heater air conditioner ",
        "desk chair lamp shelf cabinet drawer mirror clock picture frame curtain blind shade "
      ]
    },
    javascript: {
      easy: [
        "array object string number function method class event loop code return scope data set ",
        "button form field text list menu table modal window interface layout structure design ",
        "variable constant scope local global function regex expression module component state ",
        "element page style script module plugin cache api route client server database query ",
        "validation test debug error success failure return value reference object instance type "
      ]
    },
    python: {
      easy: [
        "list tuple dictionary set class object method function decorator lambda yield map sort ",
        "module package library framework test unit debug error exception handling value type ",
        "variable constant global local scope return parameter argument function recursive loop ",
        "string number integer decimal boolean null list file text binary module class method ",
        "iterator generator collection sequence key value index slice range time date format "
      ]
    },
    java: {
      easy: [
        "class object method constructor interface inheritance polymorphism encapsulation code ",
        "variable constant primitive reference array list set map queue stack tree graph node ",
        "public private protected static final abstract synchronized volatile transient native ",
        "exception error handling resource file text binary stream thread process connection ",
        "database query insert update delete transaction commit index key value table record "
      ]
    },
    csharp: {
      easy: [
        "class object method property event delegate interface generic collection list array ",
        "string integer decimal boolean date time null reference value type struct enum case ",
        "public private protected internal sealed virtual abstract override new base this var ",
        "using namespace class struct interface enumeration delegate event attribute linq code ",
        "collection list dictionary set queue stack tree graph matrix vector array dynamic "
      ]
    },
    htmlcss: {
      easy: [
        "div span meta link body head main root section article navigation footer header title ",
        "class identifier style font color background border margin padding spacing flex grid ",
        "layout responsive mobile desktop tablet column row container wrapper item block flow ",
        "animation transition transform rotate scale position absolute relative fixed fluid box ",
        "form input button checkbox select option group list menu navigation modal layer page "
      ]
    }
  }
};

let currentMode = 'universal';
let currentText = "";
let currentIndex = 0;
let startTime = null;
let timerInterval = null;
let timeLeft = 60;
let mistakes = 0;
let totalChars = 0;
let isGameActive = false;
let textBuffer = "";

function getNextText(language) {
  const mode = currentMode.toLowerCase().replace(/[/#]/g, '');
  const modeTexts = texts[language][mode];
  if (!modeTexts) {
    console.error(`No texts found for language: ${language}, mode: ${mode}`);
    return texts[language]['universal']['easy'][0];
  }
  const textList = modeTexts['easy']; 
  return textList[Math.floor(Math.random() * textList.length)];
}

function extendText() {
  const language = document.querySelector('.language-selector').value;
  textBuffer += getNextText(language);
  currentText = textBuffer;
}

function initGame() {
  const language = document.querySelector('.language-selector').value;
  textBuffer = getNextText(language);
  currentText = textBuffer;
  currentIndex = 0;
  mistakes = 0;
  totalChars = 0;
  timeLeft = 60;
  isGameActive = true;
  startTime = null;
  clearInterval(timerInterval);
  
  displayText();
  updateTimer();
}

function displayText() {
  if (currentIndex > currentText.length - 50) {
    extendText();
  }
  
  const visibleText = currentText.substring(Math.max(0, currentIndex - 50), currentIndex + 50);
  document.querySelector('.text-display').innerHTML = visibleText.split('').map((char, index) => {
    const absoluteIndex = Math.max(0, currentIndex - 50) + index;
    let className = 'char';
    if (absoluteIndex < currentIndex) {
      className += ' correct';
    } else if (absoluteIndex === currentIndex) {
      className += ' current';
    }
    return `<span class="${className}">${char}</span>`;
  }).join('');
}

function updateStats() {
  if (!startTime) return;
  
  const timeElapsed = (Date.now() - startTime) / 1000;
  const words = totalChars / 5;
  const wpm = Math.round((words / timeElapsed) * 60);
  const accuracy = Math.round(((totalChars - mistakes) / totalChars) * 100) || 100;

  document.getElementById('wpm').textContent = wpm;
  document.getElementById('accuracy').textContent = `${accuracy}%`;
}

function startTimer() {
  if (timerInterval) return;
  
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

function updateTimer() {
  document.querySelector('.timer').textContent = timeLeft;
  document.getElementById('time').textContent = `${timeLeft}s`;
}

function endGame() {
  isGameActive = false;
  clearInterval(timerInterval);
  updateStats();
}

document.addEventListener('keydown', (e) => {
  if (!isGameActive) return;
  
  if (!startTime && e.key.length === 1) {
    startTime = Date.now();
    startTimer();
  }

  const expectedChar = currentText[currentIndex];
  
  if (e.key === expectedChar) {
    totalChars++;
    currentIndex++;
  } else if (e.key.length === 1) {
    mistakes++;
  }

  displayText();
  updateStats();
});

document.querySelector('.language-selector').addEventListener('change', initGame);
document.querySelector('.restart-btn').addEventListener('click', initGame);

document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentMode = btn.textContent.toLowerCase().replace(/[/#]/g, '');
    initGame();
  });
});

function addSuccessAnimation() {
  // Implement success animation logic here
}

initGame();