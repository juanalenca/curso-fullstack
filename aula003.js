//Promises
function numRandom(min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function waitHere(msg, time){
    //resolve: resolver promises, reject: tratar o erro
    return new Promise((resolve, reject) => {

        if(typeof msg !== 'string'){
            reject(new Error(msg));
        }

        setTimeout(() => {
            resolve(msg)
        }, time);

    })
}

waitHere("DB conection", numRandom(1, 3))
    .then(response => {
        console.log(response)
        return waitHere(222222222, numRandom(1, 3))
    })
    .then(response => {
        console.log(response)
        return waitHere("Tratando dados da Base", numRandom(1, 3))
    })
    .then(response => {
        console.log(response)
    })
    .catch(e => console.log("Erro: ", e)) //tratamento de erro