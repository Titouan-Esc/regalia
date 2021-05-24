const animation = bodymovin.loadAnimation({
  container: document.getElementById("anime"),
  renderer: "svg",
  autoplay: true,
  loop: false,
  path: "data.json",
});

// ! Js pour le texte animé
const resolver = {
  resolve: function resolve(options, callback) {
    // The string to resolve
    const resolveString = options.resolveString || options.element.getAttribute('data-target-resolver');
    const combinedOptions = Object.assign({}, options, {resolveString: resolveString});
    
    function getRandomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    
    function randomCharacter(characters) {
      return characters[getRandomInteger(0, characters.length - 1)];
    };
    
    function doRandomiserEffect(options, callback) {
      const characters = options.characters;
      const timeout = options.timeout;
      const element = options.element;
      const partialString = options.partialString;

      let iterations = options.iterations;

      setTimeout(() => {
        if (iterations >= 0) {
          const nextOptions = Object.assign({}, options, {iterations: iterations - 1});

          // Ensures partialString without the random character as the final state.
          if (iterations === 0) {
            element.textContent = partialString;
          } else {
            // Replaces the last character of partialString with a random character
            element.textContent = partialString.substring(0, partialString.length - 1) + randomCharacter(characters);
          }

          doRandomiserEffect(nextOptions, callback)
        } else if (typeof callback === "function") {
          callback(); 
        }
      }, options.timeout);
    };
    
    function doResolverEffect(options, callback) {
      const resolveString = options.resolveString;
      const characters = options.characters;
      const offset = options.offset;
      const partialString = resolveString.substring(0, offset);
      const combinedOptions = Object.assign({}, options, {partialString: partialString});

      doRandomiserEffect(combinedOptions, () => {
        const nextOptions = Object.assign({}, options, {offset: offset + 1});

        if (offset <= resolveString.length) {
          doResolverEffect(nextOptions, callback);
        } else if (typeof callback === "function") {
          callback();
        }
      });
    };

    doResolverEffect(combinedOptions, callback);
  } 
}


/* Some GLaDOS quotes from Portal 2 chapter 9: The Part Where He Kills You
 * Source: http://theportalwiki.com/wiki/GLaDOS_voice_lines#Chapter_9:_The_Part_Where_He_Kills_You
 */
const strings = [
  'Bienvenue je suis Titouan Escorneboueu',
  'Bienvenue dans la Regalia',
  'Veuillez composer le code pour entrer dans la Regalia',

];

let counter = 0;

const options = {
  // Initial position
  offset: 0,
  // Timeout between each random character
  timeout: 5,
  // Number of random characters to show
  iterations: 10,
  // Random characters to pick from
  characters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'x', '#', '%', '&', '-', '+', '_', '?', '/', '\\', '='],
  // String to resolve
  resolveString: strings[counter],
  // The element
  element: document.querySelector('[data-target-resolver]')
}

// Callback function when resolve completes
function callback() {
  setTimeout(() => {
    counter ++;
    
    if (counter >= strings.length) {
      counter = 0;
    }
    
    let nextOptions = Object.assign({}, options, {resolveString: strings[counter]});
    resolver.resolve(nextOptions, callback);
  }, 3000);
}


resolver.resolve(options, callback);

// ? Mesure le temps pour l'apparition du texte

function text() {
  document.querySelector('[data-target-resolver]').style.display = 'inline';
}

setTimeout(() => {
  text();
}, 8000);

function text2() {
  document.querySelector('[data-target-resolver]').style.display = 'none';
}

setTimeout(() => {
  text2();
}, 19000);



// ! Script pour le code qui affiche mon input

function afficherInput() {
  document.getElementById('code').style.display = 'inline';
}

const inpt1 = document.querySelector('#input1').value = '18';
const inpt2 = document.querySelector('#input2').value = '5';
const inpt3 = document.querySelector('#input3').value = '7';
const inpt4 = document.querySelector('#input4').value = '1';
const inpt5 = document.querySelector('#input5').value = '12';
const inpt6 = document.querySelector('#input6').value = '9';
const inpt7 = document.querySelector('#input7').value = '1';

const result = {inpt1, inpt2, inpt3, inpt4, inpt5, inpt6, inpt7};

console.log(Object.values(result));
  
function handleInput(e) {
  e.preventDefault;
  
  if(result == ['18', '5', '7', '1', '12', '9', '1']) {
    console.log('ok');
    const ifrm = document.createAttribute('iframe');
    ifrm.setAttribute('src', 'https://www.youtube.com/watch?v=XsD_tty6Hco');
    ifrm.style.width = '560px';
    ifrm.style.height = '315px';
    document.body.appendChild(ifrm);
  }else {
    // setTimeout(() => {
    //   alert("Vous n'avez entré aucun code");
    // }, 29000);
  }
}






setTimeout(() => {
  afficherInput();
}, 19000);