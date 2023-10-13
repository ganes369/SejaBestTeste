import { FoneEntity, IFoneEntity } from "./fone"

export interface IPessoaEntity {
  nome: string
  sobrenome: string
  fone?: IFoneEntity
}

export class PessoaEntity {
  nome: string
  sobrenome: string
  fone: IFoneEntity

  constructor(props: IPessoaEntity) {
    this.nome = props.nome
    this.sobrenome = props.sobrenome
    this.fone = props.fone ? new FoneEntity(props?.fone) : undefined
  }

  public setPessoa(props: IPessoaEntity): this {
    if (props.nome) {
      this.nome = props.nome
    }
    if (props.sobrenome) {
      this.sobrenome = props.sobrenome
    }
    if (props.fone) {
      this.fone = props.fone
    }

    return this
  }

  getPessoa(): IPessoaEntity {
    return this
  }
}
