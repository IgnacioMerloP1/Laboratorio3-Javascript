const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateSectionEl = document.querySelector(".date-container");
const toggleEl = document.querySelector(".toggle");



const dias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado"
]

const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
]

toggleEl.addEventListener("click", (e) => {
    const html = document.querySelector("html");
    html.classList.toggle("dark");

    if(html.classList.contains("dark")){
        e.target.innerHTML = "Light mode";
    }else {
        e.target.innerHTML = "Dark mode"
    }
});

function checkDigit(num){
    return num < 10 ? "0" + num : num;
}

function setDate(){
    const today = new Date();

    const date = today.getDate();

    const second = today.getSeconds();
    const seconDeg = (second / 60) * 360 + 360;
    secondEl.style.transform = `rotate(${seconDeg}deg)`;

    const minute = today.getMinutes();
    const minuteDeg = (minute / 60) * 360;
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`;

    const hour = today.getHours();
    const hourDeg = (hour/12) * 360;
    hourEl.style.transform = `rotate(${hourDeg}deg)`;

    timeEl.innerHTML = `
    <span>
        <strong>${checkDigit(hour)}</strong>
        :
        ${checkDigit(minute)}
        :
        <small>${checkDigit(second)}</small>
    </span>
    `;

    dateSectionEl.innerHTML = `
        <span>
            ${dias[today.getDay()]},
            ${months[today.getMonth()]},
            <strong>${today.getDate()}</strong>
        </span>
    `;
}

setDate();
setInterval(setDate,1000);