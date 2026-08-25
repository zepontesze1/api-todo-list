import express from 'express';

const app = express();


app.use(express.json());


app.post('/tarefas', (req, res) => {

    const  { titulo, descricao} = req.body;

    if (!titulo || titulo.trim() === ''){

        return res.status(400).json({erro: 'O campo título e obrogatório '})
    }

});


const insercao = db.prepare{
' INSERT INTO tarefas (titulo, descricao) VALUES '    

}
