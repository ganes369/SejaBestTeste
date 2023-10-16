export interface IFoneEntity {
  codigo: string
  numero: string
  celular: boolean
}

export class FoneEntity {
  codigo: string
  numero: string
  celular: boolean

  constructor(props: IFoneEntity) {
    this.codigo = props.codigo
    this.numero = props.numero
    this.celular = props.celular
  }

  setFone(props: IFoneEntity): IFoneEntity {
    if (props.codigo) {
      this.codigo = props.codigo
    }
    if (props.numero) {
      this.numero = props.numero
    }
    if (props.celular) {
      this.celular = props.celular
    }

    return this
  }

  getFone(): IFoneEntity {
    return this
  }
}
