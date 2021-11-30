import filmes from "./filmes.js"

const criado = filmes.filter( filmes => (filmes.criado == "2021"));

for(const i of criado){
  const filmsView = `criado
      <div class="col"> ""
        
        <a href="${i.link}" ><img src="${i.imagem}"  alt="${i.nome}" class="img-fluid "></a>
      </div>`;
  const filmesJava = document.querySelector('.filme-java-2021');
  filmesJava.insertAdjacentHTML('beforebegin',filmsView);
}
