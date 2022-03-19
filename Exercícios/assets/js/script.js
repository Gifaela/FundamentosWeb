/* forma de add uma Variável dentro do JS

var escopo global - pode ser acessado em todo o código (escopo é tudo que esta dentro de chave {})
let  escopo local 
const  escopo global - ela é constante, não muda o seu valor no decorrer do código.(não é uma variavel comum)*/

/* Boas práticas

Por questos de boas práticas a gente usa o let, para evitar conflitos de escopo
let é uma atualização do EcmaScript 

*/

/*
Case Sencitive = reconhece letras maiusculas e mínusculas

por Tag: getElementByTagName()
por Id: getElemenetById()
por Nome: getElementsByNome()
por Classe: getElementsClassName()
por Seletor: querySelector() pode pegar um id, class, tag - só depende da pontuação (.)(#)
*/

// validando os campos
let nome = window.document.getElementById('nome') //window não obrigatório
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false 
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width ='100%'
email.style.width ='100%'

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 3){ // length é usado para o tamanho
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){ // indexOf - identifica um caracter específico 1(existe)/ -1(não existe)
        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML ='Email Válido'
        txtEmail.style.color = 'green' 
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto') 
    if(assunto.value.length >= 10){
        txtAssunto.innerHTML = 'Texto muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display ='block' // se ele entrar na condição condição o display é block
    }else{
        txtAssunto.style.display='none' // se ele entrar na condição condição o display é none
        assuntoOk = true
    }
}

function enviar(){
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert ('Formulário enviado com sucesso!')
    }else{
        alert ('Preencha o formulário corretamente antes de enviar...')
    }
}
//Zoom no map
function mapaZoom() {
   mapa.style.width = '800px'
   mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}

