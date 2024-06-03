let students = [['Luiz', 10, 8],['Sabrina', 10, 9],['Tibbers', 8, 8],['Gato', 10, 6],['Kirby', 6, 4]]
let i = 0
let student = ''
let grade1
let grade2

for(i = 0; i < students.length; i++) {
    student = students[i][0]
    grade1 = students[i][1]
    grade2 = students[i][2]
    average = (grade1 + grade2) / 2
    average.toFixed(1)
    if (average >= 7) {
        alert(`A média do(a) aluno(a) ${student} é: ${average}\nParabéns, ${student}! Você foi aprovado(a) no concurso!`)
    }
    else {
        alert(`A média do(a) aluno(a) ${student} é: ${average}\nNão foi dessa vez, ${student}! Tente novamente!`)
    }
}