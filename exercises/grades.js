/* ### Transformar notas escolares
Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima ---   A
* entre 80 89     ---   B
* entre 70 79     ---   C
* entre 60 69     ---   D
* menor que 60    ---   F

*/

const grades = (score) => {
  let final_score;
  if (score >= 90 && score <= 100) {
    final_score = 'A'
  } else if (score >= 80 && score < 90) {
    final_score = 'B'
  } else if (score >= 70 && score < 80) {
    final_score = 'C'
  } else if (score >= 60 && score < 70) {
    final_score = 'D'
  } else if (score < 60 && score >= 0) {
    final_score = 'F'
  } else {
    final_score = 'Nota inválida'
  }
  return final_score
}

console.log(grades(84))
console.log(grades(0))
console.log(grades(-2))
console.log(grades(91))
console.log(grades(73))
console.log(grades(59))
console.log(grades(103))
console.log(grades(65))