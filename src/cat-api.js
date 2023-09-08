import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_y4UBJpWFDyRXMCTGfGBilRBknPor8oQfujHTprh9Wc5GLEprvfb2C3TWjhs6htue';

export function fetchBreeds() {
  return new Promise(resolve => {
    fetch(
      'https://api.thecatapi.com/v1/breeds?api_key=live_y4UBJpWFDyRXMCTGfGBilRBknPor8oQfujHTprh9Wc5GLEprvfb2C3TWjhs6htue'
    )
      .then(response => {
        return response.json();
      })
      .then(data => resolve(data));
  });
}

export function fetchCatByBreed(breedId) {
  return new Promise(resolve => {
    fetch(
      `https://api.thecatapi.com/v1/images/search?breeds_ids=${breedId}&api_key=live_y4UBJpWFDyRXMCTGfGBilRBknPor8oQfujHTprh9Wc5GLEprvfb2C3TWjhs6htue`
    )
      .then(response => response.json())
      .then(catItem => {
        const catUrl = catItem[0].url;
        resolve(catUrl);
      });
  });
}
