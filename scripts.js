let lista = document.getElementById("lista");
let requisicao = async () => {
  for (let i = 1001; i < 1005; i++) {
    let teste = await fetch(
      `https://ragnapi.com/api/v1/old-times/monsters/${i}`
    );
    let converter = await teste.json();
    console.log(converter);

    //   .then(response => response.json())
    //   .then(data => {
    //     let titulo = document.createElement("h1");
    //     let img = document.createElement("img");

    //     titulo.innerText = data.monster_info;

    //     img.src = data.gif;

    //     lista.appendChild(titulo);
    //     lista.appendChild(img);
    //     console.log(data);
    //   });
  }
};

requisicao();
