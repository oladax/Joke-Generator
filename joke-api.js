//https://superheroapi.com/api/access-token/character-id/appearance

const jokeDiv = document.getElementById('Joke')
//const Btn = document.getElementById('button')
const url =  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,explicit&type=single";


function acquireJoke() {
    // remove content-fade class
   // jokeDiv.classList.remove("content-fade");
    // fetch joke from the API
    fetch(url)
      .then(Response => Response.json())
      .then(json => {
        jokeDiv.innerHTML = `${json.joke}`;
        // add the content-fade class
       // jokeDiv.classList.add("content-fade");
        
        
const jokespeech = (jokeDiv.innerHTML)
var speech = new SpeechSynthesisUtterance();

    // defing speech properties
    speech.lang =  "en-NG";
    speech.text = jokespeech;
    speech.volume = 30;
    speech.pitch = 1;
    speech.rate = 1;


    window.speechSynthesis.speak(speech)

      });
    
  }

  //Btn.addEventListener("click", acquireJoke);

  const btn = () => {
    acquireJoke();
  }


  //speech function
  function speech (){
    const jokespeech = (jokeDiv.innerHTML)
    var speech = new SpeechSynthesisUtterance();

    // defing speech properties
    speech.lang =  "en-NG";
    speech.text = jokespeech;
    speech.volume = 30;
    speech.pitch = 1;
    speech.rate = 1;


    window.speechSynthesis.speak(speech)
  }


  
