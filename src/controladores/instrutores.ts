import {Request,Response} from 'express'

type TInstrutores = {
    id:number,
    nome:string,
    email:string
}
const instrutores:TInstrutores[] = [
    {
        id: 1,
        nome: 'Guido',
        email: 'Guido@email.com'
    },
    {
        id: 2,
        nome: 'Maria',
        email: 'Maria@email.com'
    }
]

export const Listar = (req:Request,res:Response) => {
    return res.status(200).json(instrutores)
}

export const Detalhar = (req:Request,res:Response) => {
    const { id } = req.params 

    const instrutor = instrutores.find((item) => {
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
        id: 3,
        nome,
        email
    }
    instrutores.push(novoInstrutor)

    return res.status(201).json(novoInstrutor)
}


