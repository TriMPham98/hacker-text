const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelector("h1").onmouseover = event => {
    event.target.innerText = letters[Math.floor(Math.random() * 26)];
};
