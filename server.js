const express = require('express'); 
const exphbs = require('express-handlebars'); 
const bodyParser = require('body-parser'); 
const tarefasController = require('./controllers/tarefas-controller'); 
 
const app = express(); 
app.engine('handlebars', exphbs.engine({ 
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/'
})); 
app.set('view engine', 'handlebars'); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static('public')); 



const ws = new WebSocket("ws://localhost:8080");

ws.on("open", () => {
    console.log("✅ Conectado ao servidor!");

    const msg = new Message();
    msg.sendMessageToChat(ws, "Olá galera!", "canal-geral");
});

// Se chegar alguma resposta do servidor
ws.on("message", (data) => {
    console.log("📩 Mensagem recebida:", data.toString());
});
 
// Rotas 
app.get('/', tarefasController.exibirLista); 
app.get('/tarefas/adicionar', tarefasController.exibirAdicionarTarefa); 
app.post('/tarefas', tarefasController.adicionarTarefa); 
app.get('/tarefas/:id/editar', tarefasController.exibirEdicao); 
app.post('/tarefas/:id/editar', tarefasController.editarTarefa); 
app.get('/tarefas/:id/excluir', tarefasController.excluirTarefa); 
 
// Iniciar o servidor 
app.listen(3000, () => { 
    console.log("Servidor rodando em http://localhost:3000"); 
}); 