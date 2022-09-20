// date

const data1 = new Date()
const data2 = new Date('September 19 2022 16:51')
const data3 = new Date(2022, 08, 18, 16, 50) // Ano, Mês(começa do  00(Janeiro), dia, hora, minuto)

data3.setFullYear(2030);

console.log(data3.toDateString())
console.log(data3.toTimeString())
console.log(data3.toISOString())