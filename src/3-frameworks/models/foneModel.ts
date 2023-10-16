import { DataTypes, Model } from "sequelize"
import { sequelize } from "../../3-frameworks/utility/database"
import { IFoneEntity } from "../../1-domain/fone"

export class FoneModel extends Model<
  IFoneEntity & {
    id: string
    pessoa: number
  }
> {}

FoneModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    celular: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

    codigo: {
      type: DataTypes.STRING(72),
      allowNull: false,
    },
    numero: {
      type: DataTypes.STRING(72),
      allowNull: false,
    },

    pessoa: {
      type: DataTypes.INTEGER,
      references: {
        model: "pessoa",
        key: "id",
      },
      allowNull: true,
      unique: true,
    },
  },
  {
    tableName: "fone",
    timestamps: true,
    underscored: true,
    sequelize,
  },
)
