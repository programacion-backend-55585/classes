import { Command } from "commander";

const program = new Command()

program
    .option('-d', 'Variables para debug', false)
    .option('-p <option>', 'Puerto del servicor', parseInt)
    .requiredOption('--password <password>', 'Password for DB')
    .option('-l, --letters [letters...]', 'Especificar letras')

program.parse()

console.log('Options: ', program.opts())