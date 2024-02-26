console.clear();
import {createServer} from 'http';

const httpServer = createServer((req,res)=>
{console.log("Hola mundo, peticion recibida");

res.end("Hola mundo")
});


httpServer.listen(3000);
