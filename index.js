const express = require('express');
const app = express();

// Crear nuestra API
app.get('/', (req, res) => {
    res.send("Hola mundo")
})

// Crear nuestra API
app.get('/sebas', (req, res) => {
    res.send("Hola Sebitas")
})

// To-Do
app.get('/tareas', (req, res) => {
    res.json([
        { id: 1, titulo: "Aprender Node"},
        { id: 2, titulo: "Estudiar para el examen"},
    ])
})


app.listen(3000, () => {
  console.log('El servidor esta corriendo en http://localhost:3000')
})  