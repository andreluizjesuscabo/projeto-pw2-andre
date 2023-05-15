const express = require('express');

const produtoModel = require('../model/produtoModel');

const router = express.Router();

router.post('/produto/inserir', (req, res) => {

    let nome_produto = req.body.nome_produto;
    let numserie_produto = req.body.numserie_produto;
    let marca_produto = req.body.marca_produto;
    let modelo_produto = req.body.modelo_produto;
    let quantidade_produto = req.body.quantidade_produto;
    let valor_produto = req.body.valor_produto;


    produtoModel.create(
        {
            nome_produto,
            numserie_produto,
            marca_produto,
            modelo_produto,
            quantidade_produto,
            valor_produto
        }
    ).then(
        () => {
            return res.status(201).json({
                errorStatus: false,
                mensageStatus: 'DADOS INSERIDOS COM SUCESSO'
            });
        }
    ).catch(
        (error) => {
            return res.status(500).json({
                errorStatus: true,
                mensageStatus: error
            });
        }
    );
});

router.get('/produto/selecionar', (req, res) => {
    produtoModel.findAll()
        .then(
            (produtos) => {
                //console.log(categorias);
                res.json(produtos);
            }
        ).catch(
            (error) => {
                return res.status(500).json({
                    errorStatus: true,
                    mensageStatus: error
                });
            }
        );
});

router.put('/produto/alterar', (req, res) => {
    let id = req.body.id;
    let nome_produto = req.body.nome_produto;
    let numserie_produto = req.body.numserie_produto;
    let marca_produto = req.body.marca_produto;
    let modelo_produto = req.body.modelo_produto;
    let quantidade_produto = req.body.quantidade_produto;
    let valor_produto = req.body.valor_produto;

    produtoModel.update(
        {
            nome_produto,
            numserie_produto,
            marca_produto,
            modelo_produto,
            quantidade_produto,
            valor_produto
        },
        { where: { id } }
    ).then(
        () => {
            return res.status(200).json({
                errorStatus: false,
                mensageStatus: 'MODELO ALTERADO COM SUCESSO'
            });
        }
    ).catch(
        (error) => {
            return res.status(500).json({
                errorStatus: true,
                mensageStatus: error
            });
        }
    );
});

router.delete('/produto/excluir/:id', (req, res) => {

    let id = req.params.id;
    console.log('ID: ' + id);

    produtoModel.destroy(
        { where: { id } }
    ).then(
        () => {
            return res.status(200).json({
                errorStatus: false,
                mensageStatus: 'EXCLUSÃO FEITA COM SUCESSO'
            });
        }
    ).catch(
        (error) => {
            return res.status(500).json({
                errorStatus: true,
                mensageStatus: error
            });
        }
    );
});

module.exports = router;