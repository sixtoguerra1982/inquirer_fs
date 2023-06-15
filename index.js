const inquirer = require('inquirer')

inquirer.prompt({
    type: 'list',
    name: 'options',
    message: 'Seleccione una Opcion',
    // default: 'blue',
    choices: ['Crear un archivo', 'Escribir algo en el archivo', 'Mostrar lo que dice']
})
    .then(answers => {
        // console.log('Answer: ', answers.options)
        let respuesta = answers.options
        if (respuesta == 'Crear un archivo'){
            console.log('NEW FILE')
        }
        if (respuesta == 'Escribir algo en el archivo'){
            console.log('UPDATE FILE')
        }
        if (respuesta == 'Mostrar lo que dice'){
            console.log('READ FILE')
        }

    })