const express = require('express');

const app = express();

// O GET recebe dois parâmetros: rota e função

/* req - requisição que traz todos os parâmetros da página referente a quem requisitou (dados do solicitante)
 * res - resposta exibida na página
 */
app.get('/', (req, res) => (
        res.send("Hello World!!!") // Enviado (exibido) na página
        
    )
);

// No browser na porta 3001 vai rodar a aplicação
app.listen(3001);
