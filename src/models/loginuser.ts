import { Model, DataTypes, Sequelize } from "sequelize"

export default class LoginUser extends Model {
  public id!: number;
  public name!: string;
  public password!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static initialize(sequelize: Sequelize) {
    this.init({
      name: DataTypes.STRING,
      password: DataTypes.STRING
    }, {
      sequelize,
      modelName: 'LoginUser',
    })
    return this;
  }
  static assonciate() { }
}