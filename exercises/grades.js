/* ### Transformar notas escolares
Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima ---   A
* entre 80 89     ---   B
* entre 70 79     ---   C
* entre 60 69     ---   D
* menor que 60    ---   F

*/

let score1 = 91
let score2 = 80
let score3 = 70
let score4 = 60
let score5 = 59

const grades = (score) => {
  if (score >= 90) {
    return 'A'
  } else if (score >= 80 && score < 90) {
    return 'B'
  } else if (score >= 70 && score < 80) {
    return 'C'
  } else if (score >= 60 && score < 70) {
    return 'D'
  } else {
    return 'F'
  }
}

console.log(grades(score1))
console.log(grades(score2))
console.log(grades(score3))
console.log(grades(score4))
console.log(grades(score5))