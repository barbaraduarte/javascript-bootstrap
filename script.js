// const nome = document.querySelector("#cadastroNome");
// const email = document.querySelector("#cadastroEmail");
// const telefone = document.querySelector("#cadastroPhone");
// const faleComigo = document.querySelector("#cadastroMensagem");


const nome = document.querySelector(".cadastroNome");
const email = document.querySelector(".cadastroEmail");
const telefone = document.querySelector(".cadastroPhone");
const faleComigo = document.querySelector(".cadastroMensagem");

const botao = document.querySelector('.btn cadastro__button');

function (event){
   event.preventDefault();
   if (nome.value== undefined||
       nome.value== null||
       nome.value.trim()== ""||
       nome.value.length<0){
       nome.focus();
       alert("Preencha o campo nome corretamente")
	   return false;
	   
   }else if (email.value== undefined||
       email.value== null||
       email.value.trim()== ""||
       email.value === undefined||
       email.value.indexOf('@')=== -1){
       email.focus();
       alert("Preencha o campo email corretamente")
	   return false;
	   
   }else if (telefone.undefined||
       telefone.value== null||
       telefone.value.trim()== ""||
       telefone.value.length<11){
       telefone.focus();
       alert("Preencha o telefone corretamente")
       return false;
   }else if (
        faleComigo.value.trim() === "" ||
        faleComigo.value === undefined ||
        faleComigo.value === null ||
        faleComigo.value.length < 10) {
        faleComigo.focus()
        alert("Digite uma mensagem com no mínimo 10 caracteres")
        return false
    }
   document.querySelector('form').submit()
   alert('Formulário enviado com sucesso!')
}
