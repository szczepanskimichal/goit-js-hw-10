import { fetchBreeds } from './cat-api.js';
import { fetchCatByBreed } from './cat-api.js';

const select = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
let options = [];

window.addEventListener('load', fetchBreeds);

fetchBreeds().then(catsList => {
  catsList.forEach(e => {
    const option = document.createElement('option');
    option.setAttribute('value', `${e.id}`);
    option.textContent = `${e.name}`;
    options.push(option);
  });
  select.append(...options);
});

select.addEventListener('change', e => {
  const currentValue = e.currentTarget.value;
  catInfo.replaceChildren();
  fetchCatByBreed(currentValue)
    .then(catUrl => {
      const catImage = document.createElement('img');
      catInfo.append(catImage);
      catImage.setAttribute('src', `${catUrl}`);
      catImage.setAttribute('width', '500');
      catImage.setAttribute('height', '500');
    })
    .then(
      fetch(
        'https://api.thecatapi.com/v1/breeds?api_key=live_y4UBJpWFDyRXMCTGfGBilRBknPor8oQfujHTprh9Wc5GLEprvfb2C3TWjhs6htue'
      )
        .then(response => response.json())
        .then(data => {
          data.forEach(cat => {
            if (currentValue === cat.id) {
              const catName = document.createElement('h1');
              const catDescr = document.createElement('p');
              const catTemp = document.createElement('span');
              catInfo.append(catName, catDescr, catTemp);
              catName.textContent = `${cat.name}`;
              catDescr.textContent = `${cat.description}`;
              catTemp.textContent = `Temperament: ${cat.temperament}`;
            }
          });
        })
    );
});
