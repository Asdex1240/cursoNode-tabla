const fs = require('fs');
const colors = require('colors');

/* Manera 1
const crearArchivo = (base = 5)=>{
    console.log('===============================');
    console.log(`           Tabla del ${base}`)
    console.log('===============================');
    let salida = '';
    
    for(let i = 1; i<=10; i++){
        salida += (`${base} * ${i} = ${base*i}\n`);
    }
    console.log(salida);
 
    return new Promise ( (resolve, reject) =>{
        fs.writeFileSync(`tabla-${base}.txt`,salida);
        resolve(`tabla-${base}.txt`)
    })
}
*/

    const crearArchivo = async( base, lista, hasta) =>{

        try{
            
            let salida = '';
            let  consola = '';
            
            for(let i = 1; i<=hasta; i++){
                salida +=(`${base} x ${i} = ${base*i}\n`);
                consola +=(`${base} ${'x'.red} ${i} ${'='.green} ${base*i}\n`);
            }
            if(lista){
                console.log('==============================='.rainbow);
                console.log(`           Tabla del ${base}`.magenta);
                console.log('==============================='.rainbow);
                console.log(consola);

            }
            fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
            return `tabla-${base}.txt`;

        }catch(error){
            throw error;
        }

    }
    
module.exports = {
    crearArchivo
}