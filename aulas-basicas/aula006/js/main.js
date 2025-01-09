// const request = (obj) => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(obj.method, obj.url, true);
//     xhr.send();

//     xhr.addEventListener("load", () => {
//       if (xhr.status >= 200 && xhr.status < 300) {
//         resolve(xhr.responseText);
//       } else {
//         reject(xhr.statusText);
//       }
//     });
//   });
// };

document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();
  if (tag === "a") {
    e.preventDefault();
    loadPage(el);
  }
});

async function loadPage(el) {
  try{
    const href = el.getAttribute("href");
    const response = await fetch(href);
    
    if(response.status !==  200) {
      throw new Error(`Erro ao carregar a página: ${response.status}`);
      return response.text();
    }
    
    const html = response.text();
    loadPage(html)
  }catch{
    console.error("Erro ao carregar a página:", error.message);
  }
}

function loadResult(response) {
  const result = document.querySelector(".result");
  result.innerHTML = response;
}


// fetch('page4.html')
//   .then(response => {
//     if(response.status !== 200){
//       throw new Error(`Erro ao carregar a página: ${response.status}`);
//       return response.texto();
//     }
//   })
//   .then(html => console.log(html))
//   .then(e => console.log(e))