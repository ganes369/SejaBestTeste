import { IPessoaEntity } from "../../../1-domain/pessoa"

export type IInputCreatePessoaDto = IPessoaEntity
export type IOutputCreatePessoaDto = IPessoaEntity

export type IInputFindOnePessoaDto = number
export type IOutputFindOnePessoaDto = IPessoaEntity

export type IInputUpdatePessoaDto = Partial<IPessoaEntity> & { id: number }
export type IOutputUpdatePessoaDto = Partial<IPessoaEntity>
