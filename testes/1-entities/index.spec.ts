import { FoneEntity, IFoneEntity } from '../../src/1-entities/fone'
import { IPessoaEntity, PessoaEntity } from '../../src/1-entities/pessoa'

describe('Test Suite for Entity Pessoa', () => {

    let entity: IPessoaEntity
    let fone: IFoneEntity
    beforeAll(() => {
        fone = FoneEntity.create({
            numero: '999151386',
            celular: true,
            codigo: '88'
        })
        entity = PessoaEntity.create({
            nome: 'test',
            sobrenome: 'unitario',
            fone: fone
        })
        // jest.spyOn(console, console.log.name).mockImplementation(() => {})
    })

    test('should create a person entity ', () => {
        const expected = { ...entity };
        Reflect.deleteProperty(expected, 'fone')

        expect(expected.nome).toBe('test');
        expect(expected.sobrenome).toBe('unitario');
        expect(expected.fone).toBeFalsy();
    })

    test('should create a PessoaEntity instance with fone', () => {
        // Dados de teste inválidos (sem propriedades)
        const expected = entity

        expect(expected).toBeInstanceOf(PessoaEntity);
        expect(expected.nome).toBe('test');
        expect(expected.sobrenome).toBe('unitario');
        expect(expected.fone?.celular).toBeTruthy();
        expect(expected.fone?.codigo).toBe('88');
        expect(expected.fone?.numero).toBe('999151386');
    });
    
})