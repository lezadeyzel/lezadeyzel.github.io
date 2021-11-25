let openModal = document.getElementById("open-modal")

let overlay = document.getElementById("overlay")

let closeModal = document.getElementById("close-modal")

openModal.addEventListener("click", function() {
    overlay.style.display = "block"
})

closeModal.addEventListener("click", function() {
    overlay.style.display = "none"
})