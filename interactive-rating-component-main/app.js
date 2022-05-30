document.addEventListener("DOMContentLoaded", () => {
    iniciarApp();
});

function iniciarApp() {
    buttons();
    color();
    submit();
}

const rate = document.querySelectorAll(".rate");
const result = document.querySelector(".resultado");

function buttons() {
    rate.forEach(btn => {
        btn.addEventListener("click", color);

        btn.addEventListener("click", function(e) {
            e.preventDefault();
            btn.classList.add("gris");
            result.textContent = `You selected ${btn.value} out of 5`;
            result.classList.add("valor")
        });
    });
}

function color() {
    rate.forEach(btn => {
        btn.classList.remove("gris");
    });
}

function submit() {
    const cardThanks = document.querySelector(".card-thanks");
    const cardRate = document.querySelector(".card");
    const submit = document.querySelector(".formulario");
    submit.addEventListener("submit", function(e) {
        e.preventDefault();
        if(result.classList.contains("valor")) {
            cardThanks.classList.remove("none");
            cardRate.classList.add("none");
        } else {
            error();
        }
    });
}

function error() {
    const body = document.querySelector("body");
    const alert = document.createElement("P");
    alert.textContent = "Please choose a number from 1 to 5";
    alert.classList.add("alerta");
    body.appendChild(alert);
    setTimeout(() => {
        alert.remove();
    }, 5000);
}
