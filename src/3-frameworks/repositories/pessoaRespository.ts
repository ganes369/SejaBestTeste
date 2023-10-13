import { IPessoaEntity, PessoaEntity } from "../../1-domain/pessoa"
import { IPessoaRepository } from "../../2-business/repositories/pessoaRepository"
import { PessoaModel } from "../models/pessoaModel"

export class PessoaRepository implements IPessoaRepository {
  async create(props: IPessoaEntity): Promise<PessoaEntity> {
    const associationInclude =
      props.fone !== undefined ? [{ association: "fone" }] : []

    const result = await PessoaModel.create(props, {
      include: associationInclude,
    })
    return new PessoaEntity(result.get({ plain: true }))
  }

  async findOne(prop: number): Promise<IPessoaEntity> {
    const result = await PessoaModel.findOne({
      where: { id: prop },
      include: [
        {
          association: "fone",
        },
      ],
      limit: 1,
    })
    return result ? PessoaEntity.create(result.get({ plain: true })) : undefined
  }

  async findName(prop: string): Promise<any[]> {
    const result = await PessoaModel.findAll({
      where: { nome: prop },
      include: [
        {
          association: "fone",
        },
      ],
    })

    return result.map((elem) => PessoaEntity.create(elem.get({ plain: true })))
  }

  async findAll(): Promise<IPessoaEntity[]> {
    const result = await PessoaModel.findAll({
      include: [
        {
          association: "fone",
        },
      ],
    })
    return result.map((elem) => PessoaEntity.create(elem.get({ plain: true })))
  }

  async update(
    props: Omit<IPessoaEntity, "fone"> & { id: number },
  ): Promise<any> {
    const { id, ...newProps } = props
    const [, updatedRecords] = await PessoaModel.update(newProps, {
      where: { id },
      returning: true,
      limit: 1,
    })
    return updatedRecords
  }
}
