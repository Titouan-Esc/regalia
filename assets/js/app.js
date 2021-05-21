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
    
    console.log(counter);
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

const code1 = document.getElementsByClassName('input1');
const code2 = document.getElementsByClassName('input2');
const code3 = document.getElementsByClassName('input3');
const code4 = document.getElementsByClassName('input4');
const code5 = document.getElementsByClassName('input5');
const code6 = document.getElementsByClassName('input6');
const code7 = document.getElementsByClassName('input7');

const result = `${code1} ${code2} ${code3} ${code4} ${code5} ${code6} ${code7}`;

function chiffreCode(){
  if(result == `18 5 7 1 12 9 1`) {
    document.write

  }else{
    alert("Vous n'avez pas rentrer de code");
  }
}


setTimeout(() => {
  afficherInput();
}, 19000);