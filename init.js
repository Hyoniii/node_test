import app from './app';
import test from './test.json'

const PORT = 4000;

const handleListening = () =>
    console.log(`🌳Listenind On : http://localhost:${PORT}`);
    console.log(test)
    console.log(typeof(test))

app.listen(PORT, handleListening)
