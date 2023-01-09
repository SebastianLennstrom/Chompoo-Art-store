const listElement = document.getElementById("gallery__list");


const galleryApi = new GalleryApi('http://localhost:5000/images');

let gallery = [];




function renderGallery(){

        console.log('rendering gallery');
      
        galleryApi.getAll().then((gallery) => {
    
            listElement.innerHTML = '';
            
          if (gallery && gallery.length > 0) {
            gallery.forEach((Item) => {
              listElement.insertAdjacentHTML('beforeend', renderGalleryItem(Item))
            });
          }
        });
      
} 






//Bör lägga till funktioner för att ta med id vid visning av bilden
function renderGalleryItem({name, description, image, alt}){

    
    let html = `
        <li class="flex w-2/5  mt-2 p-3">
            <div class="flex flex-row">
                <div class="flex items-center justify-start flex-col">
                    <h3 class="mb-1 text-xl font-bold text-black uppercase">${name}</h3>
                    <img class= "w-4/5" src="${image}" alt="${alt}">
                </div>
                <br>
                <div class="flex flex-row">
                  <p class="m-3 text-s text-black">${description}</p>
                  <button name="showItem" class="rounded-md bg-blue-300 hover:bg-blue-100 px-4 py-1 w-1/5 self-end" type="submit" onclick="showItem(${name})"> Visa </button>
                </div>
              </div>
        </li>`;
  
    return html;
  }



function getPictureName(name){
  for (let i = 0; i < gallery.length; i++) {
    if(gallery[i].name == name){
    console.log(i)
    return gallery[i]
    }
  }
}

renderGallery();


