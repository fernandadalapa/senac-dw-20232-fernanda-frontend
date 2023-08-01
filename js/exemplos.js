let prompt = require('prompt-sync')(); //prompt-sync >> sabe fazer a leitura do terminal;

let curso = prompt('Qual o nome do seu curso?');
console.log('Curso: ' + curso);

let fase = Number(prompt('Informe a fase: '));
console.log('Fase: ' + fase);
