const fs = require('fs');
const colors = require('colors');
/* const crearArchivoTabla = (base = 5) =>{

    return new Promise((resolve, reject) =>{

        
        console.log('=========================');
        console.log('    tabla del:', base);
        console.log('=========================');

        let salida = '';

        for (let i = 1; i <= 10; i++) {
            salida += `${base} * ${i} = ${base * i}\n`;
        }

        console.log(salida);

        fs.writeFileSync(`tabla-${base}.txt`, salida);

        resolve(`tabla-${base}.txt`);
    });  

};
 */

// esra manera es exactamente igual a la anterior, solo que hacemos la funcion
//async lo que nos va a retornar una promesa.
const crearArchivoTabla = async(base = 5, listar = false, hasta = 10) =>{

    try {
        
        let salida = '';
        let consola = '';
        
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} * ${i} = base * i\n`;
            consola += `${base} ${colors.blue('*')} ${i} ${colors.blue('=')} ${colors.red(base * i)}\n`;
        }
        
        if(listar){
            console.log(colors.blue('========================='));
            console.log('    tabla del:'.blue.bgWhite , colors.red( base ) );
            console.log(colors.blue('========================='));
            
            console.log(consola);
        }       

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return`tabla-${base}.txt`;     
    } catch (err) {
        throw err;
        
    }    
};

// esto es redundante ya que una propiedad cuyo valor
// apunta a una constante o variable que tiene el mismo nombre.

// crearArchivoTabla: crearArchivoTabla

// podermos dejarlo de la siguiente manera

module.exports = {

    crearArchivoTabla
        

}