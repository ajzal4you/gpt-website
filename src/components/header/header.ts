let sidebar = document.querySelector('.sidebar')
let bar = document.querySelector("#menu")

bar?.addEventListener("click",() => {
    sidebar?.classList.toggle("active");
})