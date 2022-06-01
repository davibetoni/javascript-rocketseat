// function declaration
// ela sofre elevação (hoisting)
{
  console.log('Function Declaration')
  createPrhases()

  function createPrhases() {
    console.log('isso é uma função')
  }
  createPrhases()
  console.log('')
}
// function expression || anonymous
// não tem hoisting
{
  console.log('Function Expression')
  const sum = function(n1, n2) {
    total = n1 + n2 // sempre use var, let ou const
    return total
  }
  console.log(sum(2, 3))
  console.log(total) // consigo acessar a variavel que foi instanciada dentro do método dps de chamar ele
  console.log('')
}
// arrow function
// não tem hoisting
{
  console.log('Arrow Function')
  const mult = (n1, n2) => {
    return n1 * n2
  }
  console.log(mult(2, 3))
  console.log('')
}

// callback function
{
  console.log('Callback Function')

  function say(method) {
    method()
  }
  say(
    () => {
      console.log('passando um metodo como parametro ')
    }
  )
  console.log('')
}

// constructor function
{
  console.log('Constructor Function')

  function Person(name) {
    this.name = name
    this.talk = function() {
      console.log(`${this.name} está falando`)
    }
  }

  const davi = new Person('Davi')
  console.log(davi.name)
  davi.talk()
}