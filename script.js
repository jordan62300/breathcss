const container = document.querySelector(".container");
const text= document.querySelector("#text");

const totalTime = 7500;
const breathTime = (totalTime/5) * 2;
const holdTime = totalTime/5

breatheAnimation();

function breatheAnimation() {
    text.innerHTML = "Inspirez !"
    container.className = "container grow";

    setTimeout(()=> {
        text.innerText = 'Retenez !'

        setTimeout(() => {
            text.innerText = "Expirez !"
            container.className = "container shrink"
        }, holdTime)
    }, breathTime)
}

setInterval(breatheAnimation, totalTime)