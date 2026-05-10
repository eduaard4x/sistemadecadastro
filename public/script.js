const formulario = document.getElementById('formCadastro')

formulario.addEventListener('submit', async (event) => {

    event.preventDefault()

    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value

    const usuario = {
        nome,
        email
    }

    const resposta = await fetch('/cadastro', {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(usuario)

    })

    const dados = await resposta.json()

    alert(dados.mensagem)

})