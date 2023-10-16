import { IFoneEntity } from "../../1-domain/fone"

export interface IFoneRepository {
  update(props: Partial<IFoneEntity> & { pessoa: number }): Promise<null>
  create(props: Partial<IFoneEntity> & { pessoa: number }): Promise<IFoneEntity>
}
