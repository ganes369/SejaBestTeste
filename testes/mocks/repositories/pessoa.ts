import { IPessoaEntity } from "../../../src/1-domain/pessoa"
import { IPessoaRepository } from "../../../src/2-business/repositories/pessoaRepository"

export class mockRepositoryPessoa implements IPessoaRepository {
  create(_props: any): Promise<IPessoaEntity> {
    throw new Error("Method not implemented.")
  }
  findOne(_prop: number): Promise<IPessoaEntity | undefined> {
    throw new Error("Method not implemented.")
  }
  findName(_prop: string): Promise<IPessoaEntity[]> {
    throw new Error("Method not implemented.")
  }
  findAll(): Promise<IPessoaEntity[]> {
    throw new Error("Method not implemented.")
  }

  update(
    _props: Partial<IPessoaEntity> & { id: number },
  ): Promise<IPessoaEntity> {
    throw new Error("Method not implemented.")
  }
}
