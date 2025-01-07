function numRandom(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function waitHere(msg, time) {
  //resolve: resolver promises, reject: tratar o erro
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject(new Error(msg));
        return;
      }
      resolve(msg.toUpperCase() + " - Passed");
      return;
    }, time);
  });
}

// waitHere("round 1", numRandom())
//     .then(value => {
//         console.log(value)
//         return waitHere("round 2", numRandom())
//     })
//     .then(round => {
//         console.log(round)
//         return waitHere("round 3", numRandom())
//     })
//     .then(finalRound => {
//         console.log(finalRound)
//     })
//     .catch(error => {
//         console.error("Error:", error.message)
//     })

async function execute() {
  try {
    const round1 = await waitHere("round 1", numRandom());
    console.log(round1);

    const round2 = await waitHere(2, numRandom());
    console.log(round2);

    const round3 = await waitHere("round 3", numRandom());
    console.log(round3);

    console.log("The end: ", round3);
  } catch {console.error("Error: ", error)}
}
execute();
