// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// Validar valor do input
usernameInput.addEventListener("change", function(e){
    let valor = e.target.value
    if(valor.length < 5){
        usernameInput.classList.remove("correct")
        usernameInput.classList.add("error")
        usernameHelper.classList.add("visible")
        usernameHelper.innerText = "Digite seu nome COMPLETO"
    }
    else if(!valor.includes(' ')){
        usernameInput.classList.remove("correct")
        usernameInput.classList.add("error")
        usernameHelper.classList.add("visible")
        usernameHelper.innerText = "Digite seu nome COMPLETO"
    }
    else{
        usernameInput.classList.remove("error")
        usernameHelper.classList.remove("visible")
        usernameInput.classList.add("correct")
        usernameHelper.innerText = ""
    }
    if(valor.length == 0){
        usernameInput.classList.remove("error")
        usernameHelper.classList.remove("visible")
        usernameInput.classList.remove("correct")
        usernameHelper.innerText = ""
    }
})


function mostrarPopup(input, label){
    //Mostrar o popup
    input.addEventListener("focus", function(){
        label.classList.add("required-popup")
    })
    //Ocultar o popup
    input.addEventListener("blur", function(){
        label.classList.remove("required-popup")
    })
}

mostrarPopup(usernameInput,usernameLabel)


// ---------- VALIDAÇÃO CPF ---------- //
let cpfInput = document.getElementById("cpf");
let cpfLabel = document.querySelector('label[for="cpf"]');
let cpfHelper = document.getElementById("cpf-helper");

// Validar valor do input
cpfInput.addEventListener("change", function(e){
    let valor = e.target.value
    if(valor.length < 11){ 
        cpfInput.classList.remove("correct")
        cpfInput.classList.add("error")
        cpfHelper.classList.add("visible")
        cpfHelper.innerText = "CPF incompleto"
    }
    
    else if(valor.length > 11){
        cpfInput.classList.remove("correct")
        cpfInput.classList.add("error")
        cpfHelper.classList.add("visible")
        cpfHelper.innerText = "Digite apenas números"
    }

    else{
        cpfInput.classList.remove("error")
        cpfHelper.classList.remove("visible")
        cpfInput.classList.add("correct")
        cpfHelper.innerText = ""
    }

    if(valor.length == 0){
        cpfInput.classList.remove("error")
        cpfHelper.classList.remove("visible")
        cpfInput.classList.remove("correct")
        cpfHelper.innerText = ""
    }

})

mostrarPopup(cpfInput,cpfLabel)


// ---------- VALIDAÇÃO EMAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

    // Validar valor do input
    emailInput.addEventListener("change", function(e){
        let valor = e.target.value
        if((!valor.includes('@')) || (!valor.includes('.com'))){ 
            emailInput.classList.remove("correct")
            emailInput.classList.add("error")
            emailHelper.classList.add("visible")
            emailHelper.innerText = "E-mail incorreto"
        }
        else{
            emailInput.classList.remove("error")
            emailHelper.classList.remove("visible")
            emailInput.classList.add("correct")
            emailHelper.innerText = ""
        }
        if(valor.length == 0){
            emailInput.classList.remove("error")
            emailHelper.classList.remove("visible")
            emailInput.classList.remove("correct")
            emailHelper.innerText = ""
        }
    })

mostrarPopup(emailInput,emailLabel)

// ---------- VALIDAÇÃO SENHA ---------- //
let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

// Validar valor do input
senhaInput.addEventListener("change", function(e){
    let valor = e.target.value
    if((!valor.includes('@')) && 
        (!valor.includes('#'))&&
        (!valor.includes('!'))&&
        (!valor.includes('*'))&&
        (!valor.includes('-'))&&
        (!valor.includes('+'))&&
        (!valor.includes('0'))&&
        (!valor.includes('1'))&&
        (!valor.includes('2'))&&
        (!valor.includes('3'))&&
        (!valor.includes('4'))&&
        (!valor.includes('5'))&&
        (!valor.includes('6'))&&
        (!valor.includes('7'))&&
        (!valor.includes('8'))&&
        (!valor.includes('9'))
        ){ 
        senhaInput.classList.remove("correct")
        senhaInput.classList.add("error")
        senhaHelper.classList.add("visible")
        senhaHelper.innerText = "Obrigatorio caracter especial Ex.#@."
    }
    else{
        senhaInput.classList.remove("error")
        senhaHelper.classList.remove("visible")
        senhaInput.classList.add("correct")
        senhaHelper.innerText = ""
    }
    if(valor.length == 0){
        senhaInput.classList.remove("error")
        senhaHelper.classList.remove("visible")
        senhaInput.classList.remove("correct")
        senhaHelper.innerText = ""
    }
})

mostrarPopup(senhaInput,senhaLabel)


// ---------- VALIDAÇÃO EMAIL ---------- //
let confirmaSenhaInput = document.getElementById("confirma-senha");
let confirmaSenhaLabel = document.querySelector('label[for="confirma-senha"]');
let confirmaSenhaHelper = document.getElementById("confirma-senha-helper");

    // Validar valor do input
    confirmaSenhaInput.addEventListener("change", function(e){
        let valor = e.target.value
        if(valor != csenha){ 
            confirmaSenhaInput.classList.remove("correct")
            confirmaSenhaInput.classList.add("error")
            confirmaSenhaHelper.classList.add("visible")
            confirmaSenhaHelper.innerText = "Senha não confere"
        }
        else{
            confirmaSenhaInput.classList.remove("error")
            confirmaSenhaHelper.classList.remove("visible")
            confirmaSenhaInput.classList.add("correct")
            confirmaSenhaHelper.innerText = ""
        }
        if(valor.length == 0){
            confirmaSenhaInput.classList.remove("error")
            confirmaSenhaHelper.classList.remove("visible")
            confirmaSenhaInput.classList.remove("correct")
            confirmaSenhaHelper.innerText = ""
        }
    })

mostrarPopup(confirmaSenhaInput,confirmaSenhaLabel)