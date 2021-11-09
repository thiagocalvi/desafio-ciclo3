const express = require('express');
const cors = require('cors');
const app = express();
const models = require('./models');
// const {Sequelize} = require('./models');
// const { where } = require('sequelize/type');

app.use(cors());
app.use(express.json());

let cliente = models.Cliente;
let pedido = models.Pedido;
let compra = models.Compra;
let servico = models.Servico;
let produto = models.Produto;
let itempedido = models.ItemPedido;
let itemcompra = models.ItemCompra;

//Pagina inicial
app.get('/', function(req, res){
    res.send('Sejá bem vindo a Services TIAcademy!')
});


//INSERIR
//Novo cliente
app.post('/cliente', async(req, res)=>{
    await cliente.create(
        req.body
    ).then(cli=>{
        return res.json({
            error: false,
            massage: 'Cliente criado com sucesso!',
            cli
        });
    }).catch(erro=>{
        return res.status(400).json({
            error: true,
            massage: 'Erro: não foi possivel criar o cliente'
        });
    });
});

//Novo serviço
app.post('/servico', async(req, res)=>{
    await servico.create(
        req.body
    ).then(serv=>{
        return res.json({
            error: false,
            massage: 'Serviço registrado com sucesso!',
            serv
        });
    }).catch(erro=>{
        return res.status(400).json({
            error: true,
            massage: 'Erro: não foi pissivel registrar o pedido.'
        });
    });
});

//Novo pedido
app.post('/pedido', async(req,res)=>{
    await pedido.create(
        req.body
    ).then(ped=>{
        return res.json({
            error: false,
            massage: 'Pedido registrado com sucesso!',
            ped
        });
    }).catch(erro=>{
        return res.status(400).json({
            error: true,
            massage: 'Erro: não foi pissivel registrar o pedido.'
        });
    });
});

//Novo produto
app.post('/servico', async(req,res)=>{
    await servico.create(
        req.body
    ).then(serv=>{
        return res.json({
            error: false,
            massage: 'Serviço registrado com sucesso!',
            serv
        });
    }).catch(erro=>{
        return res.status(400).json({
            error: true,
            massage: 'Erro: não foi possivel registrar o serviço.'
        });
    });
});

//Novo itempedido
app.post('/itempedido', async(req, res)=>{
    await itempedido.create(
        req.body
    ).then(itp=>{
        return res.json({
            error: false,
            massage: 'Item Pedido criado com sucesso!',
            itp
        });
    }).catch(erro=>{
        return res.status(400).json({
            error: true,
            massage: 'Erro: foi imposivel criar o Item Pedido'
        });
    });
});

//Nova compra
app.post('/compra', async(req, res)=>{
    await compra.create(
        req.body
    ).then(cp=>{
        return res.json({
            error: false,
            massage: 'Compra criada com sucesso!',
            cp
        });
    }).catch(erro=>{
        return res.status(400).json({
            error: true,
            massage: 'Erro: não foi possivel criar compra.'
        });
    });
});

//Novo produto
app.post('/produto', async(req, res)=>{
    await pedido.create(
        req.body
    ).then(ped=>{
        return res.json({
            error: false,
            massage: 'Produto adicionado com sucusso!',
            ped
        });
    }).catch(erro=>{
        return res.status(400).json({
            error: true,
            massage: 'Erro: não foi possivel adicionar produto.'
        });
    });
});

//Novo itemcompra
app.post('/itemcompra', async(req, res)=>{
    await itemcompra.create(
        req.body
    ).then(itc=>{
        return res.json({
            error: false,
            massage: 'Item Compra craido com sucesso!'
        });
    }).catch(erro=>{
        return res.status(400).json({
            error: true,
            massage: 'Erro: não foi possivel criar Item Compra.'
        });
    });
});


