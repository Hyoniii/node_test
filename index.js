import express from "express";
const app = express();

const PORT = 4000;

function handleListener(){
    console.log('Listening On!')
}

//function handleHome(req, res){
//    console.log('Home!')
//    res.send('Home!')
//}
const handleHome = (req, res) => {console.log('Home!!'),res.send('Home!')}

app.get('/', handleHome)

app.listen(PORT,handleListener)