import "./style.css";
const url = 'https://icanhazdadjoke.com'
const jokeElement = document.getElementById("joke");
const btn = document.getElementById("jokebtn");

generateJoke();

btn.addEventListener("click", generateJoke);


/**
 * Generates a joke by making an asynchronous request to the specified URL.
 * @returns {Promise<void>} A promise that resolves when the joke is generated and displayed.
 */
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch(url, config);
  const data = await res.json();
  jokeElement.innerHTML = data.joke;
}const commitMessage = "Update main.js file to generate and display dad jokes";
