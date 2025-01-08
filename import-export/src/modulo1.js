export const name = "Juan";
const lastName = "Barros";
const age = 19;


/*Exportando diretamente a função soma
Por padrão, a função exportada é por padrão. Desta forma, 
podemos importar apenas a função soma sem precisar usar 
o nome do arquivo. Ex: import qualquerNome from "./utils"; 
Desta forma, a função soma pode ser chamada como qualquerNome()
*/
export default function soma(x, y) {
    return x + y;
}

// export default (x,y) => x*y

// Classe Person
export class Person {
    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
}

// Exportando alias para lastName e age
export { lastName as lastName2, age as default };
