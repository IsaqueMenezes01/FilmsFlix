import filmes from "./filmes.js"
import populares from "./populares.js"


function loadfilmespopulares(){
  const popular = populares;
  for (const i of popular){
    
    createFilmPopular(i);
  }
}

 

function createFilmPopular(i){
  const filmsPop = `
      <div class="col"> 
        <span> ${i.id} </span>
        <a href="${i.link}" ><img src="${i.imagem}"  alt="${i.nome}" class="img-fluid teste"></a>
      </div>`;
    const filmesPop = document.querySelector('.filme-java-popular');
    filmesPop.insertAdjacentHTML('beforebegin',filmsPop);

}

loadfilmespopulares();
