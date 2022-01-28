var app = new Vue({
    el: '#app',
    data: {
        nome: '',
        idade: '',
        CEP: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
        pessoas: []

    },
    methods: {
        registrarPessoa: function (){
            let novaPessoa = {
                nome: this.nome,
                idade: this.idade,
                CEP: this.CEP,
                rua: this.rua,
                numero: this.numero,
                bairro: this.bairro,
                cidade: this.cidade,
                estado: this.estado,
            }
            this.pessoas.push(novaPessoa)
            this.limparCampos()
        },

        limparCampos: function (){
            this.nome = ''
            this.idade = ''
            this.CEP = ''
            this.rua = ''
            this.numero = ''
            this.bairro = ''
            this.cidade = ''
            this.estado = ''
        },

        deletarPessoa: function(pessoa) {

            const index = this.pessoas.indexOf(pessoa);
            this.pessoas.splice(index, 1); 
        },

        deletarTudo: function(){
            this.pessoas = []
        },

        buscarCep:  function() {
            var self = this;
            $.ajax({
                url: `https://viacep.com.br/ws/${this.CEP}/json/`,
                type: 'GET',
                success: function (retorno) {
                    self.loading = false
                    self.rua = retorno.logradouro
                    self.bairro = retorno.bairro
                    self.cidade = retorno.localidade
                    self.estado = retorno.uf
                    $("#numero").trigger('focus')                
                },
            });

            this.loading = true
       },
    }
})