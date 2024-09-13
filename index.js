const { select } = require ('@inquirer/prompts')

const start = () => {
    let count = 0
    while(true){
        let  opcao = "cadastrar"
        switch(opcao) {
            case "cadastrar":
                console.log("vamos cadastrar")
                break
            case "listar":
                console.log("vamos listar")
                break
            case "sair":
              return
        }
    }
}

start()




// console.log(`${metas[2]} ${metas[3]}`.toLocaleUpperCase()) --- template string





















// const mensagem = "ola eu"

// {
//     const mensagemdois = "ola mundo"
//     console.log(mensagemdois)
// }

// console.log(mensagem)