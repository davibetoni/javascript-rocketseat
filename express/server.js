const express = require('express')
const app = express();

app.set("view engine", "ejs")

app.get("/", function(req, res) {
  const books = [{
      title: 'Cem anos de Solidão',
      author: 'Gabriel García Márquez'
    },
    {
      title: 'Crime e Castigo',
      author: 'Fiódor Dostoyevski'
    },
    {
      title: 'O Senhor dos Aneis',
      author: 'J.R.R Tolkien'
    }
  ]
  res.render("pages/index", { books: books });
})

app.get("/about", function(req, res) {
  res.render("pages/about");
})

app.listen(8080);
console.log(`=> NodeJS application starting in development 
Listening on http://127.0.0.1:8080
Use Ctrl-C to stop`)