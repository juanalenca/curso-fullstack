function numRandom(min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function waitHere(msg, time){
    //resolve: resolver promises, reject: tratar o erro
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string'){
                reject(new Error(msg));
                return 
            }
            resolve(msg.toUpperCase() + " - Passed")
            return
        }, time);

    })
}

//Promise.all | Promise.race | Promise.resolve | Promise.reject

function downloadPage(){
    const inCache = true
    if(inCache){
        return Promise.reject("Page in cache")
    }else{
        return waitHere("Page downloaded", 3000)
    }
}

downloadPage()
    .then(pageData => {
        console.log(pageData)
    })
    .catch(e => console.error("ERRO: ", e))


/*
const promises = [
    waitHere("Promise 1", numRandom(1, 5)),
    waitHere("Promise 2", numRandom(1, 5)),
    waitHere("Promise 3", numRandom(1, 5)),
    waitHere(1000, numRandom(1, 5)),
]

Promise.race(promises)
    .then((value) =>{
        console.log(value)
    })
    .catch((error) => {
        console.error(error)
    })
*/