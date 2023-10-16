import { DataTypes, Model } from "sequelize"
import { sequelize } from "../../3-frameworks/utility/database"
import { IPessoaEntity } from "../../1-domain/pessoa"
import { FoneModel } from "./foneModel"

export class PessoaModel extends Model<
  IPessoaEntity & {
    id: string
  }
> {}

PessoaModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    sobrenome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "pessoa",
    timestamps: true,
    underscored: true,

    sequelize,
  },
)

PessoaModel.hasOne(FoneModel, {
  foreignKey: "pessoa",
  as: "fone",
  constraints: false,
})
