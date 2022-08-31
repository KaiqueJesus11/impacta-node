angular.module('appModule', [])
    .controller('Principal', [
        function () {
            var self = this
            self.alunos = [
                {
                    nome: "Ademar Torres",
                    curso: "Angular",
                    done: false
                },
                {
                    nome: "Celilia Maria",
                    curso: "MongoDB",
                    done: false
                },
                {
                    nome: "Adorian Barbosa",
                    curso: "Node JS",
                    done: false
                }
            ]
            self.mensagem = 'Vindo do controller'
            
            self.submit = () => {
                self.alunos.push({nome: self.aluno.nome, curso: self.aluno.curso, done: false})
                self.aluno.nome = ""
                self.aluno.curso = ""
            }

            self.limpar = () => {
                var alunosOld = self.alunos
                self.alunos = []

                alunosOld.forEach(aluno => {
                    if(!aluno.done){
                        self.alunos.push(aluno)
                    }
                })
            }

            self.alterarMensagem = () => {
                self.mensagem = "Mensagem alterada"
            }
        }
    ])