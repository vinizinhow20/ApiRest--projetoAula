import {Router} from 'express'
import { Detalhar, Listar } from './controladores/instrutores'

const rotas = Router()

// Listar todos os instrutores
rotas.get('/instrutores', Listar)

// Detalhar as informações de um instrutor
rotas.get('/instrutores/:id', Detalhar)

// Cadastrar instrutor
// Editar um instrutor
// Excluir um instrutor 

// Cadastrar uma aula para um instrutor
// Excluir uma aula para um instrutor

export default rotas