$(document).ready(function () {
    $("#frmCadastro").validate({
        rules: {
            nome: {
                required: true,
                minlength: 3,
                //maxlength: 15,
                letterswithbasicpunc: true
            },
            email: {
                required: true,
                email: true
            },
            dataNasc: {
                required: true
            },
            cpf: {
                required: true,
                cpfBR: true
            },
            cep: {
                required: true,
                postalcodeBR: true
            },
            dataNasc: {
                required: true,
                dateNL: true
            },
            numero: {
                required: true,
                integer: true
            },
            usuario: {
                minlength: 5,
                maxlength: 10,
                required: true
            },
            senha: {
                minlength: 3,
                maxlength: 10,
                required: true
            },
            confsenha: {
                equalTo: '#senha',
                required: true
            },
            endereco: {
                required: true
            },
            numero: {
                required: true
            },
            telres: {
                required: true
            },
            telcel: {
                required: true
            },
            bairro: {
                required: true
            },
            cidade: {
                required: true
            },
            placa: {
                required: true
            },
            uf: {
                required: true
            }
        }
    })

})