const argv = require('yargs')
.option(
    'b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    }
    )
    .check((argv) =>{
        if( isNaN (argv.base )){
            throw 'La base tiene que ser un numero';
        }
        return true;
    })
    .option(
        'l',{
            alias: 'lista',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla de multiplicar'
        }
    ).check(() =>{
        return true;
    }).option(
        'h',{
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Limite de multiplicacion'
        }
    ).check((argv =>{
        if( isNaN (argv.base )){
            throw 'La base tiene que ser un numero';
        }
        return true;
    }))
.argv;

module.exports = argv;