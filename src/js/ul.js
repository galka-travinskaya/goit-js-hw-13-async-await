async function addAndRenderBook(book) {
    try {
        const book = await addBook({});
        console.log(book);
    } catch (error) {
        console.log(error);
    }
}