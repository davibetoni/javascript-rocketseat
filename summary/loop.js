// ------------------ For --------------
console.log('For')
for (let i = 0; i < 10; i++) {
  if (i > 5) {
    console.log(i)
  }
  // break
  // continue
}

// ------------------ While ------------
console.log('\nWhile')
let i = 23827
while (i > 10) {
  console.log(String(i.toFixed(2)).replace('.', ','))
  i /= 10
}

// -------- for..of && for..in ---------
console.log("\nfor..of")
let name = "name";
for (let char of name) {
  console.log(char)
}

console.log("\nfor..in")

function Person(name, age, sex) {
  this.name = name,
    this.age = age,
    this.sex = sex
}

const person1 = new Person('Davi', '23', 'M')
const person2 = new Person('Jhulia', '22', 'F')
const person3 = new Person('Cecilia', '13', 'F')
const persons = [person1, person2, person3]

for (let person of persons) {
  // percorre o vetor
  for (let property in person) {
    // percorre as propriedades de cada object
    console.log(`${property}: ${person[property]}`)
  }
  console.log('')
}