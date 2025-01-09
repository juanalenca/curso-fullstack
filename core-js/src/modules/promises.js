function promise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise resolved');
        }, 2000);
    });
}

export default async function () {
    await promise();
    console.log('After promise');
}