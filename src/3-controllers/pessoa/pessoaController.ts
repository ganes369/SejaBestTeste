import { IPessoaEntity } from "../../1-domain/pessoa"
import { UseCasesPessoa } from "../../2-business/useCases/pessoa/pessoaUseCase"
import { FoneRepository } from "../../3-frameworks/repositories/foneRepository"
import { PessoaRepository } from "../../3-frameworks/repositories/pessoaRespository"

export class PessoaController {
  private repoPessoa: PessoaRepository
  private useCase: UseCasesPessoa
  private repoFone: FoneRepository
  constructor() {
    this.repoPessoa = new PessoaRepository()
    this.repoFone = new FoneRepository()
    this.useCase = new UseCasesPessoa(this.repoPessoa, this.repoFone)
  }

  async create(props: IPessoaEntity): Promise<IPessoaEntity> {
    return this.useCase.create(props)
  }

  async listAll(): Promise<IPessoaEntity[]> {
    return this.useCase.findAll()
  }

  async findOne(prop: number): Promise<IPessoaEntity> {
    return this.useCase.findOne(prop)
  }

  async update(
    prop: Partial<IPessoaEntity> & { id: number },
  ): Promise<Partial<IPessoaEntity>> {
    return this.useCase.update(prop)
  }

  async findName(prop: string): Promise<IPessoaEntity[]> {
    return this.useCase.findName(prop)
  }
}
