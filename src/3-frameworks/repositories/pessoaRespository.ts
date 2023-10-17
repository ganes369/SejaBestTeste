import { Includeable } from "sequelize"
import { IPessoaEntity, PessoaEntity } from "../../1-domain/pessoa"
import { IPessoaRepository } from "../../2-business/repositories/pessoaRepository"
import { PessoaModel } from "../models/pessoaModel"

export class PessoaRepository implements IPessoaRepository {
  private include: Includeable[]

  constructor() {
    this.include = [
      {
        association: "fone",
      },
    ]
  }
  async create(props: IPessoaEntity): Promise<IPessoaEntity> {
    const associationInclude =
      props.fone !== undefined ? [{ association: "fone" }] : []

    const result = await PessoaModel.create(props, {
      include: associationInclude,
    })
    return result.get({ plain: true })
  }

  async findOne(prop: number): Promise<IPessoaEntity> {
    const result = await PessoaModel.findOne({
      where: { id: prop },
      include: this.include,
      limit: 1,
    })
    return result ? result.get({ plain: true }) : undefined
  }

  async findName(prop: string): Promise<IPessoaEntity[]> {
    const result = await PessoaModel.findAll({
      where: { nome: prop },
      include: this.include,
    })

    return result.map((elem) => elem.get({ plain: true }))
  }

  async findAll(): Promise<PessoaEntity[]> {
    const result = await PessoaModel.findAll({
      include: this.include,
    })
    return result.map((elem) => new PessoaEntity(elem.get({ plain: true })))
  }

  async update(
    props: Omit<IPessoaEntity, "fone"> & { id: number },
  ): Promise<[]> {
    const { id, ...newProps } = props
    await PessoaModel.update(newProps, {
      where: { id },
      returning: true,
      limit: 1,
    })
    return []
  }
}
