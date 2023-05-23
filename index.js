const imgCont = document.createElement ("div");
const etiqueta = document.createElement ("p")
imgCont.id ='img';
document.body.appendChild(imgCont);

fetch("https://rickandmortyapi.com/api/character")
.then (response => response.json())
.then(data => {
    console.log(data)
    data.results.forEach(result => {
       
    const imgUrl = result.image;
    const imgElement = document.createElement('img');
    imgElement.src = imgUrl;
    imgCont.appendChild(imgElement);
});
})
.catch(error =>console.log(error, 
    "No se pudo compeltar la acción"));