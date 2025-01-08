// Importando tudo de 'modulo1' como MeuModulo
import * as MeuModulo from './modulo1';

// Exibindo o conteúdo completo do módulo
console.log(MeuModulo);

// Usando valores importados diretamente
console.log(`Hello ${MeuModulo.name} ${MeuModulo.lastName2}! Você tem ${MeuModulo.age}.`);
console.log(MeuModulo.soma(5, 5));

// Usando a classe Person importada
const p1 = new MeuModulo.Person("João", "Silva", 25);
console.log(p1);
