const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const button3 = document.getElementById("button-3");
const button4 = document.getElementById("button-4");
const button5 = document.getElementById("button-5");

button1.addEventListener("click", () => {
    button5.textContent = "You clicked First Tab!";
});

button2.addEventListener("click", () => {
    button5.textContent = "You clicked Second Tab!";
});

button3.addEventListener("click", () => {
    button5.textContent = "You clicked Third Tab!";
});

button4.addEventListener("click", () => {
    button5.textContent = "You clicked Fourth Tab!";
});


