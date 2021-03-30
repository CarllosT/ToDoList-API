const express = require('express');
const app = express()
const port = 3000

app.get('/usuario', (req, res) => {
    res.send('Rota ativada com Get e recurso usuario: valores de usuarios devem ser retornados')

})

app.get('/tarefas', (req, res) => {
    res.send('Rota ativada com Get e recurso usuario: valores de tarefas devem ser retornados')

})

app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
});
