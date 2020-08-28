// Requires
const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors');

const comando = argv._[0];

switch (comando) {

    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);

        break;

    case 'crear':

        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
            .catch(console.log);

        break;
    default:
        console.log('Comando no reconocido');
}
// const argv2 = process.argv

console.log(argv);
// console.log(argv2);



// const argvs = process.argv[2];
// const base =  argvs.split('=')[1];

// console.log(base);

// crearArchivo( base )
//     .then( archivo => console.log(`Archivo creado: ${ archivo }` ))
//     .catch( console.log  );