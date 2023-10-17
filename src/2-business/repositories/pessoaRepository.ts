import { IPessoaEntity, PessoaEntity } from "../../1-domain/pessoa"

export interface IPessoaRepository {
  create(props: IPessoaEntity): Promise<IPessoaEntity>
  findOne(prop: number): Promise<IPessoaEntity>
  findName(prop: string): Promise<IPessoaEntity[]>
  findAll(): Promise<PessoaEntity[]>
  update(props: Omit<IPessoaEntity, "fone"> & { id: number }): Promise<[]>
}
