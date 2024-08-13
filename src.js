const form = document.getElementById('form')
const primeiro = document.getElementById('primeiro')
const segundo = document.getElementById('segundo')
const mensagemDeSucesso = document.querySelector('.sucess-message')
const mensagemDeErro = document.querySelector('.error-message')

form.addEventListener('submit', function(e){
    e.preventDefault();

    const valorPrimeiro = Number(primeiro.value)
    const valorSegundo = Number(segundo.value)

    const mensagemDeSucessoTexto = `Formulário VÁLIDO pois o ${valorSegundo} é maior que o ${valorPrimeiro}`
    const mensagemDeErroTexto = `Formulário INVÁLIDO pois o ${valorPrimeiro} é maior que o ${valorSegundo}`

    if (valorPrimeiro >= valorSegundo){
        mensagemDeErro.innerHTML = mensagemDeErroTexto
        mensagemDeErro.style.display = 'block'
        mensagemDeSucesso.style.display = 'none'
    } else {
        mensagemDeSucesso.innerHTML = mensagemDeSucessoTexto
        mensagemDeSucesso.style.display = 'block'
        mensagemDeErro.style.display = 'none'
    }
});