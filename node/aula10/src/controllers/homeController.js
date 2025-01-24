exports.paginaInicial = (req, res) => {
    res.render('index');
}


exports.resposta = (requ, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Saudação</title>
            <style>
                /* Fonte estilizada */
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

                body {
                    margin: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    background-color: #1e1e2f;
                    font-family: 'Poppins', sans-serif;
                    color: #ffffff;
                    text-align: center;
                }

                .container {
                    background: linear-gradient(145deg, #2b2b3b, #232333);
                    padding: 40px;
                    border-radius: 15px;
                    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5), -10px -10px 20px rgba(255, 255, 255, 0.1);
                }

                h1 {
                    font-size: 3rem;
                    margin: 0 0 10px;
                    color: #6c63ff;
                }

                p {
                    font-size: 1.2rem;
                    margin: 0;
                    color: #d3d3d3;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Hello, Buddy!</h1>
                <p>Welcome to our platform. We hope you have a great experience!</p>
            </div>
        </body>
        </html>
    `);
}
