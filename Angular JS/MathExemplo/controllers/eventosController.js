angular.module('eventos', [])
    .controller('Principal', [
        '$http',
        function ($http) {
            var self = this

            self.eventos = []

            $http.get('http://localhost:3200/eventos')
                .then(function (response) {
                    self.eventos = response.data
                }, function (error) {
                    console.log(`Erro: ${error}`)
                })

            self.listar = () => {
                console.log("listando")
                $http.get('http://localhost:3200/eventos')
                    .then(function (response) {
                        console.log("sucesso")
                        self.eventos = response.data
                    }, function (error) {
                        console.log(`Erro: ${error}`)
                    })
            }
        }
    ])