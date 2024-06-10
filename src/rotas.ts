import {Router} from 'express'
import { Atualizar, AtualizarEmail, Cadastrar, Detalhar, Excluir, Listar } from './controladores/instrutores'
import { cadastrarAula, excluirAula } from './controladores/aulas'

const rotas = Router()

// Listar todos os instrutores
rotas.get('/instrutores', Listar)

// Detalhar as informações de um instrutor
rotas.get('/instrutores/:id', Detalhar)

// Cadastrar instrutor
rotas.post('/instrutores', Cadastrar)

// Editar um instrutor
rotas.put('/instrutores/:id', Atualizar)
rotas.patch('/instrutores/:id/alterarEmail', AtualizarEmail)

// Excluir um instrutor 
rotas.delete('/instrutores/:id', Excluir)

// Cadastrar uma aula para um instrutor
rotas.post('/instrutores/:id/aulas', cadastrarAula)

// Excluir uma aula para um instrutor
rotas.delete('/instrutores/:id/aulas/:idAula', excluirAula)

export default rotas