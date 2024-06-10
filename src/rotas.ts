import {Router} from 'express'
import { Cadastrar, Detalhar, Listar } from './controladores/instrutores'

const rotas = Router()

// Listar todos os instrutores
rotas.get('/instrutores', Listar)

// Detalhar as informações de um instrutor
rotas.get('/instrutores/:id', Detalhar)

// Cadastrar instrutor
rotas.post('/instrutores', Cadastrar)
// Editar um instrutor
// Excluir um instrutor 

// Cadastrar uma aula para um instrutor
// Excluir uma aula para um instrutor

export default rotas