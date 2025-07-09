let imagens = document.getElementById('imagens')
let buttons = document.querySelectorAll('.button')

function changeSlides() {
    buttons.forEach((botoes, index) => {
        botoes.addEventListener('click', () => {
            imagens.style.transform = `translateX(-${index * 500}px)`
            imagens.style.transition = 'transform 0.5 ease-in-out'
        })
    })
}

changeSlides()