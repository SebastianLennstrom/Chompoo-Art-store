function renderGalleryItem(name, description, image, alt){

    
    let html = `
        <li class="flex bg-white bg-opacity-75 mt-2 p-3 rounded border-neutral-400 border border-solid shadow">
            <div class="flex-1">
                <div class="flex items-center justify-start">
                    <h3 class="mb-1 text-xl font-bold text-pink-800 uppercase">${name}</h3>

                    <img src="${image}" alt="${alt}">
                </div>
                <p class="mt-2 text-xs">${description}</p>
            </div>
        </li>`;
  
    return html;
  }



