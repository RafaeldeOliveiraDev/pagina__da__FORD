class Contato{
    constructor(nome, email, telefone, assunto, comentario){
        this.nome = nome
        this.email = email
        this.telefone = telefone
        this.assunto = assunto
        this.comentario = comentario
    }
}

function Post(event, form){

    const nome = form.nome.value
    const email = form.email.value
    const telefone = form.telefone.value
    const assunto = form.assunto.value
    const comentario = form.comentario.value


    let data = new Contato(nome, email, telefone, assunto, comentario)

    console.log(data)
    
    event.preventDefault();

    Enviar(nome)

    form.reset();
}

function Enviar(nome) {
   
    if (nome == "") {
        alert('Por favor, preencha todos os campos!');
    } else {
        alert('Obrigado ' + nome + ', os seus dados foram encaminhados com sucesso!');
    }
}