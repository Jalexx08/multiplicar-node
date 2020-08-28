// Requires
const fs = require('fs');

const colors = require('colors');

const crearArchivo = async (base, limite ) => {

    if (!Number(base)) throw new Error(` El valor introducido ${base} no es un número`);

    let data = '';

    for (let i = 1; i <= limite; i++) {
        data += `${base}*${i}  =  ${base * i}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}-al-${ limite }.txt`, data, (err) => {
        if (err) throw new Error(err);

    });

    return (`tabla-${base}-al-${ limite }.txt`);

};

const listarTabla = (base, limite) => {

    if (!Number(base && limite)) throw new Error(` El valor introducidos no es un número`);

    console.log('==============================='.green);
    console.log(`       tabla de ${ base}`.green);
    console.log('==============================='.green);
    
    for (let i = 1; i <= limite; i++) {
        console.log(`${base}*${i}  =  ${base * i}\n`);
    }

};

module.exports = {
    crearArchivo,
    listarTabla
};

