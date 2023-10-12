export interface IFoneEntity {
    codigo: string;
    numero: string;
    celular: boolean;
}

export class FoneEntity {
    codigo: string;
    numero: string;
    celular: boolean;

    constructor(codigo: string, numero: string, celular: boolean) {
        this.codigo = codigo;
        this.numero = numero;
        this.celular = celular;
    }

    static create(props: IFoneEntity): FoneEntity {
        return new FoneEntity(props.codigo, props.numero, props.celular);
    }

    setPessoa(props: IFoneEntity): IFoneEntity {
        if (props.codigo) {
            this.codigo = props.codigo;
        }
        if (props.numero) {
            this.numero = props.numero;
        }
        if (props.celular) {
            this.celular = props.celular;
        }

        return this
    }

    getPessoa(): IFoneEntity {
        return this
    }
}