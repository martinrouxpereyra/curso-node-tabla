const colors = require('colors');

const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: colors.rainbow('es la base de la tabla de multiplicar'),
            })
            .check((argv, option) =>{  
                if(isNaN(argv.b)){
                    throw colors.white.bgRed.underline('la base tiene que ser un numero');
                }
                return true;
            })
            .option('l', {
                alias:'listar',
                type:'boolean',
                default: false,
                describe: colors.rainbow('Muestra la tableen consola')
            })
            .option('h',{
                alias:'hasta',
                type:'number',
                default: 10,
                describe: colors.rainbow('es el numero hasta donde llegara el tabla')
            })
            .argv;

module.exports = argv;       