//tipo primitivo de string
const mensagem = ' todo mundo no discord é legal ';

//tipo objeto
const outraMensagem = new String('Ola 2')


console.log(mensagem.length);
console.log(mensagem[2]);
console.log(mensagem.includes('no')); // true
console.log(mensagem.includes('dia')); // false
console.log(mensagem.startsWith('todo')); // true
console.log(mensagem.startsWith('mundo')); // false
console.log(mensagem.endsWith('legal')); // true
console.log(mensagem.endsWith('discord')); //false
console.log(mensagem.indexOf('legal'));
console.log(mensagem.replace('legal','chato'))
console.log(mensagem.trim());
console.log(mensagem.split(' '));