angular.module('appAngular', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', { templateUrl: '../views/home/index.html' })
            .when('/calcular', { templateUrl: '../views/calcular/index.html' })
            .when('/eventos', { templateUrl: '../views/eventos/index.html' })
            .otherwise({ redirectTo: '/' })
    }])
    .factory('MathFactory', MathFactory)
    .service('MathService', MathService)
    .controller('Principal', [
        '$location',
        '$window',
        'MathService',
        function ($location, $window, MathService) {
            var self = this

            self.calcularQuadrado = () => {
                self.resultado = MathService.calcularQuadrado(self.valor)
            }

            self.mostrarLogs = () => {
                console.log($window)
                const url = $location.url()
                const absUrl = $location.absUrl()
                const protocol = $location.protocol()

                const mensagem = `URL: ${url}\n URL Absoluto: ${absUrl}\n Protocolo: ${protocol}`
                console.log(mensagem)
            }

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