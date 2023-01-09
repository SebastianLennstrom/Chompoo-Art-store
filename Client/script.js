const listElement = document.getElementById("gallery__list")


const galleryApi = new GalleryApi('http://localhost:5000/images');





function renderGallery(){

        console.log('rendering gallery');
      
        galleryApi.getAll().then((gallery) => {
    
            listElement.innerHTML = '';
            
          if (gallery && gallery.length > 0) {
            gallery.forEach((Item) => {
              listElement.insertAdjacentHTML('beforeend', renderGalleryItem(Item));
            });
          }
        });
      
} 







function renderGalleryItem({name, description, image, alt}){

    
    let html = `
        <li class="flex w-2/5 bg-white bg-opacity-75 mt-2 p-3 rounded border-neutral-400 border border-solid shadow">
            <div class="flex-1">
                <div class="flex items-center justify-start flex-col">
                    <h3 class="mb-1 text-xl font-bold text-black shadow-None uppercase">${name}</h3>
                    <img class= "w-3/5" src="${image}" alt="${alt}">
                </div>
                <br>
                <p class="mt-2 text-xs text-black">${description}</p>
            </div>
        </li>`;
  
    return html;
  }


renderGallery();


