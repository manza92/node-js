import chalk from "chalk"
import { suma, rest, mult, div } from "./operaciones.mjs";

/*console.log(chalk.blue(suma(12, 64)))
console.log(chalk.red(HOla))
console.log(suma(12,64));
console.log(rest(12,64));
console.log(mult(12,64));
console.log(div(12,64));*/
const resultado = rest(1, 4)

if (resultado > 5) {
    console.log(chalk.red("resultado de la resta: " + resultado))
    
} else {
    console.log(chalk.green("resultado de la resta: " + resultado))
}
