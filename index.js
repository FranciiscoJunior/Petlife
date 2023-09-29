var elementoDuvida = document.querySelectorAll('.duvida')

elementoDuvida.forEach(fuction (duvida){
    duvida.classList.add('click', fuction(){
        duvida.classList.toggle('ativa')
    })
})
