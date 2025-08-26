   document.getElementById("btn").addEventListener("click", () => {
      fetch("https://api.thecatapi.com/v1/images/search?limit=6")
        .then(res => res.json())
        .then(data => {
          let container = document.getElementById("fotos");
          container.innerHTML = ""; // limpa antes
          
          data.forEach(cat => {
            let img = document.createElement("img");
            img.src = cat.url;
            container.appendChild(img);
          });
        })
        .catch(err => {
          console.error("Erro:", err);
          document.getElementById("fotos").innerHTML = "<p style='color:red'>Erro ao buscar gatos 😿</p>";
        });
    });