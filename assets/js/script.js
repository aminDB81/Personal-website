const typed = new Typed(".auto-type", {
    strings : ["برنامه نویس فرانت اند هستم","طراح سایت هستم"],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
})

const button = document.querySelector("#cv-button");
button.addEventListener("click", ()=> {
    button.classList.add("active")
})