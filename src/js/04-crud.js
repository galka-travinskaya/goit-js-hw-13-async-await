// const BASE_URL = 'http://localhost:3001';

// function removeBook(bookId) {
//     const url = `${BASE_URL}/books/${bookId}`;
//     const options ={
//         method: 'DELETE',
//     };

//     return fetch(url, options).then(res => res.json());
// }

// removeBook(13);
// removeBook(21)

// const BASE_URL = 'http://localhost:3001';

// function fetchBooks() {
//     return fetch(`${BASE_URL}/books`)
//         .then(res => res.json())
//         .then(console.log);
// }

// function fetchBookById(bookId) {
//     return fetch(`${BASE_URL}/books/${bookId}`)
//         .then(res => res.json())
//         .then(console.log);
// }

// fetchBooks();
// fetchBookById(2);
// fetchBookById(4);

const BASE_URL = 'http://localhost:3001';

function addBook(book) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
    };

    return fetch(`${BASE_URL}/books`, options)
        .then(res => res.json());
}

addBook({
    "title": "На берегу спокойных вод",
    "author": "Роберт Шекли",
    "genres": [
      "фантастика"
    ],
    "rating": 8.51
}).then(renderBook).catch(error => console.log(error));

addBook({
    "title": "Последнее королевство",
    "author": "Бернард Корнуэлл",
    "genres": [
      "приключения"
    ],
    "rating": 8.38
  }).then(renderBook);

function renderBook(book) {
        console.log('Пришел ответ от бекэнда, можно рисовать');
        console.log(book);
}