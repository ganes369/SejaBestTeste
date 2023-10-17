import { IPessoaEntity, PessoaEntity } from "../../1-domain/pessoa"
import { IFoneRepository } from "../../2-business/repositories/foneRepository"
import { IPessoaRepository } from "../../2-business/repositories/pessoaRepository"
import { ServicePessoa } from "../../2-business/services/pessoa/pessoaService"
import { FoneRepository } from "../../3-frameworks/repositories/foneRepository"
import { PessoaRepository } from "../../3-frameworks/repositories/pessoaRespository"

export class PessoaController {
  private repoPessoa: IPessoaRepository
  private service: ServicePessoa
  private repoFone: IFoneRepository
  constructor() {
    this.repoPessoa = new PessoaRepository()
    this.repoFone = new FoneRepository()
    this.service = new ServicePessoa(this.repoPessoa, this.repoFone)
  }

  async create(props: IPessoaEntity): Promise<PessoaEntity> {
    return this.service.create(props)
  }

  async listAll(): Promise<PessoaEntity[]> {
    return this.service.findAll()
  }

  async findOne(prop: number): Promise<IPessoaEntity> {
    return this.service.findOne(prop)
  }

  async update(
    prop: Partial<IPessoaEntity> & { id: number },
  ): Promise<Partial<PessoaEntity>> {
    return this.service.update(prop)
  }

  async findName(prop: string): Promise<IPessoaEntity[]> {
    return this.service.findName(prop)
  }
}
