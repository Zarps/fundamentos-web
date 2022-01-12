// regras do JS

// CASE sensitive(nome/ Nome)
// não usa tipagem de dados
// compilado pelo navegador

// Declaração das variaveis

// var Nome = "thiago" -> não recomendado por ser modelo mais "antigo"
// let nome = "thiago" -> usado para variaveis que podem "varias o valor", podem ser modificadas ao longo do script.
// const nome = 'thiago' -> usado para variaveis que não irão sofrer alteração

// uso da DOM
// document.querySelector("#nome ou .nome") 
// como posso acessar a DOM
// por tag : getElementByTagName()
// por id: getElementeById()
// por Nome: getElementeByName()
// por classe: GetElementsByClassName()
// por seletor: querySelector()


let nome = window.document.getElementById("nome") 
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")


function validarNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
        nomeOk = true
    }

}

function validarEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 ) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    }else {
        txtEmail.innerHTML = "E-mail Válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validarAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")

    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Texto é muito grande, digite no máximo 100 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    }
    else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("Formulário enviado com sucesso")
    }else {
        alert('Por favor preencha o formulário corretamente antes de enviar...')
    }
}

function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal() {
    mapa.style.width = "500px"
    mapa.style.height = "350px"
}





// function validarNome() {
//     let texto = document.querySelector('#msgTexto')

//     if (nome.value.length > 3) {
//         texto.innerHTML = 'Tamanho já ta bom'
//         texto.style.color = 'green'
//     }
//     else {
//         texto.innerHTML = 'nome precisa ser maior que isso'
//         texto.style.color = 'red'
//     }
//     function validarEmail() {
//         let msgEmail = document.querySelector('#msgEmail')

//         if (email.value.match(padrao)) {
//             msgEmail.innerHTML = 'email valido'
//         }
//         else {
//             msgEmail.innerHTML = 'email invalido'
//         }
//     }
// }