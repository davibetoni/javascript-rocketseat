/* === Buscando e contando dados em Arrays

Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
  * Contar o número de categorias e o número de livros em cada categoria X
  * Contar o número de autores
  * Criar uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [{
    category: 'Riqueza',
    books: [{
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    category: 'Inteligência Emocional',
    books: [{
        title: "Você é Insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade - Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
]

const authorsLength = () => {
  let authors = []
  for (category of booksByCategory) {
    for (book of category.books) {
      if (!(authors.find(author => author == book.author)))
        authors.push(book.author)
    }
  }
  console.log(`Existem ${authors.length} autores \n`)
}

const booksOnCategory = () => {
  console.log(`Existe ${booksByCategory.length} categorias`)
  for (category of booksByCategory) {
    console.log(`Categoria: ${category.category}`)
    console.log(`Quantidade de livros: ${category.books.length} \n`)
  }
}
const booksOfAuthor = (author) => {
  books_of_author = []
  for (category of booksByCategory) {
    for (book of category.books) {
      if (book.author == author) {
        books_of_author.push(book.title)
      }
    }
  }
  console.log(`Livro(s) do autor ${author}: ${books_of_author.join(", ")}`)
}

booksOnCategory()
authorsLength()
booksOfAuthor('Augusto Cury')
booksOfAuthor('T. Harv Eker')