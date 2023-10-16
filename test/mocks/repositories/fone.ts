/* eslint-disable @typescript-eslint/no-unused-vars */
import { IFoneEntity } from "../../../src/1-domain/fone"
import { IFoneRepository } from "../../../src/2-business/repositories/foneRepository"

export class mockRepositoryFone implements IFoneRepository {
  update(_props: Partial<IFoneEntity> & { pessoa: number }): Promise<null> {
    throw new Error("Method not implemented.")
  }

  create(
    _props: Partial<IFoneEntity> & { pessoa: number },
  ): Promise<IFoneEntity> {
    throw new Error("Method not implemented.")
  }
}
