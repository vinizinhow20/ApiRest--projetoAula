import {Router} from 'express'
import { Listar } from './controladores/instrutores'



const rotas = Router()

// Listar todos os instrutores
rotas.get('/instrutores', Listar)

// Listar todos os instrutores
// Detalhar as informações de um instrutor
// Cadastrar instrutor
// Editar um instrutor
// Excluir um instrutor 

// Cadastrar uma aula para um instrutor
// Excluir uma aula para um instrutor

export default rotas