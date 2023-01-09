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
        <li class="flex w-2/5  mt-2 p-3">
            <div class="flex flex-col">
                <div class="flex items-center justify-start flex-col">
                    <h3 class="mb-1 text-xl font-bold text-black uppercase">${name}</h3>
                    <img class= "w-3/5" src="${image}" alt="${alt}">
                </div>
                <br>
                <p class="m-10 text-xs text-black self-center">${description}</p>
            </div>
        </li>`;
  
    return html;
  }


renderGallery();


