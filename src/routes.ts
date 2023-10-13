import express, { Request, Response } from "express"
import { PessoaController } from "./3-controllers/pessoa/pessoaController"
import { CustomError } from "./2-business/erros/customError"

const router = express.Router()
const controllerPessoa = new PessoaController()

// Rota para criar novo contato
router.post("/create/contact", async (req: Request, res: Response) => {
  try {
    const { nome, sobrenome, fone } = req.body
    const result = await controllerPessoa.create({ nome, sobrenome, fone })

    return res.status(201).json(result)
  } catch (error) {
    return res.status(500).json(new CustomError(error.message))
  }
})

// Rota para listar todos os contatos
router.get("/list/contact", async (_req: Request, res: Response) => {
  try {
    const result = await controllerPessoa.listAll()

    if (result instanceof Error) {
      return res.status(404).json(result)
    }

    return res.status(200).json(result)
  } catch (error) {
    return res.status(500).json(new CustomError(error.message))
  }
})

// Rota para listar contato por id
router.get("/list/contact/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await controllerPessoa.findOne(Number(id))

    if (!result) {
      return res.status(404).json("not found")
    }
    return res.status(200).json(result)
  } catch (error) {
    return res.status(500).json(error)
  }
})

//Rota para buscar por nome contato
router.get("/list/name/contact/", async (req: Request, res: Response) => {
  try {
    const { nome } = req.query
    const result = await controllerPessoa.findName(nome.toString())

    if (!result) {
      return res.status(404).send("not found")
    }
    return res.status(200).json(result)
  } catch (error) {
    return res.status(500).json(new CustomError(error.message))
  }
})

//Rota para atualizar contato
router.put("/update/contact/", async (req: Request, res: Response) => {
  try {
    const { id, nome, sobrenome, fone } = req.body ?? {}

    const result = await controllerPessoa.update({ id, nome, sobrenome, fone })
    if (result === undefined) {
      return res.status(404).send("not found")
    }
    return res.status(204).json()
  } catch (error) {
    return res.status(500).json(new CustomError(error.message))
  }
})

// Adicione mais rotas conforme necessário

export default router
