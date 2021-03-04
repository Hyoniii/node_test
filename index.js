import express from "express";
const app = express();

const PORT = 4000;

function handleListener(){
    console.log('Listening On!')
}

const betweenHome = (req, res, next) =>{
    console.log('Between');
    next()
}

const handleHome = (req, res) => {console.log('Home!!'),res.send('Home!')}

app.use(betweenHome)

app.get('/', handleHome)

app.listen(PORT,handleListener)