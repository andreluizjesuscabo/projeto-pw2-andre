const express = require('express');

const fabricanteModel = require('../model/fabricanteModel');

const router = express.Router();

router.post('/fabricante/inserir', (req, res) => {

    let nome_fabricante = req.body.nome_fabricante;
    let cep_fabricante = req.body.cep_fabricante;
    let cnpj_fabricante = req.body.cnpj_fabricante;


    fabricanteModel.create(
        {
            nome_fabricante,
            cep_fabricante,
            cnpj_fabricante
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

router.get('/fabricante/selecionar', (req, res) => {
    fabricanteModel.findAll()
        .then(
            (fabricantes) => {
                //console.log(categorias);
                res.json(fabricantes);
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

router.put('/fabricante/alterar', (req, res) => {

    let id = req.body.id;
    let nome_fabricante = req.body.nome_fabricante;

    fabricanteModel.update(
        { nome_fabricante },
        { where: { id } }
    ).then(
        () => {
            return res.status(200).json({
                errorStatus: false,
                mensageStatus: 'FABRICANTE ALTERADO COM SUCESSO'
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

router.delete('/fabricante/excluir/:id', (req, res) => {

    let id = req.params.id;
    console.log('ID: ' + id);

    fabricanteModel.destroy(
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