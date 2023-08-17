const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");


const apikey = "09krLQnvlcNbhPkH6U0DfQ==NRznQLG8Ondrs28G";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apikey,
    }
}

const apiURL = "https://api.api-ninjas.com/v1/jokes?limit=1";

async function getjoke() {
    const response = await fetch(apiURL, options);
    const data = await response.json();
    // console.log(data[0].joke);
    jokeEl.innerText = data[0].joke;
}
btnEl.addEventListener("click", getjoke)
