const joke = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";


let getjoke = ()=>{
    joke.classList.remove('flat')
    fetch(url)
    .then(data => data.json())
    .then(item => {
        joke.textContent = `${item.joke}`;
        joke.classList.add('flat')
    });
    
}

btn.addEventListener("click",getjoke);