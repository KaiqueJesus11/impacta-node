angular.module('appModule', [])
    .controller('Principal', [
        function() {
            var self = this
            self.alunos = [
                {
                    nome: "Ademar Torres",
                    curso: "Angular"
                },
                {
                    nome: "Celilia Maria",
                    curso: "MongoDB"
                },{
                    nome: "Adorian Barbosa",
                    curso: "Node JS"
                }
            ]
            self.mensagem = 'Vindo do controller'
            self.alterarMensagem = () => {
                self.mensagem = "Mensagem alterada"
            }
    }
])