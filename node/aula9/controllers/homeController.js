exports.paginaInicial = (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Formulário Estilizado</title>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
                
                body {
                    font-family: 'Roboto', sans-serif;
                    background-color: #121212;
                    color: #ffffff;
                    margin: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }

                form {
                    background-color: #1e1e1e;
                    padding: 25px;
                    border-radius: 12px;
                    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
                    width: 100%;
                    max-width: 400px;
                    box-sizing: border-box; /* Garante que padding e borda fiquem dentro do tamanho do elemento */
                }

                label {
                    display: block;
                    margin-bottom: 8px;
                    font-size: 16px;
                    font-weight: 500;
                    color: #b3b3b3;
                }

                input[type="text"] {
                    width: 100%;
                    padding: 12px;
                    border: 1px solid #333;
                    border-radius: 8px;
                    background-color: #2b2b2b;
                    color: #ffffff;
                    font-size: 14px;
                    margin-bottom: 15px;
                    box-sizing: border-box; /* Garante que padding não cause overflow */
                }

                input[type="text"]:focus {
                    outline: none;
                    border-color: #6c63ff;
                    box-shadow: 0 0 8px rgba(108, 99, 255, 0.5);
                }

                button {
                    width: 100%;
                    padding: 12px;
                    font-size: 16px;
                    font-weight: 700;
                    background-color: #6c63ff;
                    color: #ffffff;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: background-color 0.3s ease, transform 0.2s ease;
                }

                button:hover {
                    background-color: #5754d6;
                    transform: translateY(-2px);
                }

                button:active {
                    transform: translateY(0);
                }

                @media (max-width: 480px) {
                    form {
                        padding: 20px;
                    }

                    button {
                        font-size: 14px;
                    }
                }
            </style>
        </head>
        <body>
            <form action="/" method="POST">
                <label for="nome">Nome do cliente:</label>
                <input type="text" id="nome" name="qualquercoisa" placeholder="Digite seu nome">

                <label for="outro">Outro campo:</label>
                <input type="text" id="outro" name="aquioutrocampo" placeholder="Digite algo aqui">

                <button>Enviar</button>
            </form>
        </body>
        </html>
    `);
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
