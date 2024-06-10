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
