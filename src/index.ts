import { FoneEntity } from "./1-entities/fone"
import { PessoaEntity } from "./1-entities/pessoa"

const g = FoneEntity.create({
    celular: true, codigo: 'd', numero: 'jk',
})
const d = PessoaEntity.create({
    nome: 'k', sobrenome: 'j',
    fone: g
})

console.log(d)
