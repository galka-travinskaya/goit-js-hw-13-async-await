const validJSON = '{ "name": "Манго", "age": 3 }';
const invalidJSON = '{Бекенд вернул такое чудо}';

try {
    console.log(1);
    console.log(JSON.parse(invalidJSON));
    console.log(2);
} catch (error) {
    console.log(error);
    console.log('Error');
    if(error.name = 'SyntaxError') {
        console.log('Ошибка парса json, нужно что-то сделать');
    }
}

console.log('After try...catch');