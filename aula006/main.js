const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
};

document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();
  if (tag === "a") {
    e.preventDefault();
    loadPage(el);
  }
});

async function loadPage(el) {
  const href = el.getAttribute("href");

  const objCOnfig = {
    method: "GET",
    url: href,
  };

  try {
    const response = await request(objCOnfig);
    loadResult(response); // Carregar a página na div result
  } catch (e) {
    console.log(e);
  }
}

function loadResult(response) {
  const result = document.querySelector(".result");
  result.innerHTML = response;
}
