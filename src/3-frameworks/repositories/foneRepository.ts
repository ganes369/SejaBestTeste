import { FoneEntity, IFoneEntity } from "../../1-domain/fone"
import { IFoneRepository } from "../../2-business/repositories/foneRepository"
import { FoneModel } from "../models/foneModel"

export class FoneRepository implements IFoneRepository {
  async update(
    props: Partial<IFoneEntity> & { pessoa: number },
  ): Promise<null> {
    const { pessoa, ...newProps } = props
    await FoneModel.update(newProps, {
      where: { pessoa },
      returning: true,
      limit: 1,
    })
    return null // FoneEntity.create(updatedRecords[0].get({ plain: true }))
  }

  async create(
    props: Partial<IFoneEntity> & { pessoa: number },
  ): Promise<IFoneEntity> {
    const result = await FoneModel.create(props)
    return FoneEntity.create(result.get({ plain: true }))
  }
}
