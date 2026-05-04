const express = require('express');
const app = express();

app.use(express.json());
let tareas = [];

// Nuestra Aplicacion CRUD: To-DO (Lista de Tareas)

// Read - GET
app.get('/',(req, res) => {
    res.json(tareas)
})

// Create -POST
app.post('/', (req,res) => {
    const nueva = {
        id: Date.now(),
        titulo: req.body.titulo
    }
    tareas.push(nueva)
    res.json(nueva)
})

// Delete
app.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    tareas = tareas.filter(t => t.id !== id) 
    res.json({mensaje: "Eliminado"})
})


// Put-Patch 
app.put('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const { titulo, completado } = req.body
    
    const tarea = tareas.find(t => t.id === id)

    if(!tarea) {
        return res.status(404).json({
            mensaje: 'Tarea no encontrada'
        })
    }

    if (titulo !== undefined){
        tarea.titulo = titulo
    }

    if(completado !== undefined){
        tarea.completado = completado
    }

    res.json({
        mensaje: "Tarea actualizada",
        tarea
    })
})



app.listen(3000, () => {
  console.log('El servidor esta corriendo en http://localhost:3000')
})  