const colors = ["#e7f2df", "#fcca46", "#a1c181", "#619b8a"]

const btn = document.getElementById("btn")

const color = document.querySelector(".color")

btn.addEventListener("click", function()  {
    const randomNumber = 2
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]

})