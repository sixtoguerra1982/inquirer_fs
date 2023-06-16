const inquirer = require('inquirer')
const fs = require('fs')
const sw = 1

async function inputMain(){
    inquirer.prompt({
        type: 'list',
        name: 'options',
        message: 'Seleccione una Opcion',
        default: 'Mostrar lo que dice',
        choices: ['Crear un archivo', 'Escribir algo en el archivo', 'Mostrar lo que dice', 'Salir']
    })
        .then(answers => {
            // console.log('Answer: ', answers.options)
            let respuesta = answers.options
            if (respuesta == 'Crear un archivo'){
                const sql = 'Select * from Cliente;'
                fs.writeFile('example.sql',sql,'utf8', () => {})
                console.log('NEW FILE')
            }
            if (respuesta == 'Escribir algo en el archivo'){
                inquirer.prompt({
                    type: 'input',
                    name: 'inputuser',
                    message: 'Escribir Algo'
                })
                .then(answers => {
                    let respuesta = answers.inputuser
                    fs.writeFile('example.sql',respuesta,'utf8', () => {})
                    console.log('UPDATE FILE')   
                })
               
            }
            if (respuesta == 'Mostrar lo que dice'){
                fs.readFile('example.sql', 'utf8', (err, data) => {
                    if (err){
                        console.log(err.message)    
                    } else {
                        console.log(data)
                    }
                })        
            }

            if (respuesta == 'Salir'){
                sw = 0
            }
    
        })
}

(async () => {
    // while(sw == 1) {
        await inputMain();
    // }
})();


