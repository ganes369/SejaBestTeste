import { FoneEntity, IFoneEntity } from "../../src/1-domain/fone"
import { IPessoaEntity, PessoaEntity } from "../../src/1-domain/pessoa"

describe("Test Suite for Entity Pessoa", () => {
  let entity: IPessoaEntity
  let fone: IFoneEntity
  beforeAll(() => {
    fone = new FoneEntity({
      numero: "999151386",
      celular: true,
      codigo: "88",
    })
    entity = new PessoaEntity({
      nome: "test",
      sobrenome: "unitario",
      fone,
    })
  })

  test("should create a person entity ", () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { fone, ...expected } = entity

    expect(expected.nome).toBe("test")
    expect(expected.sobrenome).toBe("unitario")
    expect(expected).not.toHaveProperty("fone")
  })

  test("should create a PessoaEntity instance with fone", () => {
    const expected = entity //new PessoaEntity({ ...entity, fone })

    expect(expected).toBeInstanceOf(PessoaEntity)
    expect(expected.nome).toBe("test")
    expect(expected.sobrenome).toBe("unitario")
    expect(expected.fone?.celular).toBeTruthy()
    expect(expected.fone?.codigo).toBe("88")
    expect(expected.fone?.numero).toBe("999151386")
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

    expect(newEntity.nome).toEqual("teste")
    expect(newEntity.sobrenome).toEqual("update")
    expect(newEntity.fone).toBeDefined()
  })
})
