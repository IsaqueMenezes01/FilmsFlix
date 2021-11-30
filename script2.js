import filmes from "./filmes.js"



const series = filmes.filter( filmes => (filmes.genero == "Série"));
for(const i of series){
  const filmsView = `
      <div class="col"> 
        
        <a href="${i.link}" ><img src="${i.imagem}"  alt="${i.nome}" class="img-fluid "></a>
      </div>`;
  const filmesJava = document.querySelector('.filme-java-s2');
  filmesJava.insertAdjacentHTML('beforebegin',filmsView);
}
