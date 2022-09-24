import { PORT } from './config.js';
import app from './app.js';
app.listen(PORT, err => err ? console.error(err) : console.log(`Servidor corriendo en el puerto ${PORT}`));