import { IPessoaEntity } from "../../1-domain/pessoa"

export interface IPessoaRepository {
  create(props: IPessoaEntity): Promise<IPessoaEntity>
  findOne(prop: number): Promise<IPessoaEntity | undefined>
  findName(prop: string): Promise<IPessoaEntity[]>
  findAll(): Promise<IPessoaEntity[]>
  update(
    props: Omit<IPessoaEntity, "fone"> & { id: number },
  ): Promise<IPessoaEntity>
}
