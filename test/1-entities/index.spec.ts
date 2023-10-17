import { IFoneEntity } from "../../src/1-domain/fone"
import { PessoaEntity } from "../../src/1-domain/pessoa"

describe("Test Suite for Entity Pessoa", () => {
  let entity: PessoaEntity
  let fone: IFoneEntity
  beforeAll(() => {
    fone = {
      numero: "999151386",
      celular: true,
      codigo: "88",
    }
    entity = new PessoaEntity({
      nome: "test",
      sobrenome: "unitario",
      fone,
    })
  })

  test("should create a person entity ", () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const expected = entity
    expect(expected).toHaveProperty("nome")
    expect(expected).toHaveProperty("sobrenome")
    expect(expected).toHaveProperty("fone")
  })

  test("should update properties", () => {
    const newEntity = new PessoaEntity({
      nome: "teste",
      sobrenome: "unitario",
      fone,
    })
    newEntity.setPessoa({
      nome: "teste",
      sobrenome: "update",
    })

    expect(newEntity.getPessoa()).toHaveProperty("nome")
    expect(newEntity.getPessoa()).toHaveProperty("sobrenome")
  })
})
