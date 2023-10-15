import { ServicePessoa } from "../../../src/2-business/services/pessoa/pessoaService"
import { mockRepositoryPessoa } from "../../mocks/repositories/pessoa"
import { PessoaEntity } from "../../../src/1-domain/pessoa"
import { CustomError } from "../../../src/2-business/erros/customError"
import { mockRepositoryFone } from "../../mocks/repositories/fone"

const repositoriesPessoa = new mockRepositoryPessoa()
const respositoryFone = new mockRepositoryFone()
const service = new ServicePessoa(repositoriesPessoa, respositoryFone)

describe("Test Suite for service create pessoa", () => {
  beforeAll(() => {
    jest.clearAllMocks()
  })

  test("should create a person contact", async () => {
    const spy = jest
      .spyOn(repositoriesPessoa, "create")
      .mockReturnValue(
        Promise.resolve(
          new PessoaEntity({ nome: "test", sobrenome: "unitario" }),
        ),
      )

    const result = await service.create({
      nome: "test",
      sobrenome: "unitario",
    })

    expect(result).toBeInstanceOf(PessoaEntity)
    expect(spy).toBeCalled()
    expect(result.nome).toBe("test")
    expect(result.sobrenome).toBe("unitario")
  })

  test("should handle exception when repository create method throws", async () => {
    jest
      .spyOn(repositoriesPessoa, "create")
      .mockRejectedValue(new CustomError("Some error message"))
    await expect(
      repositoriesPessoa.create({ nome: "test", sobrenome: "unitario" }),
    ).rejects.toThrow(new CustomError("Some error message"))
  })
})

describe("Test Suite for service findOne pessoa", () => {
  beforeAll(() => {
    jest.clearAllMocks()
  })

  test("should find a person entity ", async () => {
    const spy = jest
      .spyOn(repositoriesPessoa, "findOne")
      .mockReturnValue(
        Promise.resolve(
          new PessoaEntity({ nome: "test", sobrenome: "unitario" }),
        ),
      )

    const result = await service.findOne(1)

    expect(result).toBeInstanceOf(PessoaEntity)
    expect(spy).toBeCalled()
    expect(result.nome).toBe("test")
    expect(result.sobrenome).toBe("unitario")
  })

  test("should handle exception when repository findOne method throws", async () => {
    jest
      .spyOn(repositoriesPessoa, "findOne")
      .mockRejectedValue(new CustomError("Some error message"))

    try {
      await service.findOne(1)
      // Se o método create não lançar uma exceção, esta linha falhará no teste
      expect(true).toBe(false)
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      expect(error.message).toBe("Some error message")
    }
  })
})

describe("Test Suite for service findName pessoa", () => {
  beforeAll(() => {
    jest.clearAllMocks()
  })

  test("should find name a person entity ", async () => {
    const spy = jest
      .spyOn(repositoriesPessoa, "findName")
      .mockReturnValue(
        Promise.resolve([
          new PessoaEntity({ nome: "test", sobrenome: "unitario" }),
        ]),
      )

    const result = await service.findName("test")

    expect(Array.isArray(result)).toBeTruthy()
    expect(spy).toBeCalled()
    expect(result[0].nome).toBe("test")
    expect(result[0].sobrenome).toBe("unitario")
  })

  test("should handle exception when repository findName method throws", async () => {
    jest
      .spyOn(repositoriesPessoa, "findName")
      .mockRejectedValue(new CustomError("Some error message"))

    try {
      await service.findName("test")
      // Se o método create não lançar uma exceção, esta linha falhará no teste
      expect(true).toBe(false)
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      expect(error.message).toBe("Some error message")
    }
  })
})

describe("Test Suite for service findAll pessoa", () => {
  beforeAll(() => {
    jest.clearAllMocks()
  })

  test("should find all a person entity ", async () => {
    const spy = jest
      .spyOn(repositoriesPessoa, "findAll")
      .mockReturnValue(
        Promise.resolve([
          new PessoaEntity({ nome: "test", sobrenome: "unitario" }),
        ]),
      )

    const result = await service.findAll()

    expect(Array.isArray(result)).toBeTruthy()
    expect(spy).toBeCalled()
    expect(result[0].nome).toBe("test")
    expect(result[0].sobrenome).toBe("unitario")
  })

  test("should handle exception when repository find all method throws", async () => {
    jest
      .spyOn(repositoriesPessoa, "findAll")
      .mockRejectedValue(new CustomError("Some error message"))

    try {
      await service.findAll()
      // Se o método create não lançar uma exceção, esta linha falhará no teste
      expect(true).toBe(false)
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      expect(error.message).toBe("Some error message")
    }
  })
})

describe("Test Suite for service update pessoa", () => {
  beforeAll(() => {
    jest.clearAllMocks()
  })

  test("should update a person contact and if existe fone update fone", async () => {
    jest.spyOn(repositoriesPessoa, "findOne").mockReturnValue(
      Promise.resolve(
        new PessoaEntity({
          nome: "test",
          sobrenome: "unitario",
          fone: { celular: true, codigo: "88", numero: "999151386" },
        }),
      ),
    )
    const spyUpdatePessoa = jest
      .spyOn(repositoriesPessoa, "update")
      .mockReturnValue(Promise.resolve([]))

    const spyUpdateFone = jest
      .spyOn(respositoryFone, "update")
      .mockReturnValue(Promise.resolve(null))

    const result = await service.update({
      nome: "test",
      sobrenome: "update",
      id: 1,
    })

    expect(result).toBeInstanceOf(PessoaEntity)
    expect(spyUpdatePessoa).toBeCalled()
    expect(spyUpdateFone).toBeCalled()
    expect(result.nome).toBe("test")
    expect(result.sobrenome).toBe("update")
  })

  test("should update return null if fone does`t exist", async () => {
    jest.clearAllMocks()
    jest
      .spyOn(repositoriesPessoa, "findOne")
      .mockReturnValue(Promise.resolve(undefined))
    const spyUpdatePessoa = jest.spyOn(repositoriesPessoa, "update")
    const spyUpdateFone = jest.spyOn(respositoryFone, "update")

    const result = await service.update({
      nome: "test",
      sobrenome: "unitario",
      id: 1,
    })

    expect(spyUpdatePessoa).not.toHaveBeenCalled()
    expect(spyUpdateFone).not.toHaveBeenCalled()
    expect(result).toBeUndefined()
  })
})
