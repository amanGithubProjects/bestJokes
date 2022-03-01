


const jokes = document.querySelector("#joke");
const jokesBtn = document.querySelector("#jokeBtn");

const generateJoke = async () =>{

    try{

        const  setHeader = {
             headers: {
               Accept : "application/json" 
             }
         }
     
      const res = await fetch("https://icanhazdadjoke.com/", setHeader);
      const data = await res.json();
      jokes.innerHTML = data.joke;
      
    }catch(err){
        console.log(err);
    }
}

jokesBtn.addEventListener("click", generateJoke);
generateJoke();

// const jokes   = document.querySelector("#joke");
// const jokesBtn = document.querySelector("#jokeBtn");


// const generateJokes = async() =>{

//     try{

//         const setHeader = {
//             headers: {
//                 accept: "application/json"
//             }
//         }
    
//        const res = await fetch("https://icanhazdadjoke.com", setHeader );
//        const data = await res.json();
//        jokes.innerHTML = data.joke;
        
//     }catch(err){
//         console.log(err);
//     };
// };

// jokesBtn.addEventListener("click", generateJokes);
// generateJokes();


