exports.paginaInicial = (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contato</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f9;
                    color: #333;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    text-align: center;
                }
                .container {
                    background: #fff;
                    padding: 30px;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    max-width: 400px;
                }
                h1 {
                    font-size: 24px;
                    margin-bottom: 20px;
                }
                p {
                    font-size: 16px;
                    color: #666;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Obrigado por entrar em contato!</h1>
                <p>Seu esforço em preencher aquele formulário não foi em vão... ou talvez tenha sido. Vamos analisar e decidir se vale a pena responder. Até lá, relaxe!</p>
            </div>
        </body>
        </html>
    `);
}
