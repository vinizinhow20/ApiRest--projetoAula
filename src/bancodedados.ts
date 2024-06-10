type TInstrutores = {
    id:number,
    nome:string,
    email:string
    aulas?:TAulas[]
}

type TIdentificador = number

type TAulas = {
    id:number,
    nome:string
}

type TBancodedados = {
    proximoIdentificador:TIdentificador,
    proximoIdentificadorAula: TIdentificador,
    instrutores: TInstrutores[]
}

 const bancodedados: TBancodedados= {
    proximoIdentificador: 3, 
    proximoIdentificadorAula: 2,
    instrutores: [
        {
            id: 1,
            nome: 'Guido',
            email: 'Guido@email.com',
            aulas:[
                {id:1, nome: "Aula de API REST"}
            ]
        },
        {
            id: 2,
            nome: 'Maria',
            email: 'Maria@email.com',
            aulas:[]
        }
    ]

}

export default bancodedados
