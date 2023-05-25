const personajes = document.querySelector('#container #personajes');

// imgCont.id ='img';
// document.body.appendChild(imgCont);

const getPersonajes = () => {
    fetch("https://rickandmortyapi.com/api/character")
.then ((response) => response.json())
.then((data) => {
    // console.log(data)
    data.results.forEach((result) => {    
        const liPersonajes = document.createElement('li');
        liPersonajes.classList.add('personaje');
        
        const imgEl = document.createElement('img');
        imgEl.src = result.image;
        imgEl.alt = result.name;
        imgEl.title = result.name;
        

        const span = document.createElement ('span');
        span.innerText = result.name;
       
        liPersonajes.appendChild(imgEl);
        liPersonajes.appendChild(span);
        personajes.appendChild(liPersonajes);         
    
});
})
.catch ((error) => console.log(error,"No se pudo compeltar la acción"));
};
personajes && getPersonajes();
