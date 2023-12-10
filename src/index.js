const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("Landing Page - Grupo #1")
})

app.get('/integrantes',(req,res)=>{
    res.json([
        {
            "número":"1",
            "nombre":"Eduardo",
            "apellido":"Almachi"
        },
        {
            "número":"2",
            "nombre":"Bryan",
            "apellido":"Delgado"
        },
        {
            "número":"3",
            "nombre":"Brittany",
            "apellido":"Espinel"
        },
        {
            "número":"4",
            "nombre":"Mateo",
            "apellido":"Miño"
        },
        {
            "número":"5",
            "nombre":"Melany",
            "apellido":"Sangucho"
        },
        {
            "número":"6",
            "nombre":"David",
            "apellido":"Vallejo"
        },
        {
            "número":"7",
            "nombre":"Erick",
            "apellido":"Villaroel"
        },
        {
            "número":"8",
            "nombre":"Danny",
            "apellido":"Yanacallo"
        }
    ])
})

app.get('/productos',(req,res)=>{
    res.send(`
        <h2>Catálogo de productos</h2>
        <ul>
            <li>Esferos</li>
            <li>Pinturas</li>
            <li>Cuadernos</li>
            <li>Portaminas</li>
        </ul>
    `)
})

app.listen(3000)
console.log("Servidor web ejecutándose en el puerto 3000")