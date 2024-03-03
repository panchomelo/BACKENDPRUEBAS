const app = require("./src/app/app.js") //importando app
const port = 3000; //PUERTO



app.listen(port, () => {
    console.log(`aplicacion corriendo en --->>>> http://localhost:${port}`); 
});

