import {Request,Response} from 'express'
import bancodedados from '../bancodedados'

export const Listar = (req:Request,res:Response) => {
    return res.status(200).json(bancodedados.instrutores)
}

export const Detalhar = (req:Request,res:Response) => {
    const { id } = req.params 

    const instrutor = bancodedados.instrutores.find((item) => {
        return item.id === Number(id)
    })
    
    if(!instrutor){
        return res.status(404).json({
            mensagem: "Instrutor não encontrado(a)"
        })
    }
        return res.status(200).json(instrutor)
}

export const Cadastrar = (req:Request,res:Response) => {
    const {nome, email} = req.body

    const novoInstrutor = {
        id: bancodedados.proximoIdentificador++,
        nome,
        email
    }
    bancodedados.instrutores.push(novoInstrutor)

    return res.status(201).json(novoInstrutor)
}

export const Atualizar = (req:Request,res:Response) => {
    const {id} = req.params
    const {nome, email} = req.body

    const instrutor = bancodedados.instrutores.find((item) => {
        return item.id === Number(id)
    })
    
    if(!instrutor){
        return res.status(404).json({
            mensagem: "Instrutor não encontrado(a)"
        })
    }
      instrutor.nome = nome
      instrutor.email = email

      return res.status(204).send() 

}

export const AtualizarEmail = (req:Request,res:Response) => {
    const {id} = req.params
    const { email} = req.body

    const instrutor = bancodedados.instrutores.find((item) => {
        return item.id === Number(id)
    })
    
    if(!instrutor){
        return res.status(404).json({
            mensagem: "Instrutor não encontrado(a)"
        })
    }
      instrutor.email = email

      return res.status(204).send() 

}

export const Excluir = (req:Request,res:Response) => {
    const {id} = req.params

    const instrutorIndice = bancodedados.instrutores.findIndex((item) => {
        return item.id === Number(id)
    })
    
    if(instrutorIndice === -1){
        return res.status(404).json({
            mensagem: "Instrutor não encontrado(a)"
        })
    }
    bancodedados.instrutores.splice(instrutorIndice, 1)
      return res.status(204).send() 

}
