const mysql = require('mysql2')

const express = require('express')

const app = express()

app.use(express.static('public'))

app.use(express.json())

const conexao = mysql.createConnection({

    host: 'localhost',

    user: 'root',

    password: 'senha mysql',

    database: 'cadastro'

})

const usuarios = []

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.post('/cadastro', (req, res) => {

    const usuario = req.body
    
    const sql = 'INSERT INTO usuarios(nome, email) VALUES (?, ?)'

conexao.query(sql, [usuario.nome, usuario.email], (erro) => {

    if(erro){

        console.log(erro)

        return res.status(500).json({
            mensagem: 'Erro no cadastro'
        })

    }

    res.json({
        mensagem: 'Cadastro realizado no banco'
    })

})

    console.log(usuarios)

    res.json({
        mensagem: 'Cadastro realizado'
    })

})

app.listen(3000, () => {
    console.log('Servidor rodando')
})
