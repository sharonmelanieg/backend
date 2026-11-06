import express from 'express';

const app=express();
app.use(express.json())

const users = [
    { id: 1, name: 'Ana' },
    { id: 2, name: 'Luis' },
    { id: 3, name: 'Carla' },
];
app.get('/',(req, res)=>{
    res.send("Hola")

})

app.get('/usuario', (req,res)=>{
    res.json(users)
})

app.post('/usuario', (req,res)=>{
    const nuevoUsuario=req.body;
    console.log("Nuevo usuario: ",nuevoUsuario)
    nuevoUsuario.id= users.length+1
    users.push(nuevoUsuario)
    res.json(users)
})


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ Servidor Express corriendo en http://localhost:${PORT}`);
});