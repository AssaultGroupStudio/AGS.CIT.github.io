
/*
//open modal window
document.getElementById("open-modal-btn").addEventListener("click", function(){
    document.getElementById("my-modal").classList.add("open")
})
*/

// showBtn - класс для клика
document.querySelectorAll('.showBtn').forEach(element => {
    element.addEventListener('click', function() {

        document.getElementById("my-modal").classList.add("open")
    })
})


//close modal window with svg
document.getElementById("close-my-modal-btn").addEventListener("click", function(){
    document.getElementById("my-modal").classList.remove("open")
})

//close modal window with esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal").classList.remove("open")
    }
});

//close modal window with click on window
document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});