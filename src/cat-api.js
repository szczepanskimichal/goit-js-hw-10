// import axios from 'axios';
// axios.defaults.headers.common['x-api-key'] =
//   'live_e5uNK38D2LdYvYq9jrw7OoTkULXjhFXHcTTTLfhQCmB8zyjET14WEzbSaUbxwzC4';

// export function fetchBreeds() {
//   return new Promise(resolve => {
//     fetch(
//       'https://api.thecatapi.com/v1/breeds?api_key=live_e5uNK38D2LdYvYq9jrw7OoTkULXjhFXHcTTTLfhQCmB8zyjET14WEzbSaUbxwzC4'
//     )
//       .then(response => {
//         return response.json();
//       })
//       .then(data => resolve(data));
//   });
// }

// export function fetchCatByBreed(breedId) {
//   return new Promise(resolve => {
//     fetch(
//       `https://api.thecatapi.com/v1/images/search?breeds_ids=${breedId}&api_key=live_e5uNK38D2LdYvYq9jrw7OoTkULXjhFXHcTTTLfhQCmB8zyjET14WEzbSaUbxwzC4`
//     )
//       .then(response => response.json())
//       .then(catItem => {
//         const catUrl = catItem[0].url;
//         resolve(catUrl);
//       })
//       .catch(err => {
//         // Obsługa błędów
//         loader.classList.add('hidden'); // Ukryj loader
//         error.classList.remove('hidden'); // Wyświetl komunikat o błędzie
//         console.error('Wystąpił błąd:', err); // Opcjonalnie: wypisz błąd do konsoli
//       });
//   });
// }
import axios from 'axios';

// Ustawienie domyślnego nagłówka dla wszystkich żądań za pomocą axios
// (choć w tym konkretnym przypadku korzystasz z natywnego fetch)
axios.defaults.headers.common['x-api-key'] =
  'live_e5uNK38D2LdYvYq9jrw7OoTkULXjhFXHcTTTLfhQCmB8zyjET14WEzbSaUbxwzC4';

// Funkcja do pobierania wszystkich ras kotów
export function fetchBreeds() {
  return new Promise((resolve, reject) => {
    fetch(
      'https://api.thecatapi.com/v1/breeds?api_key=live_e5uNK38D2LdYvYq9jrw7OoTkULXjhFXHcTTTLfhQCmB8zyjET14WEzbSaUbxwzC4'
    )
      .then(response => {
        return response.json(); // Konwertuj odpowiedź na format JSON
      })
      .then(data => resolve(data)) // Zwróć pobrane dane
      .catch(err => reject(err)); // W przypadku błędu, odrzuć Promise z błędem
  });
}

// Funkcja do pobierania obrazka kota na podstawie ID rasy
export function fetchCatByBreed(breedId) {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.thecatapi.com/v1/images/search?breeds_ids=${breedId}&api_key=live_e5uNK38D2LdYvYq9jrw7OoTkULXjhFXHcTTTLfhQCmB8zyjET14WEzbSaUbxwzC4`
    )
      .then(response => response.json()) // Konwertuj odpowiedź na format JSON
      .then(catItem => {
        const catUrl = catItem[0].url; // Pobierz adres URL pierwszego obrazka
        resolve(catUrl); // Zwróć adres URL
      })
      .catch(err => reject(err)); // W przypadku błędu, odrzuć Promise z błędem
  });
}
