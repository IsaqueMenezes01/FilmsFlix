import filmes from "./filmes.js"


const heroi = filmes.filter( filmes => (filmes.genero == "héroi"));
const comedia = filmes.filter( filmes => (filmes.genero == "Comédia"));
const series = filmes.filter( filmes => (filmes.genero == "Série"));
const acao = filmes.filter( filmes => (filmes.genero == "Crime"));

for(const i of heroi){
  const filmsView = `
      <div class="col"> 
        
        <a href="${i.link}" ><img src="${i.imagem}"  alt="${i.nome}" class="img-fluid "></a>
      </div>`;
  const filmesJava = document.querySelector('.filme-java-heroes');
  filmesJava.insertAdjacentHTML('beforebegin',filmsView);
}

for(const i of comedia){
  const filmsView = `
      <div class="col"> 
        
        <a href="${i.link}" ><img src="${i.imagem}"  alt="${i.nome}" class="img-fluid "></a>
      </div>`;
  const filmesJava = document.querySelector('.filme-java-comedia');
  filmesJava.insertAdjacentHTML('beforebegin',filmsView);
}
for(const i of acao){
  const filmsView = `
      <div class="col"> 
        
        <a href="${i.link}" ><img src="${i.imagem}"  alt="${i.nome}" class="img-fluid "></a>
      </div>`;
  const filmesJava = document.querySelector('.filme-java-crime');
  filmesJava.insertAdjacentHTML('beforebegin',filmsView);
}
for(const i of series){
  const filmsView = `
      <div class="col"> 
        
        <a href="${i.link}" ><img src="${i.imagem}"  alt="${i.nome}" class="img-fluid "></a>
      </div>`;
  const filmesJava = document.querySelector('.filme-java-series');
  filmesJava.insertAdjacentHTML('beforebegin',filmsView);
}
