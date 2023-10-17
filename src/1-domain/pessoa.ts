/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FoneEntity, IFoneEntity } from "./fone"

export interface IPessoaEntity {
  nome: string
  sobrenome: string
  fone?: IFoneEntity
}

export class PessoaEntity {
  // @ts-ignore
  private nome: string
  // @ts-ignore
  private sobrenome: string
  // @ts-ignore
  private fone: FoneEntity

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
      this.fone = new FoneEntity(props?.fone)
    }

    return this
  }

  public getPessoa(): this {
    return this
  }
}