//LISTAR
//Lista todos os clientes
app.get('/listar-clientes', async(req, res)=>{
    await cliente.findAll()
    .then(cli=>{
        return res.json({
            error: false,
            cli
        });
    }).catch(erro=>{
        return res.status(400).json({
            error: true,
            massage: 'Erro de conexão'
        });
    });
});

//Lista pedidos
app.get('/pedidos', async(req, res)=>{
    await pedido.findAll()
    .then(ped=>{
        return res.json({
            error: false,
            ped
        });
    }).catch(erro=>{
        return res.status(400).json({
            error: true,
            massage: 'Erro de conexão'
        });
    });
});

//Listar serviços
app.get('/listar-servicos', async(req, res)=>{
    await servico.findAll()
    .then(ped=>{
        return res.json({
            error: false,
            ped
        });
    }).catch(erro=>{
        return res.status(400).json({
            error: true,
            massage: 'Erro de conexão'
        });
    });
});

//Listar itempedido
app.get('/itempedidos', async(req, res)=>{
    await itempedido.findAll()
    .then(itp=>{
        return res.json({
            error: false,
            itp
        });
    }).catch(erro=>{
        return res.status(400).json({
            error: true,
            massage: 'Erro de conexão.'
        });
    });
});

//Listar compras
app.get('/compras', async(req, res)=>{
    await compra.findAll()
    .then(cp=>{
        return res.json({
            error: false,
            cp
        });
    }).catch(erro=>{
        return res.status(400).json({
            error: true,
            massage: 'Erro de conexão.'
        });
    });
});

//Lista produtos
app.get('/produtos', async(req, res)=>{
    await produto.findAll()
    .then(pro=>{
        return res.json({
            error: false,
            pro
        });
    }).catch(erro=>{
        return res.status(400).json({
            error: true,
            massage: 'Erro de conexão.'
        });
    });
});

//Listar itemcompras
app.get('/itemcompras', async(req, res)=>{
    await itemcompra.findAll()
    .then(itc=>{
        return res.json({
            error: false,
            itc
        });
    }).catch(erro=>{
        return res.status(400).json({
            error: true,
            massage: 'Erro de conexão.'
        });
    });
});


//ATUALIZAR
//Atualiza cliente
app.put('/atualizarcliente/:id', async(req, res)=>{
    const cli = {
        nome: req.body.nome,
        endereco: req.body.endereco,
        cidade: req.body.cidade,
        uf: req.body.uf,
        nascimento: req.body.nascimento
    }
    if(!await cliente.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            massage: 'Cliente não cadastrado.'
        });
    }
    await cliente.update(cli, {
        where: ({id: req.params.id})
    }).then(cli=>{
        return res.json({
            error: false,
            massage: 'Cliente alterado com sucesso!',
            cli
        });
    }).catch(erro=>{
        return res.status(400).json({
            error: true,
            massage: 'Erro: não foi possivel alterar o cliente'
        });
    });
});

//Atualiza pedido
app.put('/cliente/:id/pedido/', async(req, res)=>{
    const ped = {
        ClienteId: req.body.ClienteId,
        dataPedido: req.body.dataPedido
    }
    if(!await pedido.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            massage: 'Pedido não existe.'
        });
    }
    await pedido.update(ped, {
        // where: Sequelize.and({id: req.params.id}, {ClienteId: req.body.ClienteId})
    }).then(ped=>{
        return res.json({
            error: false,
            massage: 'Pedido alterado com sucesso!',
            ped
        });
    }).catch(erro=>{
        return res.status(400).json({
            error: true,
            massage: 'Erro: não foi possivel alterar o pedido.'
        });
    });
});

