import  Express  from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import mainRout from './router/index';


dotenv.config();

const server = Express();

//---------------------------------------------//config engine e path
server.set('view engine','mustache');
server.set('views',path.join(__dirname,'views'));
server.engine('mustache',mustache());


server.use(Express.static(path.join(__dirname,'../public')));


//---------------------------------------------//rotas
server.use(mainRout);

server.use((req,res)=>{
    res.send('Pagina não encontrada !!');

})


server.listen(process.env.PORT);









