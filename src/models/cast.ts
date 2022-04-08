import { Model, DataTypes, Sequelize } from "sequelize"

export default class Cast extends Model {
  public id!: number;
  public castName!: string;
  public shopName?: string;
  public postedDate!: Date;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static initialize(sequelize: Sequelize) {
    this.init({
      castName: DataTypes.STRING,
      shopName: DataTypes.STRING,
      postedDate: DataTypes.DATE
    }, {
      sequelize,
      modelName: "Cast",
      tableName: "Casts",
      underscored: true,
      createdAt: "created_at",
      updatedAt: "update_at"
    })
    return this;
  }

  static assonciate() { }
}