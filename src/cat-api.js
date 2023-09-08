import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_e5uNK38D2LdYvYq9jrw7OoTkULXjhFXHcTTTLfhQCmB8zyjET14WEzbSaUbxwzC4';

export function fetchBreeds() {
  return new Promise(resolve => {
    fetch(
      'https://api.thecatapi.com/v1/breeds?api_key=live_e5uNK38D2LdYvYq9jrw7OoTkULXjhFXHcTTTLfhQCmB8zyjET14WEzbSaUbxwzC4'
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
      `https://api.thecatapi.com/v1/images/search?breeds_ids=${breedId}&api_key=live_e5uNK38D2LdYvYq9jrw7OoTkULXjhFXHcTTTLfhQCmB8zyjET14WEzbSaUbxwzC4`
    )
      .then(response => response.json())
      .then(catItem => {
        const catUrl = catItem[0].url;
        resolve(catUrl);
      });
  });
}
