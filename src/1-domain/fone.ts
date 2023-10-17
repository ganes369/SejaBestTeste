/* eslint-disable @typescript-eslint/ban-ts-comment */
export type IFoneEntity = {
  codigo: string
  numero: string
  celular: boolean
}

export class FoneEntity {
  // @ts-ignore
  private codigo: string
  // @ts-ignore
  private numero: string
  // @ts-ignore
  private celular: boolean

  constructor(props: IFoneEntity) {
    this.codigo = props.codigo
    this.numero = props.numero
    this.celular = props.celular
  }

  public setFone(props: IFoneEntity): this {
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

  public getFone(): this {
    return this
  }
}
