function getFruit(name) {
    const fruits = {
        strawberry: 'strawberry',
        kiwi: 'kiwi',
        apple: 'apple',
    };

    return new Promise((resolve,reject) => 
        setTimeout(() => resolve(fruits[name]), 500)
        );
}

async function asyncMakeSmoothie() {
    try {
        console.time('asyncMakeSmoothie');

        const apple = await getFruit('apple');
        const kiwi = await getFruit('kiwi');
        const berry = await getFruit('strawberry');
    
    const fruits = await Promise.all([apple, kiwi, berry]);
    console.log(fruits);

    return(fruits);

    console.timeEnd('asyncMakeSmoothie');
    } catch (error) {
        console.log('error' + error);
    }
}

asyncMakeSmoothie().then(fruits => console.log(fruits));





// ЕСЛИ
// async function fn () {}
// const fn  = async function () {}
// const arr = async () => {}
// const x = {
//   async getname () {}
// }
// class X {
//   async getName () {}
// }