import { IFoneEntity } from "../../../1-domain/fone"
import { PessoaEntity } from "../../../1-domain/pessoa"
import {
  IInputCreatePessoaDto,
  IInputFindOnePessoaDto,
  IInputUpdatePessoaDto,
  IOutputCreatePessoaDto,
  IOutputFindAllDto,
  IOutputFindOnePessoaDto,
  IOutputUpdatePessoaDto,
} from "../../dto/pessoa/create"
import { IFoneRepository } from "../../repositories/foneRepository"
import { IPessoaRepository } from "../../repositories/pessoaRepository"

export class ServicePessoa {
  private repositoryPessoa: IPessoaRepository
  private respositoryFone: IFoneRepository

  constructor(
    repositoryPessoa: IPessoaRepository,
    respositoryFone: IFoneRepository,
  ) {
    this.repositoryPessoa = repositoryPessoa
    this.respositoryFone = respositoryFone
  }
  async create(props: IInputCreatePessoaDto): Promise<IOutputCreatePessoaDto> {
    const result = await this.repositoryPessoa.create(props)
    return new PessoaEntity(result).getPessoa()
  }

  async findOne(
    prop: IInputFindOnePessoaDto,
  ): Promise<IOutputFindOnePessoaDto> {
    return this.repositoryPessoa.findOne(prop)
  }

  async findName(prop: string): Promise<IOutputFindOnePessoaDto[]> {
    return this.repositoryPessoa.findName(prop)
  }

  async findAll(): Promise<IOutputFindAllDto> {
    return this.repositoryPessoa.findAll()
  }

  async update(props: IInputUpdatePessoaDto): Promise<IOutputUpdatePessoaDto> {
    const find = await this.repositoryPessoa.findOne(props.id)

    if (!find) {
      return undefined
    }

    const pessoa = new PessoaEntity(find)
    let fone: IFoneEntity
    if (find.fone) {
      const { celular, codigo, numero } = props.fone ?? {}
      this.respositoryFone.update({ pessoa: props.id, celular, codigo, numero })
      fone = { celular, codigo, numero }
    } else {
      const { celular, codigo, numero } = props.fone ?? {}
      this.respositoryFone.create({ celular, codigo, numero, pessoa: props.id })
      fone = { celular, codigo, numero }
    }
    const { id, nome, sobrenome } = props

    this.repositoryPessoa.update({ id, nome, sobrenome })
    pessoa.setPessoa({ nome, sobrenome, fone })
    return pessoa.getPessoa()
  }
}
