const hamburger = document.querySelector(".navbar__container__hamburger")
const dropdown = document.querySelector(".navbar__dropdown")
const navbar = document.querySelector(".navbar")

hamburger.addEventListener("click",()=> {
    hamburger.classList.toggle("open");
    dropdown.classList.toggle("open");

})

window.addEventListener("scroll", () => {
    const currentPosition = window.scrollY
    currentPosition > 100 ? navbar.classList.add("open") : navbar.classList.remove("open")
    }

)