//Atualiza serviço
app.put('/cliente/:id/servico/', async(req, res)=>{
    const serv = {
        ClienteId: req.body.ClienteId,
        nome: req.body.nome,
        descricao: req.body.descricao
    }
    if(!await servico.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            massage: 'Serviço não existe.'
        });
    }
    await servico.update(serv, {
        // where: Sequelize.and({id: req.params.id}, {ClienteId: req.body.ClienteId})
    }).then(serv=>{
        return res.json({
            error: false,
            massage: 'Serviço alterado com sucesso!',
            serv
        });
    }).catch(erro=>{
        return res.status(400).json({
            error: true,
            massage: 'Erro: não foi possivel alterar o serviço.'
        });
    });
});

//Atuliza compra
app.put('/cliente/:id/compras', async(req, res)=>{
    const cp = {
        data: req.body.data,
        ClienteId: req.params.id
    }
    if(!await cliente.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            massage: 'Cliente não existe.'
        });
    };

    await compra.update(com,{
        // where: Sequelize.and({ClienteId: req.params.id}, {id: req.body.id})
    }).then(compras=>{
        return res.json({
            error: false,
            massage: 'Compra foi alterado com sucesso',
            compras
        });
    }).catch(erro=>{
        return res.status(400).json({
            error: true,
            massage: 'Erro: não  foi pissivel alterar compra'
        });
    });
});

//Atualiza produto
app.put('/cliente/:id/produtos', async(req, res)=>{
    const pro = {
        nome: req.body.nome,
        descricao: req.body.descricao,
        ClienteId: req.params.id
    }
    if(!await cliente.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            massage: 'Cliente não existe.'
        });
    };

    await compra.update(pro,{
        // where: Sequelize.and({ClienteId: req.params.id}, {id: req.body.id})
    }).then(produtos=>{
        return res.json({
            error: false,
            massage: 'Produto foi alterado com sucesso',
            produtos
        });
    }).catch(erro=>{
        return res.status(400).json({
            error: true,
            massage: 'Erro: não  foi pissivel alterar produto'
        });
    });
});

//Atualiza item pedido
app.put('/pedidos/:id/editaritem', async(req, res)=>{
    const item  = {
        valor: req.body.valor,
        quantidade: req.body.quantidade
    }
    if(!await pedido.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            massage: 'Pedido não foi encontrado'
        });
    };
    if(!await servico.findByPk(req.body.ServicoId)){
        return res.status(400).json({
            error: true,
            massage: 'Serviço não foi encontrado'
        });
    };
    await itempedido.update(item, {
        // where: Sequelize.and({ServicoId: req.body.ServicoId}, {PedidoId: req.params.id})
    }).then(function(itens){
        return res.json({
            error: false,
            massage: 'Pedido foi alterado com sucesso',
            itens
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            massage: 'Não foi possivel alterar pedido'
        });
    });
});

//Atualiza item compra
app.put('/compras/:id/editaritem', async(req, res)=>{
    const item  = {
        valor: req.body.valor,
        quantidade: req.body.quantidade
    }
    if(!await compra.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            massage: 'Compra não foi encontrada'
        });
    };
    if(!await produto.findByPk(req.body.ServicoId)){
        return res.status(400).json({
            error: true,
            massage: 'Produto não foi encontrado'
        });
    };
    await itemcompra.update(item, {
        // where: Sequelize.and({ProdutoId: req.body.ProdutoId}, {CompraId: req.params.id})
    }).then(function(itens){
        return res.json({
            error: false,
            massage: 'Item compra foi alterado com sucesso',
            itens
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            massage: 'Não foi possivel alterar'
        });
    });
});

//Excluir
//Deleta o cliente e tudo relacionado a ele
app.get('/excluirclinte', async(req, res)=>{
    await cliente.destroy({ 
        // where: {id: req.body.id}
    }).then(()=>{
        return res.json({
            error: false,
            massage: 'Cliente excluido com sucesso!'
        });
    }).catch(erro=>{
        return res.status(400).json({
            error: true,
            massage: 'Erro: não foi possivel escluir o cliente'
        });
    });
   
});

let port = process.env.PORT || 3001;
app.listen(port,(req, res)=>{
    console.log('Servido ativo: http://localhost:3001');
});