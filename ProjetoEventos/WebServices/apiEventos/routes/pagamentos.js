module.exports = (app) => {
    const Pagamentos = app.controllers.pagamentos;

    app.get('/eventos', Pagamentos.listarPagamentos)
    app.post('/eventos', Pagamentos.cadastrarPagamento)
}