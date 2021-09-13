const bookdByCategory = [
    {
        category:"riquesa",
        books: [
            {
                title:"o segredo da mente milionaria",
                author: "T. Harv Eker",
            },
            {
                title: "o homem mais rico da Babilonia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T",
            },
        ],
    },
    {
        category: "Inteligencia emocional",
        books: [
            {
                title: "você é insusbitituivel",
                author: "Augusto Cury",
            },
            {
                title: "ansiedade- como enfrentar o mal do seculo",
                author: "Augusto Cury",
            },
            {
                title: "os 7 habitos das pessoas altamente eficazes",
                author: "stephen R. COvey",
            },
        ],
    },
];
const totalCategories = bookdByCategory.length
console.log(totalCategories)

for(let category of bookdByCategory){
    console.log("total de livros da categoria: ", category.category)
    console.log(category.books.length)
}
function countAutors(){
    let authors = [];

    for(let category of bookdByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author)==-1){
                authors.push(book.author)
            }
        }
    }
    console.log("total de autores", authors.length)
}
countAutors();
function booksOfAugustoCury(){
    let books = [];

    for(let category of bookdByCategory){
        for(let book of category.books){
            if(book.author === ' Augusto Cury'){
                books.push(book.title)
            }
        }
    }
    console.log("livros do autor", books)
}
booksOfAugustoCury()
 
     