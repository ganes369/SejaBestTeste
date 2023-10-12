import { IFoneEntity } from "./fone";

export interface IPessoaEntity {
    nome: string;
    sobrenome: string;
    fone?: IFoneEntity;
}

export class PessoaEntity {
    nome: string;
    sobrenome: string;
    fone: IFoneEntity;

    constructor(nome: string, sobrenome: string, fone?: IFoneEntity) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.fone = fone;
    }

    static create(props: IPessoaEntity): PessoaEntity {
        return new PessoaEntity(props.nome, props.sobrenome, props.fone);
    }

    setPessoa(props: IPessoaEntity): IPessoaEntity {
        if (props.nome) {
            this.nome = props.nome;
        }
        if (props.sobrenome) {
            this.sobrenome = props.sobrenome;
        }
        if (props.fone) {
            this.fone = props.fone;
        }

        return this
    }

    getPessoa(): IPessoaEntity {
        return this
    }
}
