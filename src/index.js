import { fetchBreeds } from './cat-api.js';
import { fetchCatByBreed } from './cat-api.js';
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
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

// window.addEventListener('load', () => {
//   loader.classList.remove('hidden'); // Pokaż loader
//   select.classList.add('hidden'); // Ukryj select
//   error.classList.add('hidden'); // Ukryj komunikat o błędzie

//   fetchBreeds()
//     .then(catsList => {
//       loader.classList.add('hidden'); // Ukryj loader
//       select.classList.remove('hidden'); // Pokaż select
//       // ... reszta kodu
//     })
//     .catch(() => {
//       loader.classList.add('hidden'); // Ukryj loader
//       error.classList.remove('hidden'); // Pokaż komunikat o błędzie
//     });
// });

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
// select.addEventListener('change', e => {
//   loader.classList.remove('hidden'); // Pokaż loader
//   catInfo.classList.add('hidden'); // Ukryj catInfo
//   error.classList.add('hidden'); // Ukryj komunikat o błędzie

//   const currentValue = e.currentTarget.value;
//   catInfo.replaceChildren();

//   fetchCatByBreed(currentValue)
//     .then(catUrl => {
//       loader.classList.add('hidden'); // Ukryj loader
//       catInfo.classList.remove('hidden'); // Pokaż catInfo

//       const catImage = document.createElement('img');
//       catInfo.append(catImage);
//       catImage.setAttribute('src', `${catUrl}`);
//       catImage.setAttribute('width', '500');
//       catImage.setAttribute('height', '500');

//       // Kolejne zapytanie o dane kota
//       return fetch(
//         'https://api.thecatapi.com/v1/breeds?api_key=live_y4UBJpWFDyRXMCTGfGBilRBknPor8oQfujHTprh9Wc5GLEprvfb2C3TWjhs6htue'
//       );
//     })
//     .then(response => response.json())
//     .then(data => {
//       data.forEach(cat => {
//         if (currentValue === cat.id) {
//           const catName = document.createElement('h1');
//           const catDescr = document.createElement('p');
//           const catTemp = document.createElement('span');
//           catInfo.append(catName, catDescr, catTemp);
//           catName.textContent = `${cat.name}`;
//           catDescr.textContent = `${cat.description}`;
//           catTemp.textContent = `Temperament: ${cat.temperament}`;
//         }
//       });
//     })
//     .catch(() => {
//       loader.classList.add('hidden'); // Ukryj loader
//       error.classList.remove('hidden'); // Pokaż komunikat o błędzie
//     });
// });
