import app from './app';

const PORT = 4000;

const handleListening = () =>
    console.log(`🌳Listenind On : http://localhost:${PORT}`);
    //console.log(app)

app.listen(PORT, handleListening)
