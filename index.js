import express      from "express";
import morgan       from "morgan";
import helmet       from "helmet";
import cookieParser from "cookie-parser";
import bodyParser   from "body-parser"

const app = express();

const PORT = 4000;

const handleListener = () => console.log('Listening On!')

const betweenHome = (req, res, next) =>{
    console.log('Between');
    next()
}

const handleHome = (req, res) => {console.log('Home!!'),res.send('Home!')}

app.use(cookieParser())
app.use(bodyParser())
app.use(helmet())
app.use(morgan('dev'))

app.get('/', handleHome)

app.listen(PORT,handleListener)