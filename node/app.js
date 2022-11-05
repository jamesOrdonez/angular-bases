//importaciones 
import express from 'express'
import cors from 'cors'
import db from "./database/db.js"
import blogRoutes from "./routes/routes.js"

const app = express()

app.use( cors() )
app.use( express.json() )
app.use('/blogs',blogRoutes)

//conectar con base de datos 
try {
    await db.authenticate()
    console.log('Conexion exitosa') 
} catch (error) {
    console.log(`El error de conexion es: ${error}`)
}
/* app.get('/',(req,res)=>{
    res.send('Hola mundo!!')
}) */

//puerto
app.listen(8000, () =>{
    console.log('Servidor ejecutándose en http://localhost:8000/')
})